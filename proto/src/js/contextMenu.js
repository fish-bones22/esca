(function($) {

    var defaults = {
        'menuItems': [
            {
                'selector': '.delete',
                'action': function(ev, obj, target) {
                    $(target).remove();
                    hide(self);
                },
            }
        ]
    }
    /**
     * Hide context menu
     * @param {Object} obj 
     */
    function hide(obj) {
        $(obj).hide();
        $(obj).data('target', null);
    }
    /**
     * Show context menu and set target
     * @param {object} obj 
     * @param {object} target Calling DOM of the context menu
     */
    function show(obj, target) {
        if (target != undefined) {
            // Compute where to place menu
            var left = $(target).offset().left;
            var width = $(obj).width();
            var viewPortWidth = $(document).width();
            left = left + width > viewPortWidth ? viewPortWidth - width - 20 : left;
            $(obj).data('target', target);
            $(obj).css('left', left)
            .css('top', $(target).offset().top + $(target).height());
        }
        $(obj).show();
    }
    /**
     * Hide menu if shown, show if hidden
     * @param {object} target Calling DOM of the context menu
     */
    function toggle(obj, target) {
        if ($(obj).is(':hidden')) {
            show(obj, target);
        } else {
            hide(obj);
        }
    }

    $.fn.contextMenu = function(command, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {
                var self = this;
                
                var settings = $.extend({}, defaults, command);
                $(self).data('contextMenu-options', settings);

                // Collapse context menu when clicked outside
                $(document).on('click', function(event){ 
                    if (!$(self).is(event.target) && $($(self).data('target')).has(event.target).length <= 0) {
                        $(self).hide();
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
            });
        }
        
        switch(command.toLowerCase()) {
            case 'hide':
                return $(this).each(function() {
                    hide(this);
                });
            case 'show':
                return $(this).each(function() {
                    show(this, value);
                });
            case 'toggle':
                return $(this).each(function() {
                    toggle(this, value);
                });
        }

    }

})(jQuery)