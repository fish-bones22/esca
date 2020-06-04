(function($) {

    var defaults = {
        'nextAction': function() {},
        'prevAction': function() {},
        'previousSelector': '',
        'nextSelector': '',
        'controls': [
            {
                'runOnInit': false,
                'name': 'default',
                'selector': '#default',
                'action': function(event) {}
            }
        ]
    }

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('outline-options');

        if (options == undefined || !options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Set option value
     * @param {Object} object
     * @param {String} key
     */
    function setOption(object, key, value) {
        var options = $(object).data('outline-options');
        options[key] = value;
        $(object).data('outline-options', options);
    }

    /**
     * Unset then set next button callback
     * @param {function} callback
     */
    function setNext(obj, callback) {
        $(getOption(obj, 'nextSelector')).off('click').on('click', callback);
    }

    /**
     * Unset then set previous button callback
     * @param {function} callback
     */
    function setPrevious(obj, callback) {
        $(getOption(obj, 'previousSelector')).off('click').on('click', callback);
    }

    $.fn.outline = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('outline-options', settings);

                settings.controls.forEach(control => {
                    $(self).on('outline:' + control.name, control.action);
                    // Run on start
                    if (control.runOnInit) {
                        $(self).trigger('outline:' + control.name);
                    }
                    $(self).find(control.selector).on('click', function() {
                        $(self).trigger('outline:' + control.name);
                    });
                });
            });
        }

        if (typeof command == 'string') {
            switch(command.toLocaleLowerCase()) {
                case 'setnext':
                    return $(this).each(function() {
                        setNext(this, option);
                    });
                case 'setprevious':
                    return $(this).each(function() {
                        setPrevious(this, option);
                    });
            }
        }
    }

})(jQuery);
