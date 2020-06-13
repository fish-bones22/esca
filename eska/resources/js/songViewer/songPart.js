(function($) {

    var defaults = {
        'key': 'C',
        'scale': 'major',
        'songScale': 'major',
        'songModulation': 0,
        'sequenceModulation': 0,
        'modulation': 0,
        'songPartName': '',
        'songPartModulationInfo': '',
        'songLineTemplate': '',
        'songLinesContainer': '',
        'songLineModulationInfo': '',
        'chordsLine': '',
        'lyricsContentLine': '',
        'lyricsDisplayLine': '',
        'fontSize': '',
        'fontFamily': '',
        'lineHeight': '',
        'cursorWidth': '',
    };

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('songPart-options');

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
        var options = $(object).data('songPart-options');

        options[key] = value;

        $(object).data('songPart-options', options);
    }

    /**
     * Fill song part
     * @param {object} obj
     * @param {array} songPart collection of song parts
     */
    function setValue(obj, songPart) {

        if (typeof songPart != 'object') {
            console.error('Invalid song part object supplied');
        }
        if (songPart.hasOwnProperty('name')) {
            $(obj).find(getOption(obj, 'songPartName')).html(songPart.name);
        }

        var songLinesContainer = $(obj).find(getOption(obj, 'songLinesContainer'));
        songLinesContainer.dynamicPanel('removeAll');
        // Get chords and lyrics
        var strChords = songPart.chords.content;
        var strLyricsContent = songPart.lyrics.content || '';
        var strLyricsDisplay = songPart.lyrics.display || '';

        var arrChords = strChords.split('{newline}');
        var arrLyricsContent = strLyricsContent.split('{newline}');
        var arrLyricsDisplay = strLyricsDisplay.split('{newline}');

        setOption(obj, 'modulation', songPart.referenceKey);
        setOption(obj, 'scale', songPart.scale);

        if (arrChords.length == arrLyricsContent.length && arrChords.length == arrLyricsDisplay.length) {
            for (var i = 0; i < arrChords.length; i++) {
                var songLinePanel = songLinesContainer.dynamicPanel('insert');
                songLinePanel.songLine('setValue', [arrChords[i], arrLyricsContent[i], arrLyricsDisplay[i]]);
            }
        }

        updateModulationInfo(obj);
    }

    /**
     * Get the modulation value from the song, sequence and the song part
     * @param {object} obj
     */
    function getModulations(obj) {
        // Get modulation value
        var songModulation = getOption(obj, 'songModulation');
        songModulation = typeof songModulation == 'function' ? songModulation() : songModulation || 0;

        var sequenceModulation = getOption(obj, 'sequenceModulation');
        sequenceModulation = typeof sequenceModulation == 'function' ? sequenceModulation() : sequenceModulation || 0;

        var modulation = getOption(obj, 'modulation');
        modulation = typeof modulation == 'function' ? modulation() : modulation || 0;

        return [ modulation*1, songModulation*1, sequenceModulation*1];
    }

    /**
     * Update the modulation information of this song part
     * @param {object} obj
     */
    function updateModulationInfo(obj) {

        // Get the main scale of the song
        var songScale = getOption(obj, 'songScale');
        songScale = typeof songScale == 'function' ? songScale() : songScale;

        // Get the current scale of this song part
        var scale = getOption(obj, 'scale');
        scale = typeof scale == 'function' ? scale() : scale;

        // Get total modulation for this song part
        var modulation = getModulations(obj);

        // Set modulation info display
        if (modulation[0] + modulation[2] == 0 && songScale == scale) {
            $(obj).find(getOption(obj, 'songPartModulationInfo')).hide();
        } else {
            // Get main key
            var mainKey = getOption(obj, 'key');
            mainKey = typeof mainKey == 'function' ? mainKey() : mainKey;

            var display = window.ChordProcessor.processChord('no/1/M//', mainKey, scale, modulation[0] + modulation[1] + modulation[2]);
            $(obj).find(getOption(obj, 'songPartModulationInfo')).show().children('span').html('Key of ' + display + (scale != 'major' ? ' ' + scale : ''));
        }

    }

    function update(obj) {
        $(obj).find('.songline-item').each(function() {
            $(this).songLine('update');
        });
        updateModulationInfo(obj);
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

        $(obj).find('.songline-item').each(function() {
            $(this).songLine('option', 'mode', mode);
            $(this).songLine('option', 'lineHeight', lineHeight);
            $(this).songLine('option', 'cursorWidth', cursorWidth);
            $(this).songLine('option', 'fontSize', fontSize);
            $(this).songLine('option', 'fontFamily', fontFamily);
            $(this).songLine('option', 'simpleFontSize', simpleFontSize);
            $(this).songLine('option', 'displayFontSize', displayFontSize);
            $(this).songLine('option', 'displayFontFamily', displayFontFamily);
            $(this).songLine('option', 'displayAlignment', displayAlignment);
            $(this).songLine('option', 'displayColor', displayColor);
            $(this).songLine('updateDisplay');
        });
    }

    $.fn.songPart = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);

                $(self).find(settings.songLinesContainer).dynamicPanel({
                    'key': 'songLine',
                    'panelTemplate': settings.songLineTemplate,
                    'isDraggable': false,
                    'onInsert': function(event, panel) {
                        panel.songLine({
                            'key': settings.key,
                            'scale': settings.scale,
                            'songScale': settings.songScale,
                            'songPartScale': function() { return getOption(self, 'scale') },
                            'songLineModulationInfo': settings.songLineModulationInfo,
                            'chordsLine': settings.chordsLine,
                            'lyricsContentLine': settings.lyricsContentLine,
                            'lyricsDisplayLine': settings.lyricsDisplayLine,
                            'fontSize': settings.fontSize,
                            'fontFamily': settings.fontFamily,
                            'displayFontSize': settings.displayFontSize,
                            'displayFontFamily': settings.displayFontFamily,
                            'displayAlignment': settings.displayAlignment,
                            'displayColor': settings.displayColor,
                            'simpleFontSize': settings.simpleFontSize,
                            'lineHeight': settings.lineHeight,
                            'cursorWidth': settings.cursorWidth,
                            'songModulation': settings.songModulation,
                            'songPartModulation': function() {return getOption(self, 'modulation')},
                            'sequenceModulation': function() {return getOption(self, 'sequenceModulation')}
                        });
                    }
                });


                $(self).data('songPart-options', settings);
            });
        }

        if (typeof command == 'string') {

            switch(command.toLowerCase()) {

                case 'setvalue':
                    return $(this).each(function() {
                        setValue(this, option);
                    });

                case 'option':
                    if (value != undefined) {
                        return $(this).each(function() {
                            setOption(this, option, value);
                        })
                    }
                    return getOption(this, option);

                case 'update':
                    return $(this).each(function() {
                        update(this);
                    });
                case 'updatedisplay':
                    return $(this).each(function() {
                        updateDisplay(this);
                    });
            }
        }
    }

})(jQuery)
