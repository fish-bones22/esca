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

    /**
     * Set value of the song line (lyrics and chords)
     * @param {object} obj
     * @param {array} songLine Pair of chords and lyrics, at index 0 and index 1 respectively
     */
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
        $(obj).find(getOption(obj, 'lyricsDisplayLine')).html(songLine[2])
        .css('font-size', getOption(obj,'displayFontSize'))
        .css('font-family', getOption(obj,'displayFontFamily'))
        .css('text-align', getOption(obj,'displayAlignment'))
        .css('color', getOption(obj,'displayColor'));
    }

    function updateDisplay(obj) {
        var mode = getOption(obj, 'mode');
        var fontSize = getOption(obj, 'fontSize');
        var simpleFontSize = getOption(obj, 'simpleFontSize');
        var fontFamily = getOption(obj, 'fontFamily');
        var displayFontSize = getOption(obj, 'displayFontSize');
        var displayFontFamily = getOption(obj, 'displayFontFamily');
        var displayAlignment = getOption(obj, 'displayAlignment');
        var displayColor = getOption(obj, 'displayColor');
        var lineHeight = getOption(obj, 'lineHeight');
        var cursorWidth = getOption(obj, 'cursorWidth');

        var lyricsContentLine = $(obj).find(getOption(obj, 'lyricsContentLine'));
        lyricsContentLine.lyricsLine('option', 'fontSize', mode == 'performance' ? fontSize : simpleFontSize);
        lyricsContentLine.lyricsLine('option', 'fontFamily', fontFamily);
        lyricsContentLine.lyricsLine('option', 'cursorWidth', cursorWidth);
        lyricsContentLine.lyricsLine('updateDisplay');

        var chordsLine = $(obj).find(getOption(obj, 'chordsLine'));
        chordsLine.chordsLine('option', 'fontSize', mode == 'performance' ? fontSize : simpleFontSize);
        chordsLine.chordsLine('option', 'fontFamily', fontFamily);
        chordsLine.chordsLine('option', 'height', lineHeight);
        chordsLine.chordsLine('option', 'cursorWidth', cursorWidth);
        chordsLine.chordsLine('updateDisplay');

        $(obj).find(getOption(obj, 'lyricsDisplayLine'))
        .css('font-size', displayFontSize)
        .css('font-family', displayFontFamily)
        .css('text-align', displayAlignment)
        .css('color',displayColor);
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
                    if (typeof option != 'string') return this;
                    if (value != undefined) {
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
                case 'updatedisplay':
                    return $(this).each(function() {
                        updateDisplay(this);
                    });
            }
        }
    }

})(jQuery)
