$(document).ready(function() {

    let chordSelectionSelector = '.chord-selection-menu';
    // Set up context menu
    $('.chord-context-menu').contextMenu({
        'menuItems': [
            {
                'name': 'delete',
                'selector': '.delete-chord',
                'action': function(ev, obj, target) {
                    $(target).remove();
                    $(obj).contextMenu('hide');
                }
            },
            {
                'name': 'update',
                'selector': '.change-chord',
                'action': function(ev, obj, target) {
                    $(target).chordMarker('select');
                    $(chordSelectionSelector).chordBuilder('show', target);
                    $(chordSelectionSelector).chordBuilder('setTarget', target, true);
                    $(obj).contextMenu('hide');
                }
            }
        ] 
    });

    // Set up chord builder
    $(chordSelectionSelector).chordBuilder({
        'keySelector': '#mainKey',
        'changeTargetOnChordChange': true,
        'songPartSelector': '.song-part-name',
        'setTargetValue': function(ev, target, value) {
            if (target != undefined) {
                $(target).chordMarker('chordValue', value);
            }
        }
    });

    $('#sequenceBox').sequenceBuilder({
        'noNameSubstitute': {
            'find': '[no-name]',
            'replace': '<span class="text-muted">No name</span>'
        },
        'defaultSelect': function() {
            var select = [];
            $('.song-part.panel-item .song-part-title').each(function() {
                var name = $(this).find('.song-part-name').attr('data-name');
                if (name == '' || name == undefined) {
                    name = '[no-name]';
                }
                select.push({
                    'name': name,
                    'id': $(this).parent().find('.stanza').attr('id')
                });
            });
            return select;
        }
    });

    // Context menu of song part
    $('.song-part-title-expanded-panel').contextMenu({
        'menuItems': [
            {
                'name': 'done',
                'selector': '.done',
                'action': function(ev, obj, target) {
                    var name = $(obj).find('.song-part-name-select').val();
                    var number = $(obj).find('.song-part-name-number-input input').val();
                    name = number != '' ? name + ' ' + number : name;
                    $(target).attr('data-name', name);
                    $(target).html(name);
                    $(obj).contextMenu('hide');
                    $(chordSelectionSelector).chordBuilder('generateCustom');
                 }
            },
            {
                'name': 'clear',
                'selector': '.clear',
                'action': function(ev, obj, target) {
                    $(obj).find('.song-part-name-number-input input').val('');
                 }
            }
        ]
    });

    
    // context menu of sequence builder
    $('.sequence-expanded-menu').contextMenu({
        'menuItems': [
            {
                'name': 'delete',
                'selector': '.delete-sequence',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1-1;
                    $(target).closest('.dynamicPanel').dynamicPanel('remove', index);
                    $(obj).contextMenu('hide');
                }
            },
            {
                'name': 'insertBelow',
                'selector': '.insert-sequence',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1;
                    $(target).closest('.dynamicPanel').dynamicPanel('insert', index);
                    $(obj).contextMenu('hide');
                }
            }
        ]
    });

    $('.step a').click(function () {
        $('.step.current').removeClass('current');
        $(this).parent().addClass('current');
    });

    $('#addChords').click(addChords);
    
    $('#addLyrics').click(addLyrics);
    
    $('#createSequence').click(setSequence);
    
});

function addLyrics() {
    $('.song-part-container').show();
    $('.sequence-container').hide();
    $('.song-line .lyrics-view').each(function() {
        // Set process
        $('#processing').val('lyrics');
        // Hide input
        $(this).hide();
        // Get sibling view element
        var lyricsInput = $(this).siblings('input[type="text"]');
        if (lyricsInput.length <= 0) return;
        // Set view element text
        lyricsInput.show();
    });
}

function addChords() {
    $('.song-part-container').show();
    $('.sequence-container').hide();
    // Get each lyrics line and display
    $('.song-line .lyrics input[type="text"]').each(function() {
        // Set process
        $('#processing').val('chords');
        // Set chords only for panel items (exclude prototype items)
        if ($(this).closest('.panel-item').length > 0) {
            // Get chords view element and format
            var chordsView = $(this).parent().siblings('.chords');
            if (chordsView.length > 0) {
                // Create chord cursor if not yet existing
                chordsView.chordsLine();
            }
        }
        // Get sibling view element
        var lyricsView = $(this).siblings('.lyrics-view');
        // Hide input
        $(this).hide();
        if (lyricsView.length <= 0) return;
        // Get text from lyrics text input
        var lineText = $(this).val();
        // Set view element text
        lyricsView.text(lineText);
        lyricsView.show();

    });
}

function setSequence() {
    $('.song-part-container').hide();
    $('.sequence-container').show();
    $('#processing').val('sequence');
    $('#sequenceBox').sequenceBuilder('setSequenceSelect');
}