(function($) {

    var defaults = {
        'navbarSongTitle': '',
        'songTitleInput': '',
        'artistInput': '',
        'songTagInput': '',
        'descriptionInput': '',
        'navbarKey': '',
        'navbarScale': '',
        'songKeyInput': '',
        'songScaleInput': '',
        'songTimeSignInput': '',
        'songSpeedInput': '',
        'keyChange': function() {}
    }

    var songData = window.songData || {};


    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('songDetails-options');

        if (!options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Insert values to song detals. Accepted keys: title, artist, tags, description, key, timeSignature, tempo
     * @param {object} obj
     * @param {string} key Key of the property to set
     * @param {string|array} value Values of the property
     */
    function setValue(obj, key, value) {

        if (key == '' || key == undefined) return;

        switch(key) {
            case 'title':
                var selectors = [getOption(obj, 'navbarSongTitle'), getOption(obj, 'songTitleInput')];
                setValAttr(selectors, value);
                break;
            case 'artist':
                var selectors = [getOption(obj, 'artistInput')];
                setValAttr(selectors, value);
                break;
            case 'tags':
                var selectors = [getOption(obj, 'songTagInput')];
                setValAttr(selectors, value);
                break;
            case 'description':
                var selector = getOption(obj, 'descriptionInput');
                $(selector).text(value);
                break;
            case 'key':
                var selector = getOption(obj, 'songKeyInput');
                $(selector).find('option[value="' + value[0] + '"]').prop('selected', true);
                $(selector).trigger('change');
                break;
            case 'scale':
                var selector = getOption(obj, 'songScaleInput');
                $(selector).find('option[value="' + value[0] + '"]').prop('selected', true);
                $(selector).trigger('change');
                break;
            case 'timeSignature':
                var selector = getOption(obj, 'songTimeSignInput');
                $(selector).find('option[value="' + value + '"]').prop('selected', true);
                $(selector).trigger('change');
                break;
            case 'tempo':
                var selector = [getOption(obj, 'songSpeedInput')];
                setValAttr(selector, value);
                break;
        }

        return obj
    }

    /**
     * Set value to HTML element
     * @param {array} selectors Elements to set value
     * @param {string} value
     */
    function setValAttr(selectors, value) {
        selectors.forEach(o => {
            if (typeof value == 'object') {
                value = value.join('|');
            }
            $(o).val(value).trigger('change');
        });
    }


    function getValue(obj, key) {
        if (key == '' || key == undefined) return '';

        switch(key) {
            case 'title':
                return $(getOption(obj, 'songTitleInput')).val();
            case 'artist':
                return $(getOption(obj, 'artistInput')).val();
            case 'tags':
                var tags = $(getOption(obj, 'songTagInput')).val();
                return tags.split('|');
            case 'description':
                return $(getOption(obj, 'descriptionInput')).val();
            case 'key':
                return $(getOption(obj, 'songKeyInput')).val();
            case 'scale':
                return $(getOption(obj, 'songScaleInput')).val();
            case 'timeSignature':
                return $(getOption(obj, 'songTimeSignInput')).val();
            case 'tempo':
                return $(getOption(obj, 'songSpeedInput')).val();
            default: return '';
        }
    }

    function setKeySelect(select, target) {
        var value = $(select).find('option:selected').val();
        $(target).find('option[value="' + value + '"]').prop('selected', true);
        $(select).blur();
        $('.chord-selection-menu').chordBuilder('update');
        $('.chord').chordMarker('update');
        $('#songParts').songPart('update');
    }

    function validateInputs(obj) {
        var allValid = true;
        // Show error message if needed
        $(obj).find('.input-container').each(function() {
            // If no error text element, do not engage
            var errText = $(this).find('.error-text');
            if (errText.length <= 0) {
                return;
            }
            var value = $(this).find('input, select').val();
            // If value of input or select is not empty, hide error message if shown
            if (value != '') {
                if ($(this).hasClass('has-error')) $(this).removeClass('has-error')
                return;
            }
            // Show error message
            $(this).addClass('has-error')
            allValid = false;
        });

        return allValid;
    }

    $.fn.songDetails = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);

                $(self).data('songDetails-options', settings);

                // Sync changes with Song Title
                $(settings.songTitleInput).on('keyup', function() {
                    $(settings.navbarSongTitle).val($(this).val());
                });

                $(settings.navbarSongTitle).on('keyup', function() {
                    $(settings.songTitleInput).val($(this).val());
                });

                // Sync changes with Song Key
                $(document).on('change', [settings.navbarKey, settings.songKeyInput].join(','), function() {
                    var target = settings.navbarKey;
                    if ($(this).is(settings.navbarKey)) {
                        target = settings.songKeyInput;
                    }
                    setKeySelect(this, target);
                }).on('change', [settings.navbarScale, settings.songScaleInput].join(','), function() {
                    var target = settings.navbarScale;
                    if ($(this).is(settings.navbarScale)) {
                        target = settings.songScaleInput;
                    }
                    setKeySelect(this, target);
                });

                $(settings.songTagInput).on('change', function() {
                    var tags = $(this).val().split('|');
                    tags.forEach(o => {
                        $('.tag-item[data-value="' + o + '"]').addClass('selected');
                    })
                });

                $('.tag-item').on('click', function() {
                    // Toggles selected class
                    if ($(this).hasClass('selected')) $(this).removeClass('selected');
                    else $(this).addClass('selected');
                    // Reconstruct input value
                    var selectedVal = [];
                    $(this).parent().find('.selected').each(function() {
                        selectedVal.push($(this).attr('data-value'));
                    });
                    $(settings.songTagInput).val(selectedVal.join('|'));
                });

            })
        }

        if (typeof command == 'string') {
            switch(command.toLocaleLowerCase()) {
                case 'set':
                    return $(this).each(function() {
                        setValue(this, option, value);
                    });
                case 'get':
                    return getValue(this, option);
                case 'validate':
                    return validateInputs(this);
            }
        }
    }
})(jQuery);
