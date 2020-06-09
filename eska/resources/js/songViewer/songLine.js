(function($) {

    var defaults = {
        'key': 'C',
        'scale': 'major',
        'songScale': 'major',
        'songModulation': 0,
        'songPartModulation': 0,
        'sequenceModulation': 0,
        'modulation': 0,
        'songLineTemplate': '',
        'songLinesContainer': '',
        'songLineModulationInfo': '',
        'chordsLine': '',
        'lyricsContentLine': '',
        'lyricsDisplayLine': ''
    };

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('songLine-options');

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
        var options = $(object).data('songLine-options');

        options[key] = value;

        $(object).data('songLine-options', options);
    }

    function setValue(obj, songLine) {

        $(obj).find(getOption(obj, 'lyricsContentLine')).lyricsLine({
            'editable': false,
            'value': songLine[1],
            'fontSize': getOption(obj, 'fontSize'),
            'fontFamily': getOption(obj, 'fontFamily')
        });
        $(obj).find(getOption(obj, 'chordsLine')).chordsLine({
            'editable': false,
            'key': getOption(obj, 'key'),
            'scale': getOption(obj, 'songPartScale'),
            'songPartScale': getOption(obj, 'songPartScale'),
            'modulationInfo': getOption(obj, 'songLineModulationInfo'),
            'value': songLine[0],
            'fontSize': getOption(obj, 'fontSize'),
            'fontFamily': getOption(obj, 'fontFamily'),
            'height': getOption(obj, 'lineHeight'),
            'cursorWidth': getOption(obj, 'cursorWidth'),
            'songModulation': getOption(obj, 'songModulation'),
            'songPartModulation': getOption(obj, 'songPartModulation'),
            'sequenceModulation': getOption(obj, 'sequenceModulation'),
            'modulation': function() { return getOption(obj, 'modulation')},
            'editable': false
        });
    }

    $.fn.songLine = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);


                $(self).data('songLine-options', settings);
            });
        }

        if (typeof command == 'string') {

            switch(command.toLowerCase()) {

                case 'setvalue':
                    if (!Array.isArray(option)) return this;
                    return $(this).each(function() {
                        setValue(this, option);
                    });
                case 'option':
                    if (typeof value == 'string') {
                        return $(this).each(function() {
                            setOption(this, option, value);
                        })
                    }
                    return getOption(this, option);
                case 'update':
                    return $(this).each(function() {
                        $(this).find('.chords').chordsLine('updatechords').chordsLine('update');
                    });
                case 'updatemodulation':
                    return $(this).each(function() {
                        $(this).find('.chords').chordsLine('update');
                    });
            }
        }
    }

})(jQuery)
