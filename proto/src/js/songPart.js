import { v4 as uuidv4 } from 'uuid';

$(document).ready(function(){
    // Fold/Expand action of song part panel
    $(document).on('click', '.fold, .expand', function() {
        if ($(this).hasClass('fold')) {
            $(this).siblings('.stanza-container').hide();
            $(this).siblings('.expand').show();
        } else {
            $(this).siblings('.stanza-container').show();
            $(this).siblings('.fold').show();
        }
        $(this).hide();
    });
    // More menu action of song panel
    $(document).on('click', '.more', function(event) {
        var menu = $(this).siblings('.expanded-menu');
        $('.expanded-menu.expanded').not(menu).removeClass('expanded');
        menu.toggleClass('expanded');
    });
    $(document).on('mouseup', function(event) {
        var more = $('.more');
        if (!more.is(event.target) && more.has(event.target).length <= 0) {
            $('.expanded-menu.expanded').removeClass('expanded');
            return true;
        }
    });
    // Insert below action of song panels
    $(document).on('click', '.insert-below', function() {
        var index = $(this).closest('.song-part').attr('data-order')*1;
        $('#songParts').dynamicPanel('insert', index);
    });
    // Activate dynamic panel for song parts
    $('#songParts').dynamicPanel({
        'key': 'songPart',
        'panelTemplate': '.song-part-template',
        'removerSelector': '.delete-line',
        // Draggable options
        'draggable': {
            'cancel': ['.chord-cursor', '.chord',  '.close', '.more' ]
        },
        'onInsert': function (event, panel) {
            // Generate GUID and create id for stanza
            var id = 'stanza'+ uuidv4().replace(/[{,},-]*/g, '');
            // Activate dynamic panel for song lines
            panel.find('.stanza').attr('id', id).dynamicPanel({
                'key': 'stanza',
                'panelTemplate': '.content-prototype',
                'removerSelector': '.delete-line',
                'autoformatPaste': true,
                // Draggable options
                'draggable': {
                    'cancel': ['.chord-cursor', '.chord',  '.close', '.more' ]
                }, 
                'onInsert': function (innerEv, songlinePanel) {
                    // Generate GUID and create id for song line
                    var lineId = 'line'+ uuidv4().replace(/[{,},-]*/g, '');
                    songlinePanel.attr('id', lineId);
                    // Process chords line when inserting new line from chords mode
                    if ($('#processing').val() == 'chords') {
                        songlinePanel.find('.chords').chordsLine();
                    }
                }
            });
            // Set add stanza button target
            panel.find('.add-stanza').attr('data-target', '#'+id);
            // Set up song part title
            panel.find('.song-part-title .song-part-name').on('click', function() {
                $('.song-part-title-expanded-panel').contextMenu('show', this);
            })
        }
    });
});