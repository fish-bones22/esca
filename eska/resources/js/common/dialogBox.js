(function($) {

    var defaults = {
        'caller': null,
        'messagePanel': '.message',
        'controls': [
            {
                'name': 'close',
                'selector': '.close',
                'action': function(event, dialogBox, caller) {
                    hide(dialogBox);
                }
            }
        ]
    }

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(obj, option) {
        var options = $(obj).data('dialogBox-options');

        if (options == undefined || !options.hasOwnProperty(option)) return null;

        return options[option];
    }

    /**
     * Show dialog box with message
     * @param {object} obj
     * @param {string} message Text to show
     */
    function show(obj, message, caller = null) {
        var messagePanel = $(obj).find(getOption(obj, 'messagePanel'));
        if (messagePanel.length > 0)
            messagePanel.html(message);
        $(obj).show();
    }

    /**
     * Hide dialog box
     * @param {object} obj
     */
    function hide(obj,) {
        $(obj).hide();
    }

    $.fn.dialogBox = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {
                var self = this;

                var settings = $.extend({}, defaults, command);
                $(self).data('dialogBox-options', settings);

                $(self).addClass('dialogBox');

                // Set draggable
                $(self).draggable({
                    'addClasses': false,
                    'grid': [10, 10]
                });

                // Set up control events
                settings.controls.forEach(control => {
                    $(self).find(control.selector).on('click', function() {
                        $(self).trigger('dialogBox:' + control.name, [ self, settings.caller ]);
                    });
                    $(self).on('dialogBox:' + control.name, control.action);
                });
            });
        }

        if (typeof command == 'string') {

            switch (command.toLocaleLowerCase()) {

                case 'show':
                    return $(this).each(function() {
                        show(this, option, value);
                    });

                case 'hide':
                    return $(this).each(function() {
                        hide(this);
                    });
            }
        }
    }
})(jQuery)
