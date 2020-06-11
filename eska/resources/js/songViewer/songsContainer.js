(function($) {

    var defaults = {
        'keySelector': '',
        'songItemTemplate': '',
        'songPartTemplate': '',
        'songLineTemplate': '',
        'songTitlePanel': '',
        'songArtistPanel': '',
        'songPartsContainer': '',
        'songPartName': '',
        'songPartModulationInfo': '',
        'songLinesContainer': '',
        'songLineModulationInfo': '',
        'chordsLine': '',
        'lyricsContentLine': '',
        'lyricsDisplayLine': '',
        'fontSize': '',
        'fontFamily': '',
        'isDraggable': false,
        'mode': 'performance',
        'nextSongControl': '',
        'previousSongControl': '',
        'sequenceListPanel': '',
        'sequenceList': '',
        'sequenceListToggler': ''
    }

    var songValues = [];

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('songsContainer-options');

        if (options == undefined || !options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Set song as selected
     * @param {object} obj
     * @param {number} index Index of the song from the set (0-based)
     */
    function setCurrent(obj, index) {
        // Find selected song
        var selectedSong = $('.song-item[data-order="' + (index + 1) + '"]');

        // Get control buttons
        var nextSongControl = $(getOption(obj, 'nextSongControl'));
        var previousSongControl = $(getOption(obj, 'previousSongControl'));

        if (nextSongControl.length > 0) nextSongControl.hide();
        if (previousSongControl.length > 0) previousSongControl.hide();

        if ($(getOption(obj, 'allSongsButton')).is(':hidden'))
            $(getOption(obj, 'allSongsButton')).show();

        if (selectedSong.length <= 0) return;

        // Set the song from the song list as selected
        var allSongsPanel = $(getOption(obj, 'allSongsList'));
        allSongsPanel.find('.songlist-item.current').removeClass('current');
        allSongsPanel.find('.songlist-item[data-order="' + (index + 1) + '"]').addClass('current');

        // Remove current
        $('.song-item.current').removeClass('current');

        // Display song navigation only for more than 1 song
        selectedSong.addClass('current');
        // Get previous song
        // Display previous song navigation only for more than 2 songs
        setSongControl(previousSongControl, index > 0 ? index-1 : songValues.length - 1, songValues.length > 2);
        // Get next song
        setSongControl(nextSongControl, index < songValues.length - 1 ? index + 1 : 0, songValues.length > 1);
        // Set the first song-part from the song as selected
        selectedSong.songItem('setSequenceList');
        selectedSong.songItem('setCurrentSongPart', 0);
    }


    /**
     * Set element to toggle the song via song ID
     * @param {jQuery object} control Element to set
     * @param {string} index Pointer of the location of the song from the set array (0-based)
     */
    function setSongControl(control, index, show = true) {
        var songDetails = songValues[index];
        if (songDetails != undefined) {
            control.find('.trigger').attr('data-target-index', index);
            control.find('.song-title').html(songDetails.title);
            control.find('.song-artist').html(songDetails.artist);
        }
        if (show) control.show();
    }

    /**
     * Populate the All-Songs Panel
     * @param {object} obj
     */
    function setAllSongsPanel(obj) {
        var allSongsPanel = $(getOption(obj, 'allSongsList'));
        allSongsPanel.dynamicPanel('removeAll');
        songValues.forEach(song => {
            var panel = allSongsPanel.dynamicPanel('insert');
            panel.find('.song-title').html(song.title);
            panel.find('.song-artist').html(song.artist);
        })
    }

    /**
     * Populate container with songs
     * @param {object} obj
     * @param {array} songs Collection of song object
     */
    function setValues(obj, songs) {

        if (songs.length <= 0) return;

        var first = '';
        // Empty the container first
        $(obj).dynamicPanel('removeAll');
        // Create panel foreach song
        songs.forEach(song => {
            var panel = $(obj).dynamicPanel('insert', null, song.id);
            panel.songItem('setValue', song);
            songValues.push({
                'id': song.id,
                'title': song.title,
                'artist': song.hasOwnProperty('details') && song.details.hasOwnProperty('artist') ? song.details.artist : ''
            });
        });

        setAllSongsPanel(obj);
        // Set first song from the list
        setCurrent(obj, 0);
    }

    $.fn.songsContainer = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);

                // Initialize dynamicpanel
                $(self).dynamicPanel({
                    'key': 'song',
                    'panelTemplate': settings.songItemTemplate,
                    'isDraggable': settings.isDraggable,
                    'onInsert': function(event, panel) {
                        // Initialize song panels
                        panel.songItem({
                            'keySelector': settings.keySelector,
                            'songTitlePanel': settings.songTitlePanel,
                            'songArtistPanel': settings.songArtistPanel,
                            'songPartsContainer': settings.songPartsContainer,
                            'songPartTemplate': settings.songPartTemplate,
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
                            'mode': settings.mode,
                            'sequenceListPanel': settings.sequenceListPanel,
                            'sequenceList': settings.sequenceList,
                            'sequenceListToggler': settings.sequenceListToggler,
                            'currentSequenceDisplay': settings.currentSequenceDisplay,
                            'nextSequenceControl': settings.nextSequenceControl,
                            'prevSequenceControl': settings.prevSequenceControl,
                        });
                    }
                });

                $(settings.allSongsList).dynamicPanel({
                    'panelTemplate': $(settings.allSongsList).html(),
                    'key': 'all-songs',
                    'isDraggable': false,
                    'onInsert': function(event, panel) {
                        $(panel).on('click', function() {
                            setCurrent(self, $(this).attr('data-order')*1 - 1);
                            $(settings.allSongsPanel).contextMenu('hide');
                        });
                    }
                });

                $(settings.sequenceList).dynamicPanel({
                    'key': 'sequenceList',
                    'isDraggable': false,
                    'panelTemplate': $(settings.sequenceList).html(),
                    'onInsert': function(event, panel) {
                        panel.on('click', function() {
                            $('.song-item.current').songItem('setCurrentSongPart', panel.attr('data-order')*1-1, false);
                        })
                    }
                });

                // Set keyboard
                $(document).on('keyup', function(event) {
                    if (event.which == 37) {
                        $(settings.previousSongControl).find('.trigger').trigger('click');
                    } else if (event.which == 39) {
                        $(settings.nextSongControl).find('.trigger').trigger('click');
                    } else if (event.which == 38 && $(settings.prevSequenceControl).is(':visible')) {
                        $(settings.prevSequenceControl).trigger('click');
                    } else if (event.which == 40 && $(settings.nextSequenceControl).is(':visible')) {
                        $(settings.nextSequenceControl).trigger('click');
                    }
                });

                // Set next/prev song actions
                $(document).on('click', [settings.nextSongControl + ' .trigger', settings.previousSongControl + ' .trigger'].join(','), function() {
                    var songIndex = $(this).attr('data-target-index')*1;
                    if (songIndex == NaN) return;
                    setCurrent(self, songIndex);
                });

                // Set next/prev sequence actions
                $(document).on('click', [settings.nextSequenceControl, settings.prevSequenceControl].join(','), function() {
                    var songIndex = $(this).attr('data-target-index')*1;
                    if (songIndex == NaN) return;
                    $(self).find('.song-item.current').songItem('setCurrentSongPart', songIndex);
                });

                // Scrolling event
                var timeout;
                $(document).on('scroll', function() {
                    var songDetails = $(self).find('.song-item.current .song-details');
                    if (songDetails.length > 0 && !songDetails.hasClass('scrolling')) {
                        songDetails.addClass('scrolling');
                    }
                    clearTimeout(timeout);
                    timeout = setTimeout(function() {
                        if (songDetails.hasClass('scrolling'))songDetails.removeClass('scrolling');
                    }, 250);
                });

                // All songs panel
                $(settings.allSongsPanel).contextMenu({
                    'top': 'unset',
                    'bottom': '44px',
                    'left': 'unset'
                });

                $(settings.allSongsButton).on('click', function() {
                    $(settings.allSongsPanel).contextMenu('show', this);
                });

                $(settings.sequenceListToggler).on('click', function() {
                    if ($(settings.sequenceListPanel).hasClass('expanded')) {
                        $(settings.sequenceListPanel).removeClass('expanded');
                    } else {
                        $(settings.sequenceListPanel).addClass('expanded');
                    }
                });

                $(settings.sequenceListPanel).find('.close').on('click', function() {
                    $(settings.sequenceListPanel).removeClass('expanded');
                });

                $(self).data('songsContainer-options', settings);
                $(self).addClass(settings.mode);
            });
        }

        if (typeof command == 'string') {

            switch(command.toLowerCase()) {

                case 'setvalues':
                    return $(this).each(function() {
                        setValues(this, option);
                    });
            }
        }
    }

})(jQuery)
