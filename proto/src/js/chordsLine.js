(function($){

    var defaults = {

    };
    var cursorWidth = 0;
    var cursorHeight = 0;
    var cursorOffset = 0;



    $.fn.chordsLine = function(command, option, value) {

        if (typeof command === 'object' || command == undefined) {
            return $(this).each(function() {

                var self = this;

                // Skip if this element is already processed
                if ($(self).hasClass('chordsLine-processed')) return true;
                // Set up settings
                var settings = $.extend({}, defaults, command);
                // Save settings to DOM
                $(self).data('chordsLine-options', settings);

                // Initialize chord cursor
                if ($(self).children('.chord-cursor').length > 0) {
                    return false;
                }

                var cursor = $('<span>').addClass('chord-cursor').html('&nbsp;');
                // Click event for cursor
                cursor.on('click', function(event) {
                    // Get position of cursor
                    let position = $(this).css('left');
                    // Create chord span and add to chords line
                    var chordMarker = $('<span>').addClass('chord').html('|Dm<sup>M7</sup>').css('left', position);
                    $(this).parent().append(chordMarker);
                    // Sort chords line
                    $(this).parent().children('.chord').sort(function(elem1, elem2) {
                        return $(elem1).offset().left > $(elem2).offset().left ? 1 : -1;
                    }).appendTo($(this).parent());
                });
                // Add chord cursor to chords line
                $(self).append(cursor);

                // Set global variables
                if (cursorWidth == '' || cursorWidth == 0) {
                    cursorWidth = cursor.width();
                }
                if (cursorHeight == '' || cursorHeight == 0) {
                    cursorHeight = cursor.height();
                }
                if (cursorOffset == '' || cursorOffset == 0) {
                    cursorOffset = cursor.offset().left;
                }
                // Set chords line attributes
                $(self)
                .css('height', cursorHeight+5 + 'px')
                .addClass('chordsLine-processed');

                // Mouseover event for chords line to make chord cursor follow the mouse cursor
                $(self).on('mouseover', function() {
                    // When mouse is hovered to chord view, track mouse position
                    $(self).on('mousemove', function(event) {
                        // Get new position based on mouse cursor position and offsets.
                        var diff = event.clientX - cursorOffset;
                        // Get remainder and remove from difference for snapping
                        var remainder = diff%cursorWidth;
                        cursor.css('left', diff - remainder + 'px');
                    });
                // Unbind mousemove event
                }).on('mouseout', function() {
                    $(self).off('mousemove');
                });
             });


        }
    }
})(jQuery)