(function($) {

    var defaults = {
        'keySelector': '',
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
        'mode': 'performance',
        'sequenceListPanel': '',
        'sequenceList': '',
        'sequenceListToggler': '',
        'sequences': []
    }

    var changeSongpartOffset = 100;

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
     * Set the value of the song
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
            $(obj).find(getOption(obj, 'keySelector')).children('[value="' + song.key + '"]').prop('selected', true);
        }
        if (song.hasOwnProperty('scale')) {
            setOption(obj, 'scale', song.scale);
        }
        setSongParts(obj, song.songParts, song.sequence);
    }

    /**
     * Fill song parts for the song based on the sequence
     * @param {object} obj
     * @param {array} songParts Collection of song parts object
     * @param {array} sequences Collection of sequence objects
     */
    function setSongParts(obj, songParts, sequences) {

        var sequencesArr = [];
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
                    sequencesArr.push(songPartRef.name);
                }
            });
            return;
        });

        setOption(obj, 'sequences', sequencesArr);
    }

    /**
     * Set the current song part
     * @param {obect} obj
     * @param {number} index Location of the song part from the sequence array (0-based)
     * @param {boolean} scroll ill engage auto scrolling
     */
    function setCurrentSongPart(obj, index, scroll = true, scrollSequenceList = true) {

        // Get the song part from the sequence order
        var songParts = $(obj).find(getOption(obj, 'songPartsContainer'));
        var songPartTarget = songParts.children('[data-order="' + (index + 1) + '"]').first();
        if (songPartTarget.length <= 0) return;

        var sequenceListPanel = $(getOption(obj, 'sequenceList'));
        var sequences = getOption(obj, 'sequences');

        // On performance mode, scroll to the songpart
        if (scroll && getOption(obj, 'mode') == 'performance') {

            $('html, body').animate({
                scrollTop: songPartTarget.offset().top - changeSongpartOffset + 5
            }, 500, function() {
                // Remove currently selected songpart
                songParts.children('.current').removeClass('current');
                // Set this song part as the current one
                songPartTarget.addClass('current');
                $(getOption(obj, 'currentSequenceDisplay')).html(sequences[index]);

                // Set sequence list selected
                sequenceListPanel.children('.current').removeClass('current');
                sequenceListPanel.children('[data-order="' + (index + 1) + '"]').addClass('current');
                if (scrollSequenceList) {
                    var par = sequenceListPanel.parent();
                    var scrollDistance = sequenceListPanel.height() - par.height() + 6;
                    par.scrollTop(scrollDistance / (sequences.length - 1) * index);
                }

                // Set quick controls
                $(getOption(obj, 'nextSequenceControl')).attr('data-target-index', index < sequences.length - 1 ? index + 1 : 0);
                $(getOption(obj, 'prevSequenceControl')).attr('data-target-index', index > 0 ? index - 1 : sequences.length - 1);

            });
        } else {
            // Remove currently selected songpart
            songParts.children('.current').removeClass('current');
            // Set this song part as the current one
            songPartTarget.addClass('current');
            $(getOption(obj, 'currentSequenceDisplay')).html(sequences[index]);

            // Set sequence list selected
            sequenceListPanel.children('.current').removeClass('current');
            sequenceListPanel.children('[data-order="' + (index + 1) + '"]').addClass('current');
            if (scrollSequenceList) {
                var par = sequenceListPanel.parent();
                var scrollDistance = sequenceListPanel.height() - par.height() + 6;
                par.scrollTop(scrollDistance / (sequences.length - 1) * index);
            }

            // Set quick controls
            $(getOption(obj, 'nextSequenceControl')).attr('data-target-index', index < sequences.length - 1 ? index + 1 : 0);
            $(getOption(obj, 'prevSequenceControl')).attr('data-target-index', index > 0 ? index - 1 : sequences.length - 1);
        }

        if ($(getOption(obj, 'sequenceListPanel')).parent().is(':hidden'))
            $(getOption(obj, 'sequenceListPanel')).parent().show();
    }


    function setSequenceListPanel(obj) {
        var sequenceList = $(getOption(obj, 'sequenceList'));
        var sequences = getOption(obj, 'sequences');
        if (sequenceList.length <= 0) return;
        if (sequences == null || sequences.length <= 0) return;

        sequenceList.dynamicPanel('removeAll');

        sequences.forEach(sequence => {
            var panel = sequenceList.dynamicPanel('insert');
            panel.html(sequence);
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
                });


                // Key selector from the song item
                $(self).find(settings.keySelector).on('change', function() {
                    var key = $(this).val();
                    setOption(self, 'key', key);
                    $(self).find('.songpart-item').each(function() {
                        $(this).songPart('update');
                    });
                });

                // Get window height value
                $(window).on('resize', function() {
                    changeSongpartOffset =  $(window).height()*0.2;
                }).trigger('resize');

                // Scroll event listener.
                // Change selected sequence based on scrolling
                $(document).on('scroll', function() {
                    var docScroll = $(document).scrollTop();
                    $(self).find('.songpart-item.current').each(function() {

                        var posTop = $(this).offset().top;
                        var sib = null;
                        // Scroll down, get the next sequence
                        if (docScroll + changeSongpartOffset  > posTop + $(this).height()) {
                            sib = $(this).next('.songpart-item')
                        }
                        // Scroll up, get the previous sequence
                        else if (posTop > docScroll + changeSongpartOffset) {
                            sib = $(this).prev('.songpart-item');
                        }
                        // Set the selected sequence as current
                        if (sib != null && sib.length > 0) {
                            setCurrentSongPart(self, sib.attr('data-order')*1 - 1, false);
                            return false; // Stop loop
                        }
                    });
                });

                $(self).data('songItem-options', settings);
            });
        }

        if (typeof command == 'string') {

            switch(command.toLowerCase()) {

                case 'setvalue':
                    return $(this).each(function() {
                        setValue(this, option);
                    });
                case 'setcurrentsongpart':
                    return $(this).each(function() {
                        setCurrentSongPart(this, option, true, value);
                    });
                case 'setsequencelist':
                    return $(this).each(function() {
                        setSequenceListPanel(this);
                    })
            }
        }
    }

})(jQuery)
