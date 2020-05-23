$(document).ready(function() {

    $('.step a').click(function () {
        $('.step.current').removeClass('current');
        $(this).parent().addClass('current');
    });

    $('#addChords').click(addChords);
    
    $('#addLyrics').click(addLyrics);
});

function addLyrics() {
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