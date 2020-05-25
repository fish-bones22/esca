(function($){

var defaults = {
    key: "panel",
    panelAction: ".panel-actions",
    startCount: 1,
    navigateByArrowKeys: true,
    newPanelKeys: [13],
    isDraggable: true,
    draggable: {},
    autoformatPaste: false,
    getChildOfTemplate: true,
};

var panelSelector = ".panel-item";
var panelClass = panelSelector.replace(/[.,#]*/g, '');

/**
 * Initialize the options
 * @param {Object} options 
 */
function initOptions(options) {
    if (!options.hasOwnProperty('panelAction') || options['panelAction'] == '') {
        options['panelAction'] = options.hasOwnProperty('key') ?  "." + options.key + "-actions" : defaults.panelAction;
    }
    return options;
}

/**
 * Get option value
 * @param {Object} object 
 * @param {String} key 
 */
function getOption(object, key) {
    var options = $(object).data('dynamicPanel-options');

    if (!options.hasOwnProperty(key)) return null;

    return options[key];
}

/**
 * Set option value
 * @param {Object} object 
 * @param {String} key 
 * @param {String} value 
 */
function setOption(object, key, value) {
    var options = $(object).data('dynamicPanel-options');

    options[key] = value;

    $(object).data('dynamicPanel-options', options);
}

/**
 * Insert a panel from a position
 * @param {object} obj Target DOM
 * @param {int} index Position where to insert the panel
 */
function insertPanel(obj, index) {
    // Get current count of panels
    var panelCount = getOption(obj, 'panelCount');
    if (index == undefined) {
        index = panelCount > 0 ? panelCount : 0;
    }
    if (index > panelCount) {
        index = panelCount;
    }
    // Get next sibling panel
    var nextPanel = $(obj).children(panelSelector+'[data-order="' + (index+1) + '"]').first();
    var firstSibling = nextPanel;
    // Adjust order of succeeding panels first
    while (nextPanel.length > 0) {
        var currOrder = nextPanel.attr('data-order')*1;
        nextPanel.attr('data-order', currOrder+1);
        nextPanel = nextPanel.next(panelSelector);
    }
    // Get panel template selector
    var panelTemplateSelector = getOption(obj, 'panelTemplate');
    var panel;
    if (getOption(obj, 'getChildOfTemplate')) {
        panel = $($(panelTemplateSelector).html());
    } else {
        panel = $(panelTemplateSelector).clone();
    }
    // Set up attributes
    panel.attr('data-order', index+1)
    .addClass(panelClass);
    // Get delete selector from options
    // then set event listener for delete
    var removerSelector = getOption(obj, 'removerSelector');
    panel.find(removerSelector).bind('click', function() {
        var index = $(this).closest(panelSelector).attr('data-order')*1 - 1;
        removePanel(obj, index);
    });
    // Event listener for keys
    panel.find('input[type="text"]').keyup(function(event) {
        focusPanelByKey(obj, panel, event.which);
        if (getOption(obj, 'navigateByArrowKeys') && event.which == 38 || event.which == 40) {
            navigatePanelByKey(panel, event.which == 38 ? 'up' : 'down');
        }
    });
    // Draggable
    var draggable = getOption(obj, 'isDraggable');
    if (draggable) {
        panel.draggable({
            addClasses: false,
            connectToSortable: '#' + $(obj).attr('id'),
            handle: panel.find('.move-handle'),
            revert: true,
            revertDuration: 0,
        });
    }
    // Add to panel container
    if (firstSibling.length <= 0) {
        // Get container selector from options
        var container = getOption(obj, 'container');
        if (container == undefined) {
            $(obj).append(panel);
        } else {
            $(obj).find(container).append(panel);
        }
    } else {
        firstSibling.before(panel);
    }
    // Set panel count
    setOption(obj, 'panelCount', ++panelCount);

    $(obj).trigger('dynamicPanel:insert', [ panel ]);

    return panel;
}

function focusPanelByKey(obj, panel, key) {
    // Get inlcuded keys to activate
    var newPanelKeys = getOption(obj, 'newPanelKeys');
    if (newPanelKeys == undefined || typeof newPanelKeys != 'object' || newPanelKeys.length <= 0) return false;
    // Key not on defined keys
    if (!newPanelKeys.includes(key)) return false;
    // Get closest input from the next panel
    panel = panel.next(panelSelector);
    // If no next panel, create new
    if (panel.length <= 0) { 
        panel = insertPanel(obj);
    }

    // Focus to this panel
    panel.find('input[type="text"]').focus();
}

function navigatePanelByKey(panel, direction) {
    switch(direction.toLowerCase()) {
        case 'up':
            panel = panel.prev(panelSelector);
            break;
        case 'down':
            panel = panel.next(panelSelector);
            break;
        default:
            return false;
    }

    if (panel.length <= 0) return false;

    // Focus to this panel
    panel.find('input[type="text"]').focus();
}

/**
 * Remove target panel and reorder succeeding sibling panels
 * @param {object} obj Target object 
 * @param {int} index panel position to remove
 */
function removePanel(obj, index) {
    // Set panel count
    var panelCount = getOption(obj, 'panelCount');
    if (panelCount <= 0) {
        console.error("dynamicPanel.deletePanel() => No panels to delete");
    }
    if (index == undefined || index > panelCount) {
        index = panelCount - 1;
    }
    var panel = $(obj).children(panelSelector + '[data-order="' + (index + 1) + '"]').first();
    // Get next sibling item
    var next = panel.next(panelSelector);
    panel.remove();
    panel = next;
    while (panel.length > 0) {
        // Get current order of the next sibling panel
        currentOrder = panel.attr('data-order')*1 - 1;
        // Set order of the item
        panel.attr('data-order', currentOrder);
        // Get next sibling item
        panel = panel.next(panelSelector);
    }
    setOption(obj, 'panelCount', --panelCount);
}


$.fn.dynamicPanel = function(command, option, val) {

    /** INIT */
    if (typeof command === 'object')  {
        return this.each(function() {
            var self = this;
            // Get data attributes and add them to settings
            // data-remover
            if ($(self).attr('data-remover') != undefined) {
                command['removerSelector'] = $(self).attr('data-remover');
            }
            // data-adder
            if ($(self).attr('data-adder') != undefined) {
                command['adderSelector'] = $(self).attr('data-adder');
            }
            // data-template
            if ($(self).attr('data-template') != undefined) {
                command['panelTemplate'] = $(self).attr('data-template');
            }
            // Set settings
            let settings = $.extend({}, defaults, initOptions(command));
            $(this).data('dynamicPanel-options', settings);

            // Set draggable
            var dragOpt = settings.draggable;
            var cancelOpt = dragOpt != undefined && dragOpt.hasOwnProperty('cancel') ? dragOpt.cancel : [];
            if (settings.draggable) {
                $(self).sortable({
                    addClasses: false,
                    cancel: ['input', 'a', 'select'].concat(cancelOpt).join(','),
                    cursor: 'grabbing',
                    stop: function(event, ui) {
                        // Resort panel after sorting
                        var index = 1;
                        $(self).children(panelSelector).each(function() {
                            if (index !== $(this).attr('data-order')*1) { 
                                $(this).attr('data-order', index);
                            }
                            index++;
                        });
                        $(ui.item).removeAttr('style');
                    }
                });
            }

            /** Event listeners **/

            // Add panels button
            $(document).on('click', settings.adderSelector + ',  ' + '[data-target="#' + $(self).attr('id') + '"]' ,function() {
                // Create panel then focus on the closest text input
                insertPanel(self).find('input[type="text"]').focus();
            });

            // paste event
            if (settings.autoformatPaste) {
                $(document).on('paste', '#' + $(self).attr('id') + '>' + panelSelector + ' input[type="text"]', function(event) {
                    // Get clipboard data
                    var clipboardData = event.originalEvent.clipboardData.getData('text');
                    if (clipboardData == undefined) return true;
                    // Split clipboard data by newline
                    var lines = clipboardData.split('\n');
                    if (lines == undefined || lines.length <= 0) return true;
                    event.preventDefault();
                    // Process clipboard data, creating new panel per line of text
                    let panelInput = $(this);
                    panelInput.val(lines[0].trim());
                    for (var i = 1; i < lines.length; i++) {
                        panelInput = panelInput.closest(panelSelector).next(panelSelector).find('input[type="text"]');
                        if (panelInput.length <= 0) {
                            panelInput = insertPanel(self).find('input[type="text"]');
                        }
                        panelInput.val(lines[i].trim());
                    }
            });

            }
           
            /** Custom events */ 

            // onInsert
            if (settings.hasOwnProperty('onInsert') && settings.onInsert != undefined) {
                $(self).on('dynamicPanel:insert', settings.onInsert);
            }

            // Create panels
            for (var i = 0; i < settings.startCount; i++) {
                insertPanel(self);
            }
            
        });
    }

    /** ACTIONS */
    if (typeof command === 'string') {
        switch(command.toLowerCase()) {
            case 'option':
                return getOption(this, option);
            case 'insert':
                var panel;
                this.each(function() {
                    panel = insertPanel(this, option);
                });
                return panel;
            case 'remove':
                return this.each(function() {
                    removePanel(this, option);
                });
        }
    }
} 

})(jQuery)