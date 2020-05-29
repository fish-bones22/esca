$(function() {

    var navbarSongTitle = '.song-title input';
    var songTitleInput = '#songTitle';
    var navbarKey = '#mainKey';
    var songKeyInput = '#songKey';
    var songTagInput = '#songTags';
    
    // Sync changes with Song Title
    $(songTitleInput).on('keyup', function() {
        $(navbarSongTitle).val($(this).val());
    });

    $(navbarSongTitle).on('keyup', function() {
        $(songTitleInput).val($(this).val());
    });

    // Sync changes with Song Key
    $(document).on('change', [navbarKey, songKeyInput].join(','), function(ev) {
        var target = navbarKey;
        if ($(this).is(navbarKey)) {
            target = songKeyInput;
        }
        var key = $(this).find('option:selected').val();
        var scale = $(this).find('option:selected').attr('data-scale');
        $(target).find('option[value="' + key + '"][data-scale="' + scale + '"]').prop('selected', true);
        $('.chord-selection-menu').chordBuilder('update');
    });

    // Show error message if needed
    $('.input-container').on('inputContainer:submit', function() {
        // If no error text element, do not engage
        var errText = $(this).find('.error-text');
        if (errText.length <= 0) {
            return;
        }
        var value = $(this).find('input, select').val();
        // If value of input or select is not empty, hide error message if shown
        if (value != '') {
            if (errText.is(':visible')) errText.hide();
            return;
        }
        // Show error message
        errText.show();
    });

    $('.tag-item').on('click', function() {
        // Toggles selected class
        if ($(this).hasClass('selected')) $(this).removeClass('selected');
        else $(this).addClass('selected');
        // Reconstruct input value
        var selectedVal = [];
        $(this).parent().find('.selected').each(function() {
            selectedVal.push($(this).text());
        });
        $(songTagInput).val(selectedVal.join('|'));
    });

});