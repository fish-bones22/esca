(function($) {

    var defaults = {
        'key': 'C',
        'scale': 'major',
        'modulation': 0,
        'songTitlePanel': '',
        'songArtistPanel': '',
        'songPartsContainer': '',
        'songLinesContainer': '',
        'songPartTemplate': '',
        'songLineTemplate': '',
        'songLineModulationInfo': '',
        'chordsLine': '',
        'lyricsContentLine': '',
        'lyricsDisplayLine': '',
        'fontSize': '',
        'fontFamily': '',
    }

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('songItem-options');

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
        var options = $(object).data('songItem-options');

        options[key] = value;

        $(object).data('songItem-options', options);
    }

    /**
     *
     * @param {object} obj
     * @param {object} song song object
     */
    function setValue(obj, song) {
        // Set details
        if (song.hasOwnProperty('title')) {
            $(obj).find(getOption(obj, 'songTitlePanel')).text(song.title);
        }
        if (song.details.hasOwnProperty('artist')) {
            $(obj).find(getOption(obj, 'songArtistPanel')).text(song.details.artist);
        }
        if (song.hasOwnProperty('key')) {
            setOption(obj, 'key', song.key);
        }
        if (song.hasOwnProperty('scale')) {
            setOption(obj, 'scale', song.scale);
        }
        // Set song parts
        setSongParts(obj, song.songParts, song.sequence);
    }

    function setSongParts(obj, songParts, sequences) {

        var songPartsContainer = $(obj).find(getOption(obj, 'songPartsContainer'));

        // Remove panels first
        songPartsContainer.dynamicPanel('removeAll');

        // Set up song parts with regards to eats sequence
        sequences.forEach(sequence => {
            // Set up only the first sequence with song part attribute in it
            if (!sequence.hasOwnProperty('songParts')) {
                return;
            }
            // Iterate song part reference from the sequence
            sequence.songParts.forEach(songPartRef => {
                // Get song part from the song's songpart object based on the reference's ID
                var songPart = songParts.find(o => o.id == songPartRef.songPart);

                if (songPart == undefined) return;

                // Set up song part with repetitions
                for (var i = 0; i < songPartRef.repeat*1; i++) {
                    var songPartPanel = songPartsContainer.dynamicPanel('insert');
                    songPartPanel.songPart('option', 'sequenceModulation', songPartRef.referenceKey);
                    songPartPanel.songPart('setValue', songPart);
                }
            });
            return;
        });
    }


    $.fn.songItem = function(command, option, value) {


        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);

                $(self).find(settings.songPartsContainer).dynamicPanel({
                    'key': 'songpart',
                    'panelTemplate': settings.songPartTemplate,
                    'onInsert': function(event, songPartPanel) {
                        $(songPartPanel).songPart({
                            'key': function() { return getOption(self, 'key') },
                            'songScale': function() { return getOption(self, 'scale') },
                            'songPartName': settings.songPartName,
                            'songPartModulationInfo': settings.songPartModulationInfo,
                            'songLinesContainer': settings.songLinesContainer,
                            'songLineTemplate': settings.songLineTemplate,
                            'songLineModulationInfo': settings.songLineModulationInfo,
                            'chordsLine': settings.chordsLine,
                            'lyricsContentLine': settings.lyricsContentLine,
                            'lyricsDisplayLine': settings.lyricsDisplayLine,
                            'fontSize': settings.fontSize,
                            'fontFamily': settings.fontFamily,
                            'lineHeight': settings.lineHeight,
                            'cursorWidth': settings.cursorWidth,
                            'songModulation': function() {return getOption(self, 'modulation')},
                            'sequenceModulation': 0,
                        });
                    }
                })

                $(self).data('songItem-options', settings);
            });
        }

        if (typeof command == 'string') {

            switch(command.toLowerCase()) {

                case 'setvalue':
                    return $(this).each(function() {
                        setValue(this, option);
                    });
            }
        }
    }

})(jQuery)
