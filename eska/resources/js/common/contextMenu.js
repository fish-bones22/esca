(function($) {

    var defaults = {
        'menuItems': [
            {
                'name': 'close',
                'selector': '.close',
                'action': function(ev, obj, target) {
                    hide(obj, target);
                }
            }
        ],
        'onShow': function(ev, obj, target) {},
        'onHide': function(ev, obj) {},
        'nesting': false
    }


    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('contextMenu-options');

        if (!options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Hide context menu
     * @param {Object} obj
     */
    function hide(obj, target = null) {
        $(obj).trigger('contextMenu:hide', [obj, target]);
        $(obj).hide();
        $($(obj).data('target')).removeClass('context-menu-target');
        $(obj).data('target', null);
    }
    /**
     * Hide context menu
     * @param {Object} obj
     */
    function hideAll() {
        $('.contextMenu:visible').each(function() {
            hide(this, $(this).data('target'));
        });
    }
    /**
     * Show context menu and set target
     * @param {object} obj
     * @param {object} target Calling DOM of the context menu
     */
    function show(obj, target) {
        if (target != undefined) {
            // Compute where to place menu
            var left = $(target).offset().left - $(target)[0].offsetParent.offsetLeft;
            var top = $(target).offset().top;
            var width = $(obj).width();
            var height = $(obj).height();
            var viewPortWidth = $(document).width();
            var viewPortHeight = $(document).height();
            if (left > viewPortWidth / 2) {
                var targetWidth = $(target).width();
                left = left - width + targetWidth;
            }
            if (viewPortHeight < top + height*2.5) {
                top = top - height;
            }
            else {
                top = top + $(target).height();
            }

            $(obj).trigger('contextMenu:hide', [obj, target]);
            $(obj).data('target', target);
            $(obj).css('left', left)
            .css('top', top);

            $(target).addClass('context-menu-target');
        }
        if (!getOption(obj, 'nesting')) hideAll();
        $(obj).show();
        $(obj).trigger('contextMenu:show', [obj, target]);
    }
    /**
     * Hide menu if shown, show if hidden
     * @param {object} target Calling DOM of the context menu
     */
    function toggle(obj, target) {
        if ($(obj).is(':hidden')) {
            show(obj, target);
        } else {
            hide(obj, target);
        }
    }

    $.fn.contextMenu = function(command, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {
                var self = this;
                // Combine menu items array from default and command
                command.menuItems = defaults.menuItems.concat((command.hasOwnProperty('menuItems') ? command.menuItems : []));
                // Extend settings from default
                var settings = $.extend({}, defaults, command);
                $(self).data('contextMenu-options', settings);

                // Collapse context menu when clicked outside
                $(document).on('click', function(event){
                    if (!$(self).is(event.target)
                    && $(event.target).closest($(self).data('target')).length <= 0
                    && $(event.target).closest(self).length <= 0
                    && !$(self).is(':hidden')) {
                        hide(self, $(self).data('target'));
                    }
                });
                // Set up context menu items click event listener
                settings.menuItems.forEach(element => {
                    $(self).on('contextMenu:'+element.name, element.action);
                    $(self).find(element.selector).on('click', { 'obj': self }, function(ev) {
                        $(self).trigger('contextMenu:'+element.name, [ self, $(self).data('target') ]);
                    });
                });
                // Disable right-click for context menu
                $(self).on('contextmenu', function(ev) {
                    ev.preventDefault();
                });

                // Custom events
                $(self).on('contextMenu:show', settings.onShow);
                $(self).on('contextMenu:hide', settings.onHide);

                $(self).addClass('contextMenu');
            });
        }

        switch(command.toLowerCase()) {
            case 'hide':
                return $(this).each(function() {
                    hide(this, value);
                });
            case 'hideall':
                hideAll();
                return $(this);
            case 'show':
                return $(this).each(function() {
                    show(this, value);
                });
            case 'toggle':
                return $(this).each(function() {
                    toggle(this, value);
                });
            case 'isshown':
                return !$(this).is(':hidden');
            case 'ishidden':
                return $(this).is(':hidden');
        }

    }

})(jQuery)
