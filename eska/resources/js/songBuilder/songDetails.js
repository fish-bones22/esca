(function($) {

    var defaults = {
        'navbarSongTitle': '',
        'songTitleInput': '',
        'artistInput': '',
        'songTagInput': '',
        'descriptionInput': '',
        'navbarKey': '',
        'songKeyInput': '',
        'songTimeSignInput': '',
        'songSpeedInput': ''
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
                $(selector).find('option[value="' + value[0] + '"][data-scale="' + value[1] + '"]').prop('selected', true);
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
                return [$(getOption(obj, 'songKeyInput')).val(), $(getOption(obj, 'songKeyInput')).find('option:selected').attr('data-scale')];
            case 'timeSignature':
                return $(getOption(obj, 'songTimeSignInput')).val();
            case 'tempo':
                return $(getOption(obj, 'songSpeedInput')).val();
            default: return '';
        }
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
                $(document).on('change', [settings.navbarKey, settings.songKeyInput].join(','), function(ev) {
                    var target = settings.navbarKey;
                    if ($(this).is(settings.navbarKey)) {
                        target = settings.songKeyInput;
                    }
                    var key = $(this).find('option:selected').val();
                    var scale = $(this).find('option:selected').attr('data-scale');
                    $(target).find('option[value="' + key + '"][data-scale="' + scale + '"]').prop('selected', true);
                    $(this).blur();
                    $('.chord-selection-menu').chordBuilder('update');
                    $('.chord').chordMarker('update');
                });

                // Show error message if needed
                $('.input-container').on('inputContainer:submit', function() {
                    // If no error text element, do not engage
                    var errText = $(this).find('.error-text');
                    if (errText.length <= 0) {
                        return;
                    }
                    var value = $(this).find('input, select').val();
                    // If value of input or select is not empty, hide error message if shown
                    if (value != '') {
                        if (errText.is(':visible')) errText.hide();
                        return;
                    }
                    // Show error message
                    errText.show();
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
            }
        }
    }
})(jQuery);
