(function($) {

    var defaults = {
        'toggler': '.options-toggler',
    }

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('optionsPanel-options');

        if (options == undefined || !options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Set option value
     * @param {Object} object
     * @param {String} key
     * @param {String} value
     */
    function setOption(object, key, value) {
        var options = $(object).data('optionsPanel-options');

        options[key] = value;

        $(object).data('optionsPanel-options', options);
    }

    function show(obj) {
        $(obj).addClass('shown');
    }

    function hide(obj) {
        $(obj).removeClass('shown');
    }

    $.fn.optionsPanel = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);

                // Options panel toggler
                $(document).find(settings.toggler).on('click', function() {
                    if ($(self).hasClass('shown')) {
                        hide(self);
                    } else {
                        show(self);
                    }
                })

                // Options panel close
                $(self).find('.close').on('click', function() {
                    hide(self);
                });

                // Options panel items
                $(self).find('.option-item.group').on('click', function() {
                    if (!$(this).hasClass('selected')) {
                        $(this).siblings('.selected').removeClass('selected');
                        $(this).addClass('selected');
                        $($(this).attr('data-target')).val($(this).attr('data-value')).trigger('change');
                    }
                });

                $(self).find('.section-content').each(function() {
                    var inp = $(this).find('input[type="hidden"]');
                    var val = inp.val();
                    var id = inp.attr('id');
                    $(this).find('.option-item[data-target="#' + id + '"][data-value="' + val + '"]').trigger('click');
                })

                // Options panel section toggler
                $(self).find('.fold').on('click', function() {
                    $(this).closest('.section').removeClass('expanded');
                })
                $(self).find('.expand').on('click', function() {
                    $(this).closest('.section').addClass('expanded');
                });

                // Custom event listeners
                settings.listeners.forEach(listener => {
                    $(self).find(listener.target).on(listener.event, listener.action);
                })


                $(self).data('optionsPanel-options', settings);

            });
        }

        if (typeof command == 'string') {

            switch(command.toLocaleLowerCase()) {
                case 'hide':
                    return $(this).each(function() {
                        hide(this);
                    });
                case 'show':
                    return $(this).each(function() {
                        show(this);
                    })
            }

        }
    }

})(jQuery)
