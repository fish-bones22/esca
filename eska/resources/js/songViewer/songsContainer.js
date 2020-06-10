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

    function setCurrent(obj, songId) {
        // Find selected song
        var selectedSong = $('.song-item[data-id="' + songId + '"]');

        // Get control buttons
        var nextSongControl = $(getOption(obj, 'nextSongControl'));
        var previousSongControl = $(getOption(obj, 'previousSongControl'));

        if (nextSongControl.length > 0) nextSongControl.hide();
        if (previousSongControl.length > 0) previousSongControl.hide();

        if (selectedSong.length <= 0) return;

        // Set the song from the song list as selected
        var allSongsPanel = $(getOption(obj, 'allSongsList'));
        allSongsPanel.find('.allsongs-item.current').removeClass('current');
        allSongsPanel.find('.allsongs-item[data-id="' + songId + '"]').addClass('current');

        // Remove current
        $('.song-item.current').removeClass('current');
        selectedSong.addClass('current');
        // Get next song
        var nextSong = selectedSong.next('.song-item');
        if (nextSong.length <= 0 && selectedSong.siblings('.song-item').length > 1) {
            nextSong = selectedSong.prevAll('.song-item').first();
        }
        if (nextSong.length > 0) {
            setSongControl(nextSongControl, nextSong.attr('data-id'));
        }
        // Get previous song
        var prevSong = selectedSong.prev('.song-item');
        if (prevSong.length <= 0 && selectedSong.siblings('.song-item').length > 1) {
            prevSong = selectedSong.nextAll('.song-item').last();
        }
        if (prevSong.length > 0) {
            setSongControl(previousSongControl, prevSong.attr('data-id'));
        }

        $(document).scrollTop(0);
    }


    function setSongControl(control, songId) {
        var songDetails = songValues.find(o => o.id == songId);
        if (songDetails != undefined) {
            control.show();
            control.find('.trigger').attr('data-song-id', songDetails.id);
            control.find('.song-title').html(songDetails.title);
            control.find('.song-artist').html(songDetails.artist);
        } else {
            control.hide();
        }
    }

    function setAllSongsPanel(obj) {
        var allSongsPanel = $(getOption(obj, 'allSongsList'));
        allSongsPanel.dynamicPanel('removeAll');
        songValues.forEach(song => {
            var panel = allSongsPanel.dynamicPanel('insert', null, song.id);
            panel.find('.song-title').html(song.title);
            panel.find('.song-artist').html(song.artist);
        })
    }

    function setValues(obj, songs) {

        var first = '';
        $(obj).dynamicPanel('removeAll');
        songs.forEach(song => {
            var panel = $(obj).dynamicPanel('insert', null, song.id);
            panel.songItem('setValue', song);
            songValues.push({
                'id': song.id,
                'title': song.title,
                'artist': song.hasOwnProperty('details') && song.details.hasOwnProperty('artist') ? song.details.artist : ''
            });
            if (first == '') first = song.id;
        });

        setAllSongsPanel(obj);
        setCurrent(obj, first);
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
                            'cursorWidth': settings.cursorWidth
                        });
                    }
                });

                $(settings.allSongsList).dynamicPanel({
                    'panelTemplate': $(settings.allSongsList).html(),
                    'key': 'all-songs',
                    'isDraggable': false,
                    'onInsert': function(event, panel) {
                        $(panel).on('click', function() {
                            setCurrent(self, $(this).attr('data-id'));
                            $(settings.allSongsPanel).contextMenu('hide');
                        });
                    }
                });

                // Set keyboard
                $(document).on('keyup', function(event) {
                    if (event.which == 37 && $(settings.previousSongControl).is(':visible')) {
                        $(settings.previousSongControl).find('.trigger').trigger('click');
                    } else if (event.which == 39 && $(settings.nextSongControl).is(':visible')) {
                        $(settings.nextSongControl).find('.trigger').trigger('click');
                    }
                });

                // Set next/prev song actions
                $(document).on('click', [settings.nextSongControl + ' .trigger', settings.previousSongControl + ' .trigger'].join(','), function() {
                    var songId = $(this).attr('data-song-id');
                    if (songId == '' || songId == undefined) return;
                    setCurrent(self, songId);
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
