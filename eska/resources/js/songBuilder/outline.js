$(document).ready(function() {

    $('#addDetails').click(addDetails);
    $('#addChords').click(addChords);
    $('#addLyrics').click(addLyrics);
    $('#createSequence').click(setSequence);

    addDetails();

});

function addDetails() {
    $('.song-details-container').show();
    $('.song-part-container').hide();
    $('.sequence-container').hide();
    $('.step.current').removeClass('current');
    $('#addDetails').addClass('current');
    // Hide chord builder
    $('.chord-selection-menu').chordBuilder('hide');

    setPrevNext(null, addLyrics);
}

function addLyrics() {
    $('.song-details-container').hide();
    $('.song-part-container').show();
    $('.sequence-container').hide();
    $('.step.current').removeClass('current');
    $('#addLyrics').addClass('current');

    $('.song-line .lyrics-view').each(function() {
        // Set process
        $('#processing').val('lyrics');
        // Hide chords if shown
        $(this).parent().siblings('.chords').hide();
        // Hide input
        $(this).hide();
        // Get sibling view element
        var lyricsInput = $(this).siblings('input[type="text"]');
        if (lyricsInput.length <= 0) return;
        // Set view element text
        lyricsInput.show();
    });
    $('.chord-selection-menu').chordBuilder('hide');

    setPrevNext(addDetails, addChords);
}

function addChords() {
    $('.song-details-container').hide();
    $('.song-part-container').show();
    $('.sequence-container').hide();
    $('.step.current').removeClass('current');
    $('#addChords').addClass('current');
    // Get each lyrics line and display
    $('.song-line .lyrics input[type="text"]').each(function() {
        // Set process
        $('#processing').val('chords');
        // Show chords
        $(this).parent().siblings('.chords').show();
        // Get sibling view element
        var lyricsView = $(this).siblings('.lyrics-view');
        // Hide input
        $(this).hide();
        if (lyricsView.length <= 0) return;

        // Get text from lyrics text input and format
        lyricsView.songLine({
            'dataSource': this,
            'contextMenu': '.character-context-menu',
            'spacerContextMenu': '.spacer-context-menu'
        });

        // Set view element text
        lyricsView.show();

    });

    setPrevNext(addLyrics, setSequence);
}

function setSequence() {
    // Hide other panels
    $('.song-details-container').hide();
    $('.song-part-container').hide();

    // Show this panel
    $('.sequence-container').show();

    // Set visual indicator
    $('.step.current').removeClass('current');
    $('#createSequence').addClass('current');

    // Set processing value
    $('#processing').val('sequence');

    // Hide chord builder
    $('.chord-selection-menu').chordBuilder('hide');

    // Init sequence builder
    $('#sequenceBox').sequenceBuilder('setSequenceSelect');

    // Set action buttons
    setPrevNext(addChords,function(){ alert('Done')});
}

function setPrevNext(prev, next) {
    $('.previous').off('click').on('click', function() {
        if (typeof prev == 'function') prev();
    }).show();
    $('.next').off('click').on('click', function() {
        if (typeof next == 'function') next();
    });
}
