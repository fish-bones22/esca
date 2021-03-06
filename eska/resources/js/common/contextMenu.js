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
        'nesting': false,
        'followCursor': false,
        'cursorLeft': 0,
        'cursorTop': 0,
        'bottom': null,
        'left':null,
        'top': null,
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
     * Set option value
     * @param {Object} object
     * @param {String} key
     * @param {String} value
     */
    function setOption(object, key, value) {
        var options = $(object).data('contextMenu-options');

        options[key] = value;

        $(object).data('contextMenu-options', options);
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
        $(obj).removeClass('expanded');
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

            var left = getOption(obj, 'left');
            var top = getOption(obj, 'top');
            var followCursor = getOption(obj, 'followCursor');
            var viewPortWidth = $(window).width();
            var viewPortHeight = $(window).height();

            // Compute where to place menu
            if (!followCursor && left == null) {
                margin = $($(target)[0].offsetParent).css('margin-left').replace('px', '')*1;
                left = $(target).offset().left - $(target)[0].offsetParent.offsetLeft + margin;
                var width = $(obj).width();
                if (left > viewPortWidth / 2) {
                    var targetWidth = $(target).width();
                    left = left - width + targetWidth - margin;
                }
            }

            if (!followCursor && top == null) {
                top = $(target).offset().top;
                var height = $(obj).height();
                if (viewPortHeight < top + height*2.5) {
                    top = top - height;
                }
                else {
                    top = top + $(target).height();
                }
            }

            if (followCursor) {
                left = getOption(obj, 'cursorLeft');
                top = getOption(obj, 'cursorTop');
                if (left > viewPortWidth / 2) {
                    var targetWidth = $(target).width();
                    left = left -  $(obj).width();
                }
                if (viewPortHeight < top + height*2.5) {
                    top = top - $(obj).height();
                }
            }

            $(obj).trigger('contextMenu:hide', [obj, target]);
            $(obj).data('target', target);
            $(obj).css('left', left)
            $(obj).css('top', top);
            var bottom = getOption(obj, 'bottom');
            if (bottom != null) {
                $(obj).css('bottom', bottom);
            }

            $(target).addClass('context-menu-target');
        }
        if (!getOption(obj, 'nesting')) hideAll();
        $(obj).addClass('expanded');
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

                if (settings.followCursor) {
                    $(document).on('mouseup', function(event) {
                        setOption(self, 'cursorLeft', event.pageX);
                        setOption(self, 'cursorTop', event.pageY);
                    })
                }
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
