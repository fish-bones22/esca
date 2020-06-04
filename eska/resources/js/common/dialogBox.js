(function($) {

    var defaults = {
        'cancelInputs': false,
        'callback': null,
        'messagePanel': '.message',
        'controls': [
            {
                'name': 'close',
                'selector': '.close',
                'action': function(event, dialogBox, callback) {
                    hide(dialogBox);
                }
            }
        ]
    }

    var zIndex = 999;

    /**
     * Get option value
     * @param {Object} obj
     * @param {String} option
     */
    function getOption(obj, option) {
        var options = $(obj).data('dialogBox-options');

        if (options == undefined || !options.hasOwnProperty(option)) return null;

        return options[option];
    }

    /**
     * Set option value
     * @param {Object} obj
     * @param {String} option
     * @param {any} value
     */
    function setOption(obj, option, value) {
        var options = $(obj).data('dialogBox-options');
        options[option] = value;
        $(obj).data('dialogBox-options', options);
    }

    /**
     * Show dialog box with message
     * @param {object} obj
     * @param {string} message Text to show
     */
    function show(obj, message, caller = null) {
        hide($('.dialogBox'));
        var messagePanel = $(obj).find(getOption(obj, 'messagePanel'));
        if (messagePanel.length > 0)
            messagePanel.html(message);
        if (typeof caller == 'function') {
            setOption(obj, 'callback', caller);
        }
        if (getOption(obj, 'cancelInputs')) {
            cancelInputs(obj);
        }
        $(obj).show();
    }

    /**
     * Hide dialog box
     * @param {object} obj
     */
    function hide(obj,) {
        $(obj).hide();
        if (getOption(obj, 'cancelInputs') && $('.dialogBox-backdrop').length > 0) {
            $('.dialogBox-backdrop').remove();
        }
    }

    /**
     *
     */
    function cancelInputs(obj) {
        var blocker = $('<div>').addClass('dialogBox-backdrop')
        .css('width', '100%')
        .css('height', '100%')
        .css('top', 0)
        .css('position', 'fixed')
        .css('background-color', 'rgba(0, 0, 0, 0.2)')
        .css('z-index', zIndex - 1)
        .on('click', function() {
            var opacity = 0.4;
            var interval = undefined;
            $(this).css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');
            window.clearInterval(interval);
            interval = window.setInterval(function() {
                opacity -= 0.05;
                blocker.css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');
                if (opacity <= 0.35) window.clearInterval(interval);
            }, 50);
        });
        $('body').append(blocker);
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

                $(self).css('z-index', zIndex);

                // Set up control events
                settings.controls.forEach(control => {
                    $(self).find(control.selector).on('click', function() {
                        $(self).trigger('dialogBox:' + control.name, [ self, settings.callback ]);
                        setOption(self, 'callback', null);
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
