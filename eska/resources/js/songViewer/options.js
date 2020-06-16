import Pickr from '@simonwep/pickr/dist/pickr.es5.min';

(function($) {

    var defaults = {
        'toggler': '.options-toggler',
        'imageSelector': '',
        'options': {
            'mode': undefined,
            'performancefontsize': undefined,
            'performancefontfamily': undefined,
            'displayfontsize': undefined,
            'displayfontfamily': undefined,
            'displayfontcolor': undefined,
            'displayalignment': undefined,
            'displaybgtype': undefined,
            'displaybgcolor': undefined,
            'displaybgimage': undefined,
            'simplefontsize': undefined
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
        options = $.extend({}, defaultOptions, options);
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
                        $(this).siblings('.selected[data-target="' + $(this).attr('data-target') + '"]').removeClass('selected').trigger('optionitem:unselect');
                        $(this).addClass('selected').trigger('optionitem:select');
                        $($(this).attr('data-target')).val($(this).attr('data-value')).trigger('change');
                    }
                });

                $(self).find('.option-item[data-toggle]').on('optionitem:unselect', function() {
                    $($(this).attr('data-toggle')).removeClass('toggled');
                });

                $(self).find('.option-item[data-toggle]').on('optionitem:select', function() {
                    $($(this).attr('data-toggle')).addClass('toggled');
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

                var pickrDefault = {
                    'el': '',
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
                };
                // Image selector

                $(settings.imageSelector).imageSelector({
                    'loadingScreen': settings.loadingScreen,
                    'category': 'Background Images',
                    'select': function(event, target, images) {
                        if (Array.isArray(images)) {
                            var imagePath = images[0];
                            $('#optionAudienceBackgroundImage').val(imagePath).trigger('change');
                        }
                        $(settings.imageSelector).imageSelector('hide');
                    },
                });

                $('#optionBgImageSelector').on('click', function() {
                    $(settings.imageSelector).imageSelector('show', $('#optionAudienceBackgroundImage'));
                });
                // Color pickers
                var colPick = {
                    'el': '#optionColorPicker'
                };
                var pickr = Pickr.create($.extend({}, pickrDefault, colPick));
                pickr.on('save', function(color, instance) {
                    $('#optionAudienceFontColor').val(color.toRGBA().toString(0)).trigger('change');
                    pickr.hide();
                });
                colPick = {
                    'el': '#optionBgColor'
                };
                var pickr2 = Pickr.create($.extend({}, pickrDefault, colPick));
                pickr2.on('save', function(color, instance) {
                    $('#optionAudienceBackgroundColor').val(color.toRGBA().toString(0)).trigger('change');
                    pickr2.hide();
                });

                $(self).removeClass('performance')
                .removeClass('simple')
                .removeClass('audience')
                .addClass($('#optionView').val());

                // Set default values
                var defaultOptions = deserialize(self);
                $('#optionView').val(defaultOptions.mode == undefined ? settings.options.mode : defaultOptions.mode).trigger('change');
                $('#optionPerformanceFontSize').children('option[value="' + (defaultOptions.performancefontsize == undefined ? settings.options.performancefontsize : defaultOptions.performancefontsize)  + '"]').prop('selected', true);
                $('#optionPerformanceFontFamily').children('option[value="' + (defaultOptions.performancefontfamily == undefined ? settings.options.performancefontfamily : defaultOptions.performancefontfamily)  + '"]').prop('selected', true);
                $('#optionAudienceFontSize').children('option[value="' + (defaultOptions.displayfontsize == undefined ? settings.options.displayfontsize : defaultOptions.displayfontsize)  + '"]').prop('selected', true);
                $('#optionAudienceFontFamily').children('option[value="' + (defaultOptions.displayfontfamily == undefined ? settings.options.displayfontfamily : defaultOptions.displayfontfamily)  + '"]').prop('selected', true);
                $('#optionAudienceFontColor').val(defaultOptions.displayfontcolor == undefined ? settings.options.displayfontcolor : defaultOptions.displayfontcolor);
                window.setTimeout(function() {
                    pickr.setColor(defaultOptions.displayfontcolor == undefined ? settings.options.displayfontcolor : defaultOptions.displayfontcolor);
                    pickr2.setColor(defaultOptions.displaybgcolor == undefined ? settings.options.displaybgcolor : defaultOptions.displaybgcolor);
                }, 500);
                $('#optionAudienceAlignment').val(defaultOptions.displayalignment == undefined ? settings.options.displayalignment : defaultOptions.displayalignment);
                $('#optionAudienceBackgroundType').val(defaultOptions.displaybgtype == undefined ? settings.options.displaybgtype : defaultOptions.displaybgtype);
                $('#optionAudienceBackgroundImage').val(defaultOptions.displaybgimage == undefined ? settings.options.displaybgimage : defaultOptions.displaybgimage);
                $('#optionBgImage').css('background-image', 'url("' + (defaultOptions.displaybgimage == undefined ? settings.options.displaybgimage : defaultOptions.displaybgimage) + '")');
                $('#optionAudienceBackgroundColor').val(defaultOptions.displaybgcolor == undefined ? settings.options.displaybgcolor : defaultOptions.displaybgcolor);
                $('#optionSimpleFontSize').children('option[value="' + (defaultOptions.simplefontsize == undefined ? settings.options.simplefontsize : defaultOptions.simplefontsize)  + '"]').prop('selected', true);

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
