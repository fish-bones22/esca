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
                    hide(self);
                }
            },
            {
                'name': 'update',
                'selector': '.change-chord',
                'action': function(ev) {
                    var target = $(ev.data.obj).data('target');
                    $(target).closest('.chords').chordsLine('select', target);
                    $(chordSelectionSelector).chordBuilder('show', target);
                }
            }
        ] 
    });

    // Set up chord builder
    $(chordSelectionSelector).chordBuilder({
        'keySelector': '#mainKey',
    });

    $('#sequenceBox').sequenceBuilder({
        'defaultSelect': function() {
            var select = [];
            $('.song-part.panel-item .song-part-title').each(function() {
                select.push({
                    'name': $(this).find('select').val() + ' ' + $(this).find('input[type="number"]').val(),
                    'id': $(this).parent().find('.stanza').attr('id')
                });
            });
            return select;
        }
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