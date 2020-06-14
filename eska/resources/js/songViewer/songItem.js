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
        'sequences': [],
        'currentSequenceIndex': 0,
        'scrollDuration': 500,
        'minScrollDuration': 100,
        'songParts': [],
        'sequenceObject': []
    }

    var changeSongpartOffset = 100;
    var isAutoScrolling = false;

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
        var mode = getOption(obj, 'mode');
        // Set details
        if (song.hasOwnProperty('title')) {
            var elem = $(obj).find(getOption(obj, 'songTitlePanel')).text(song.title);
            if (mode == 'audience') {
                setDisplayCss(obj, elem.parent());
            }
        }
        if (song.details.hasOwnProperty('artist')) {
            elem = $(obj).find(getOption(obj, 'songArtistPanel')).text(song.details.artist);
        }
        if (song.hasOwnProperty('key')) {
            setOption(obj, 'key', song.key);
            $(obj).find(getOption(obj, 'keySelector')).children('[value="' + song.key + '"]').prop('selected', true);
        }
        if (song.hasOwnProperty('scale')) {
            setOption(obj, 'scale', song.scale);
            $(obj).find(getOption(obj, 'scaleSelector')).html(song.scale);
        }
        // Show the sequence list if hidden
        var sequencePanel = $(getOption(obj, 'sequenceControl'));
        if (sequencePanel.length > 0 && sequencePanel.is(':hidden')) {
            sequencePanel.show();
        }
        setSongParts(obj, song.songParts, song.sequence);
    }

    function setDisplayCss(obj, element) {
        var fontFamily = getOption(obj, 'displayFontFamily');
        var displayColor = getOption(obj, 'displayColor');

        element.css('font-family', fontFamily)
        .css('color', displayColor);
    }

    /**
     * Fill song parts for the song based on the sequence
     * @param {object} obj
     * @param {array} songParts Collection of song parts object
     * @param {array} sequences Collection of sequence objects
     */
    function setSongParts(obj, songParts = null, sequences = null) {

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

        songParts.forEach(songPart => {
            var songPartPanel = songPartsContainer.dynamicPanel('insert');
            songPartPanel.songPart('setValue', songPart);
            songPartPanel.attr('data-simple', '');
        });

        setOption(obj, 'sequences', sequencesArr);
    }

    /**
     * Set the current song part
     * @param {obect} obj
     * @param {number} index Location of the song part from the sequence array (0-based)
     * @param {boolean} scroll ill engage auto scrolling
     */
    function setCurrentSongPart(obj, index, scroll = true) {

        // Get the song part from the sequence order
        var songParts = $(obj).find(getOption(obj, 'songPartsContainer'));
        if (songParts.length <= 0) return;

        var songPartTarget = songParts.children('[data-order="' + (index + 1) + '"]:not([data-simple])').first();
        if (songPartTarget.length <= 0) return;

        var songPartCurrent = songParts.children('.current');

        var sequenceListBody = $(getOption(obj, 'sequenceList'));
        var sequences = getOption(obj, 'sequences');

        var mode = getOption(obj, 'mode');
        // On performance mode, scroll to the songpart
        if (scroll && mode == 'performance') {

            var currentSequenceIndex = getOption(obj, 'currentSequenceIndex');

            if (index != currentSequenceIndex) {

                isAutoScrolling = true;

                var scrollDuration = getOption(obj, 'scrollDuration');
                var minScrollDuration = getOption(obj, 'minScrollDuration');
                var factor = index > currentSequenceIndex ? index - currentSequenceIndex : currentSequenceIndex - index;

                var scrollSpeed = minScrollDuration + (scrollDuration - minScrollDuration) * (factor - 1) / (sequences.length - 1);

                $('html, body').animate({
                    scrollTop: songPartTarget.offset().top - changeSongpartOffset + 5
                }, scrollSpeed, function() {
                    isAutoScrolling = false;
                });

            }
        }

        // Remove currently selected songpart
        if (songPartCurrent.length > 0)
            songPartCurrent.removeClass('current');
        // Set this song part as the current one
        songPartTarget.addClass('current');
        $(getOption(obj, 'currentSequenceDisplay')).html(sequences[index]);
        //$(getOption(obj, 'totalSequences')).html(sequences.length);
        $(getOption(obj, 'currentSequenceOrder')).html((index + 1));

        // Set sequence list selected
        sequenceListBody.children('.current').removeClass('current');
        sequenceListBody.children('[data-order="' + (index + 1) + '"]:not([data-simple])').addClass('current');
        var par = sequenceListBody.parent();
        var scrollDistance = sequenceListBody.height() - par.height() + 6;
        par.scrollTop(scrollDistance / (sequences.length - 1) * index);

        // Set quick controls
        $(getOption(obj, 'nextSequenceControl')).attr('data-target-index', index < sequences.length - 1 ? index + 1 : 0);
        $(getOption(obj, 'prevSequenceControl')).attr('data-target-index', index > 0 ? index - 1 : sequences.length - 1);


        setOption(obj, 'currentSequenceIndex', index);
        update(obj);
    }


    function update(obj) {
        var sequenceControl = $(getOption(obj, 'sequencesQuickControl'));
        var sequenceControl = $(getOption(obj, 'sequencesQuickControl'));
        var sequenceListPanel = $(getOption(obj, 'sequenceListPanel'));
        var mode = getOption(obj, 'mode');
        if (mode == 'performance' || mode == 'simple') {
            if (sequenceListPanel.length > 0 && sequenceListPanel.hasClass('expanded')) {
                sequenceListPanel.addClass('expanded');
            }
            if (sequenceControl.length > 0 && sequenceControl.is(':hidden')) {
                sequenceControl.show();
            }
        } else if (mode == 'audience') {
            if (sequenceListPanel.length > 0 && sequenceListPanel.hasClass('expanded')) {
                sequenceListPanel.removeClass('expanded');
            }
            if (sequenceControl.length > 0 &&sequenceControl.is(':visible')) {
                sequenceControl.hide();
            }
        }

        var fontSize = getOption(obj, 'fontSize');
        var simpleFontSize = getOption(obj, 'simpleFontSize');
        var fontFamily = getOption(obj, 'fontFamily');
        var displayFontSize = getOption(obj, 'displayFontSize');
        var displayFontFamily = getOption(obj, 'displayFontFamily');
        var displayAlignment = getOption(obj, 'displayAlignment');
        var displayColor = getOption(obj, 'displayColor');
        var lineHeight = getOption(obj, 'lineHeight');
        var cursorWidth = getOption(obj, 'cursorWidth');

        $(obj).find('.songpart-item').each(function() {
            $(this).songPart('option', 'mode', mode);
            $(this).songPart('option', 'lineHeight', lineHeight);
            $(this).songPart('option', 'cursorWidth', cursorWidth);
            $(this).songPart('option', 'fontSize', fontSize);
            $(this).songPart('option', 'fontFamily', fontFamily);
            $(this).songPart('option', 'simpleFontSize', simpleFontSize);
            $(this).songPart('option', 'displayFontSize', displayFontSize);
            $(this).songPart('option', 'displayFontFamily', displayFontFamily);
            $(this).songPart('option', 'displayAlignment', displayAlignment);
            $(this).songPart('option', 'displayColor', displayColor);
            $(this).songPart('updateDisplay');
        });
        if (mode == 'audience') {
            setDisplayCss(obj, $(obj).find('.basic-details'));
        } else {
            $(obj).find('.basic-details').removeAttr('style');
        }
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

        $(document).scrollTop(0);
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
                            'displayFontSize': settings.displayFontSize,
                            'displayFontFamily': settings.displayFontFamily,
                            'displayAlignment': settings.displayAlignment,
                            'displayColor': settings.displayColor,
                            'simpleFontSize': settings.simpleFontSize,
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

                    if (isAutoScrolling) return false;
                    if (!$(self).hasClass('current')) return false;
                    if (getOption(self, 'mode') == 'simple') return false;

                    var docScroll = $(document).scrollTop();
                    $(self).find('.songpart-item.current').each(function() {

                        var posTop = $(this).offset().top;
                        var sib = null;
                        // Scroll down, get the next sequence
                        if (docScroll + changeSongpartOffset  > posTop + $(this).height()) {
                            sib = $(this).next('.songpart-item:not([data-simple])')
                        }
                        // Scroll up, get the previous sequence
                        else if (posTop > docScroll + changeSongpartOffset) {
                            sib = $(this).prev('.songpart-item:not([data-simple])');
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

                case 'option':
                    if (typeof option != 'string') return this;
                    if (value != undefined) {
                        return $(this).each(function() {
                            setOption(this, option, value);
                        });
                    }
                    return getOption(this, option);
                case 'setvalue':
                    return $(this).each(function() {
                        setValue(this, option);
                    });
                case 'setcurrentsongpart':
                    return $(this).each(function() {
                        setCurrentSongPart(this, option, true);
                    });
                case 'setsequencelist':
                    return $(this).each(function() {
                        setSequenceListPanel(this);
                    })
                case 'update':
                    return $(this).each(function() {
                        update(this);
                    })
            }
        }
    }

})(jQuery)
