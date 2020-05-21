(function($){

var defaults = {
    key: "panel",
    panelAction: ".panel-actions",
    startCount: 1,
    panelId: "panel",
    navigateByArrowKeys: true,
    newPanelKeys: [13]
};

var panelSelector = ".panel-item";
var panelClass = panelSelector.replace(/[.,#]*/g, '');

/**
 * Initialize the options
 * @param {Object} options 
 */
function initOptions(options) {
    if (!options.hasOwnProperty('panelId') || options['panelId'] == '') {
        options['panelId'] = options.hasOwnProperty('key') ? options.key : defaults.key;
    }
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
    var nextPanel = $(obj).find(panelSelector+'[data-order="' + (index+1) + '"]');
    var firstSibling = nextPanel;
    // Adjust order of succeeding panels first
    while (nextPanel.length > 0) {
        var currOrder = nextPanel.attr('data-order')*1;
        nextPanel.attr('id', getOption(obj, 'panelId') + (currOrder+1))
        .attr('data-order', currOrder+1);
        nextPanel = nextPanel.next(panelSelector);
    }
    // Get panel template selector
    var panelTemplateSelector = $(getOption(obj, 'panelTemplate'));
    // Set up attributes
    var panel = $($(panelTemplateSelector).html()).attr('id', getOption(obj, 'panelId') + (index+1))
    .attr('data-order', index+1)
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
    var panel = $(obj).find(panelSelector + '[data-order="' + (index + 1) + '"]');
    // Get next sibling item
    var next = panel.next(panelSelector);
    panel.remove();
    panel = next;
    while (panel.length > 0) {
        // Get current order of the next sibling panel
        currentOrder = panel.attr('data-order')*1 - 1;
        // Set order of the item
        panel.attr('id', getOption(obj, 'panelId') + currentOrder)
             .attr('data-order', currentOrder);
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

            // Create panels
            for (var i = 0; i < settings.startCount; i++) {
                insertPanel(self);
            }

            /** Event listeners **/

            // Add panels button
            $(document).on('click', settings.adderSelector + ',  ' + '[data-target="#' + $(self).attr('id') + '"]',function() {
                // Create panel then focus on the closest text input
                insertPanel(self).find('input[type="text"]').focus();
            });
        });
    }

    /** ACTIONS */
    if (typeof command === 'string') {
        switch(command.toLowerCase()) {
            case 'insert':
                return this.each(function() {
                    insertPanel(this, option);
                });
            case 'remove':
                return this.each(function() {
                    removePanel(this, option);
                });
        }
    }
} 

})(jQuery)