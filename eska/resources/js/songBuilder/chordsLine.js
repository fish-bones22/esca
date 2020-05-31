(function($){

    var defaults = {
        'height': 10,
        'contextMenu': '.chord-context-menu',
        'chordBuilder': '.chord-selection-menu'
    };
    var cursorWidth = 0;
    var cursorHeight = 0;

    function getOption(obj, name) {
        let option = $(obj).data('chordsLine-options');
        if (option == undefined || !option.hasOwnProperty(name)) {
            return undefined;
        }
        return option[name];
    }

    /**
     * Sort chord markers within the parent chord line
     * @param {Jquery Object} chordMarker 
     */
    function sortChordMarkers(chordMarker) {
        var parent;
        var markers;
        if (chordMarker.hasClass('chord')) {
            parent = chordMarker.parent();
            markers = parent.children('.chord');
        } else if (chordMarker.hasClass('chords')) {
            markers = chordMarker.children('.chord');
            parent = chordMarker;
        }

        // Sort chords line
        markers.sort(function(elem1, elem2) {
            return $(elem1).offset().left > $(elem2).offset().left ? 1 : -1;
        }).appendTo(parent);
    }

    function updateDimensions(obj, cursor) { 
        
        if (cursorWidth == '' || cursorWidth == 0 || cursor.width() > cursorWidth) {
            cursorWidth = cursor.width();
        }
    }

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
                cursor.on('click', function() {
                    // Get position of cursor
                    let position = cursor.position().left;
                    let parent = cursor.parent();
                    // Create chord span and add to chords line
                    $('<span>').chordMarker({
                        chordBuilder: settings.chordBuilder,
                        contextMenu: settings.contextMenu,
                        dragSnap: cursorWidth,
                        leftOffset: position,
                        keySelector: '#mainKey',
                        parent: parent,
                        onDragStop: function() {
                            sortChordMarkers($(this));
                        },
                    });
                    // Sort chords line
                    sortChordMarkers(parent);
                });

                // Add chord cursor to chords line
                $(self).append(cursor);

                // Set chords line attributes
                updateDimensions(self, cursor);
                $(self).css('height', settings.height)
                .addClass('chordsLine-processed');

                // Mouseover event for chords line to make chord cursor follow the mouse cursor
                $(self).on('mouseover', function() {
                    // When mouse is hovered to chord view, track mouse position
                    $(self).on('mousemove', function(event) {
                        if (!$(self).is(event.target)) return true;
                        // Get new position based on mouse cursor position and offsets.
                        var diff = event.offsetX;
                        // Get remainder and remove from difference for snapping
                        var remainder = diff%cursorWidth;
                        cursor.css('left', diff - remainder + 'px');   
                        // Update the chord line dimension
                        updateDimensions(self, cursor);
                    });
                // Unbind mousemove event
                }).on('mouseout', function() {
                    $(self).off('mousemove');
                });
             });
        }
    }
})(jQuery)