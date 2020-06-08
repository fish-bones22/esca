(function($) {

    var defaults = {
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
        'isDraggable': false
    }

    function setValues(obj, songs) {

        $(obj).dynamicPanel('removeAll');
        songs.forEach(song => {
            var panel = $(obj).dynamicPanel('insert');
            panel.songItem('setValue', song);
        });

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


                $(self).data('songsContainer-options', settings);
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
