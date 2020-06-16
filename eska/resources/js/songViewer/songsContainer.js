
import { v4 as uuidv4 } from 'uuid';

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
        'sequenceListToggler': '',
        'bgType': 'color',
        'bgImage': '',
        'bgColor': 'white'
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
     * Set option value
     * @param {Object} object
     * @param {String} key
     * @param {String} value
     */
    function setOption(object, key, value) {
        var options = $(object).data('songsContainer-options');

        options[key] = value;

        $(object).data('songsContainer-options', options);
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

        update(obj);
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

    function update(obj) {

        var mode = getOption(obj, 'mode');

        $(obj).parent().removeClass('performance')
        .removeClass('audience')
        .removeClass('simple')
        .addClass(mode);

        // Show song list controls
        var songControl = $(getOption(obj, 'songControl'));

        if (mode == 'performance' || mode == 'simple' && songControl.length > 0) {
            songControl.show();
        } else if (songControl.is(':visible')) {
            songControl.hide();
        }

        // Change background
        if (getOption(obj, 'bgType') == 'image') {
            $(obj).addClass('bgimage');
            $(obj).css('background-image','url("' + getOption(obj, 'bgImage') + '")');
        } else {
            $(obj).removeClass('bgimage');
            $(obj).css('background-image','none');
            $(obj).css('background-color', getOption(obj, 'bgColor'));
        }

        getDimensions(obj);

        // Set new values
        $(obj).find('.song-item').songItem('option', 'mode', mode);
        $(obj).find('.song-item').songItem('option', 'lineHeight', getOption(obj, 'lineHeight'));
        $(obj).find('.song-item').songItem('option', 'cursorWidth', getOption(obj, 'cursorWidth'));
        $(obj).find('.song-item').songItem('option', 'fontFamily', getOption(obj, 'fontFamily'));
        $(obj).find('.song-item').songItem('option', 'fontSize', getOption(obj, 'fontSize'));
        $(obj).find('.song-item').songItem('option', 'simpleFontSize', getOption(obj, 'simpleFontSize'));
        $(obj).find('.song-item').songItem('option', 'displayFontSize', getOption(obj, 'displayFontSize'));
        $(obj).find('.song-item').songItem('option', 'displayFontFamily', getOption(obj, 'displayFontFamily'));
        $(obj).find('.song-item').songItem('option', 'displayAlignment', getOption(obj, 'displayAlignment'));
        $(obj).find('.song-item').songItem('option', 'displayColor', getOption(obj, 'displayColor'));
        $(obj).find('.song-item').songItem('update');
    }

    function getDimensions(obj) {

        var mode = getOption(obj, 'mode');

        // Get width of a single monospace
        var unique = uuidv4();
        var spanTest = $('<span>')
        .addClass(unique)
        .css('font-family', getOption(obj, 'fontFamily'))
        .css('font-size', mode == 'performance' ?  getOption(obj, 'fontSize') :  getOption(obj, 'simpleFontSize'))
        .css('position', 'absolute')
        .html('&nbsp;');
        $('body').append(spanTest);
        setOption(obj, 'cursorWidth', spanTest.width());
        setOption(obj, 'lineHeight', spanTest.height());
        $('.' + unique).remove();
    }

    $.fn.songsContainer = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('songsContainer-options', settings);

                // Set up options panel listeners
                $(settings.optionsPanel).optionsPanel({
                    'toggler': settings.optionsToggler,
                    'imageSelector': settings.imageSelector,
                    'loadingScreen': settings.loadingScreen,
                    'options': {
                        'mode': settings.mode,
                        'performancefontsize': settings.fontSize,
                        'performancefontfamily': settings.fontFamily,
                        'displayfontsize': settings.displayFontSize,
                        'displayfontfamily': settings.displayFontFamily,
                        'displayfontcolor': settings.displayColor,
                        'displayalignment': settings.displayAlignment,
                        'simplefontsize': settings.simpleFontSize,
                        'displaybgtype': settings.bgType,
                        'displaybgcolor': settings.bgColor,
                        'displaybgimage': settings.bgImage,
                    },
                    'listeners': [
                        {
                            'event': 'change',
                            'target': '#optionView',
                            'action': function(event) {
                                var mode = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'mode', mode);
                                update(self);
                                $(settings.optionsPanel).removeClass('performance')
                                .removeClass('simple')
                                .removeClass('audience')
                                .addClass(mode);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'mode', mode);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.optionsPanel).optionsPanel('hide');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionPerformanceFontFamily',
                            'action': function(event) {
                                var fontFamily = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'fontFamily', fontFamily);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'performancefontfamily', fontFamily);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionPerformanceFontSize',
                            'action': function(event) {
                                var fontSize = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'fontSize', fontSize);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'performancefontsize', fontSize);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionSimpleFontSize',
                            'action': function(event) {
                                var fontSize = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'simpleFontSize', fontSize);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'simplefontsize', fontSize);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionAudienceFontFamily',
                            'action': function(event) {
                                var fontFamily = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'displayFontFamily', fontFamily);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayfontfamily', fontFamily);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionAudienceFontColor',
                            'action': function(event) {
                                var color = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'displayColor', color);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayfontcolor', color);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionAudienceFontSize',
                            'action': function(event) {
                                var fontSize = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'displayFontSize', fontSize);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayfontsize', fontSize);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionAudienceAlignment',
                            'action': function(event) {
                                var alignment = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'displayAlignment', alignment);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'displayalignment', alignment);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionAudienceBackgroundType',
                            'action': function(event) {
                                var bgType = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'bgType', bgType);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'displaybgtype', bgType);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionAudienceBackgroundColor',
                            'action': function(event) {
                                var bgColor = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'bgColor', bgColor);
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'displaybgcolor', bgColor);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        },
                        {
                            'event': 'change',
                            'target': '#optionAudienceBackgroundImage',
                            'action': function(event) {
                                var bgImage = $(event.target).val();
                                $(settings.loadingScreen).loadingScreen('show');
                                setOption(self, 'bgImage', bgImage);
                                $('#optionBgImage').css('background-image', 'url("' + bgImage + '")');
                                update(self);
                                $(settings.optionsPanel).optionsPanel('setOptionValue', 'displaybgimage', bgImage);
                                $(settings.optionsPanel).optionsPanel('serialize');
                                $(settings.loadingScreen).loadingScreen('hide');
                            }
                        }
                    ]
                });

                // Get saved settings
                var savedOptions = $(settings.optionsPanel).optionsPanel('option', 'options');
                settings.fontSize = savedOptions.performancefontsize;
                settings.fontFamily = savedOptions.performancefontfamily;
                settings.displayFontSize = savedOptions.displayfontsize;
                settings.displayFontFamily = savedOptions.displayfontfamily;
                settings.displayColor = savedOptions.displayfontcolor;
                settings.displayAlignment = savedOptions.displayalignment;
                settings.simpleFontSize = savedOptions.simplefontsize;
                settings.bgType = savedOptions.displaybgtype;
                settings.bgColor = savedOptions.displaybgcolor;
                settings.bgImage = savedOptions.displaybgimage;

                getDimensions(self);

                settings = $(self).data('songsContainer-options');

                // Initialize dynamicpanel
                $(self).dynamicPanel({
                    'key': 'song',
                    'panelTemplate': settings.songItemTemplate,
                    'isDraggable': settings.isDraggable,
                    'onInsert': function(event, panel) {
                        // Initialize song panels
                        panel.songItem({
                            'keySelector': settings.keySelector,
                            'scaleSelector': settings.scaleSelector,
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
                            'displayFontSize': settings.displayFontSize,
                            'displayFontFamily': settings.displayFontFamily,
                            'displayAlignment': settings.displayAlignment,
                            'displayColor': settings.displayColor,
                            'simpleFontSize': settings.simpleFontSize,
                            'lineHeight': settings.lineHeight,
                            'cursorWidth': settings.cursorWidth,
                            'mode': settings.mode,
                            'sequenceControl': settings.sequenceControl,
                            'sequenceListPanel': settings.sequenceListPanel,
                            'sequenceList': settings.sequenceList,
                            'sequenceListToggler': settings.sequenceListToggler,
                            'currentSequenceDisplay': settings.currentSequenceDisplay,
                            'nextSequenceControl': settings.nextSequenceControl,
                            'prevSequenceControl': settings.prevSequenceControl,
                            'sequencesQuickControl': settings.sequencesQuickControl,
                            'totalSequences': settings.totalSequences,
                            'currentSequenceOrder': settings.currentSequenceOrder,
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
                            $(self).find('.song-item.current').songItem('setCurrentSongPart', panel.attr('data-order')*1-1, false);
                        })
                    }
                });

                // Set keyboard
                $(document).on('keyup', function(event) {
                    if (!$(event.target).is('body')) return false;
                    if (event.which == 37 || event.which == 65) {
                        event.preventDefault();
                        event.stopPropagation();
                        $(settings.previousSongControl).find('.trigger').trigger('click');
                    } else if (event.which == 39 || event.which == 68) {
                        event.preventDefault();
                        event.stopPropagation();
                        $(settings.nextSongControl).find('.trigger').trigger('click');
                    } else if (event.which == 38 || event.which == 87) {
                        event.preventDefault();
                        event.stopPropagation();
                        $(settings.prevSequenceControl).trigger('click');
                    } else if (event.which == 40 || event.which == 83) {
                        event.preventDefault();
                        event.stopPropagation();
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
