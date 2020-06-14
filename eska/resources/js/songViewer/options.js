import Pickr from '@simonwep/pickr/dist/pickr.es5.min';

(function($) {

    var defaults = {
        'toggler': '.options-toggler',
        'options': {
            'mode': '',
            'performancefontsize': '',
            'performancefontfamily': '',
            'displayfontsize': '',
            'displayfontfamily': '',
            'displayfontcolor': '',
            'displayalignment': '',
            'simplefontsize': ''
        }
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

    function setOptionValue(obj, key, value) {
        var options = getOption(obj, 'options');
        if (options == null || typeof options != 'object' || !options.hasOwnProperty(key)) return;
        options[key] = value;
        setOption(obj, 'options', options);
    }

    function serialize(obj) {
        var options = getOption(obj, 'options');
        if (options == null || typeof options != 'object') return;
        window.localStorage.setItem('songvieweroptions', JSON.stringify(options));
    }

    function deserialize(obj) {
        var strOptions = window.localStorage.getItem('songvieweroptions');
        var defaultOptions =  getOption(obj, 'options');
        if (strOptions == null) return defaultOptions;
        var options = JSON.parse(strOptions);
        setOption(obj, 'options', options);
        return options;
    }

    $.fn.optionsPanel = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('optionsPanel-options', settings);

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

                // Color picker
                var pickr = Pickr.create({
                    'el': '#optionColorPicker',
                    'theme': 'monolith',
                    'swatches': [
                        'rgba(0, 0, 0, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(216, 101, 96, 1)',
                        'rgba(83, 172, 138, 1)',
                        'rgba(80, 113, 180, 1)',
                    ],
                    'components': {
                        // Main components
                        'preview': true,
                        'opacity': true,
                        'hue': true,
                        // Input / output Options
                        'interaction': {
                            'input': true,
                            'save': true
                        }
                    },
                    'i18n': {
                        'btn:save': 'Set',
                    }
                });
                pickr.on('save', function(color, instance) {
                    $(self).find('#optionAudienceFontColor').val(color.toRGBA().toString(0)).trigger('change');
                    pickr.hide();
                });

                $(self).removeClass('performance')
                .removeClass('simple')
                .removeClass('audience')
                .addClass($(self).find('#optionView').val());

                // Set default values
                var defaultOptions = deserialize(self);
                $(self).find('#optionView').val(defaultOptions.mode == '' ? settings.options.mode : defaultOptions.mode).trigger('change');
                $(self).find('#optionPerformanceFontSize').children('option[value="' + (defaultOptions.performancefontsize == '' ? settings.options.performancefontsize : defaultOptions.performancefontsize)  + '"]').prop('selected', true);
                $(self).find('#optionPerformanceFontFamily').children('option[value="' + (defaultOptions.performancefontfamily == '' ? settings.options.performancefontfamily : defaultOptions.performancefontfamily)  + '"]').prop('selected', true);
                $(self).find('#optionAudienceFontSize').children('option[value="' + (defaultOptions.displayfontsize == '' ? settings.options.displayfontsize : defaultOptions.displayfontsize)  + '"]').prop('selected', true);
                $(self).find('#optionAudienceFontFamily').children('option[value="' + (defaultOptions.displayfontfamily == '' ? settings.options.displayfontfamily : defaultOptions.displayfontfamily)  + '"]').prop('selected', true);
                $(self).find('#optionAudienceFontColor').val(defaultOptions.displayfontcolor == '' ? settings.options.displayfontcolor : defaultOptions.displayfontcolor);
                window.setTimeout(function() { pickr.setColor(defaultOptions.displayfontcolor == '' ? settings.options.displayfontcolor : defaultOptions.displayfontcolor)}, 500);
                $(self).find('#optionAudienceAlignment').val(defaultOptions.displayalignment == '' ? settings.options.displayalignment : defaultOptions.displayalignment);
                $(self).find('#optionSimpleFontSize').children('option[value="' + (defaultOptions.simplefontsize == '' ? settings.options.simplefontsize : defaultOptions.simplefontsize)  + '"]').prop('selected', true);

                $(self).find('.section-content').each(function() {
                    var section = this;
                    var inp = $(this).find('input[type="hidden"]');
                    inp.each(function() {
                        var val = $(this).val();
                        var id = $(this).attr('id');
                        $(section).find('.option-item[data-target="#' + id + '"][data-value="' + val + '"]').trigger('click');
                    })
                });

            });

        }

        if (typeof command == 'string') {

            switch(command.toLocaleLowerCase()) {
                case 'option':
                    if (typeof option != 'string') return this;
                    return getOption(this, option);
                case 'hide':
                    return $(this).each(function() {
                        hide(this);
                    });
                case 'show':
                    return $(this).each(function() {
                        show(this);
                    });
                case 'setoptionvalue':
                    if (option == undefined || value == undefined) return this;
                    return $(this).each(function() {
                        setOptionValue(this, option, value);
                    });
                case 'serialize':
                    return $(this).each(function() {
                        serialize(this);
                    });
            }

        }
    }

})(jQuery)
