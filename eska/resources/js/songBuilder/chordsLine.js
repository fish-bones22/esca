(function($){

    var defaults = {
        'height': 10,
        'contextMenu': '.chord-context-menu',
        'chordBuilder': '.chord-selection-menu',
        'keySelector': '#mainkey'
    };

    /**
     * Get option from DOM data
     * @param {object} obj
     * @param {string} name option name/key
     */
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
        if ($(chordMarker).hasClass('chord')) {
            parent = $(chordMarker).parent();
            markers = parent.children('.chord');
        } else if ($(chordMarker).hasClass('chords')) {
            markers = $(chordMarker).children('.chord');
            parent = chordMarker;
        }

        // Sort chords line
        markers.sort(function(elem1, elem2) {
            return $(elem1).offset().left > $(elem2).offset().left ? 1 : -1;
        }).appendTo(parent);
    }


    /**
     * Instantiate a new chord marker inside obj
     * @param {object} obj
     * @param {number} width the snap width of the marker
     * @param {number} position the left offset of the marker from the left edge of the document
     * @param {number} keyReference modulation of the chord
     * @param {string} value chord value with parts delimited by /
     */
    function insertChordMarker(obj, width, position, keyReference = 0, value = null) {
        $('<span>').chordMarker({
            chordBuilder: getOption(obj, 'chordBuilder'),
            contextMenu: getOption(obj, 'contextMenu'),
            dragSnap: width,
            leftOffset: position,
            keySelector: getOption(obj, 'keySelector'),
            parent: obj,
            keyReference: keyReference,
            value: value,
            onDragStop: function() {
                sortChordMarkers(obj);
            },
        });
    }

    /**
     *
     * @param {object} obj
     * @param {string} values Chords values. String delimited by |
     */
    function setValue(obj, values) {
        $(obj).children('.chord').remove();
        var chords = values.split('|');
        chords.forEach(chord => {
            // Get chord parts
            var chordPart = chord.split('/');
            if (chordPart.length != 7) return;

            var keyReference = chordPart[0]*1;
            var position = chordPart[1]*1;
            var measure = chordPart[2];
            var root = chordPart[3];
            var variation = chordPart[4];
            var variation2 = chordPart[5];
            var bass = chordPart[6];
            insertChordMarker(obj, getOption(obj, 'cursorWidth'), position*getOption(obj, 'cursorWidth'), keyReference, [measure, root, variation, variation2, bass].join('/'));
        });
    }

    $.fn.chordsLine = function(command, option, value) {

        if (typeof command === 'object' || command == undefined) {
            return $(this).each(function() {

                console.log('set');
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
                    insertChordMarker(self, settings.cursorWidth, position);
                    // Sort chords line
                    sortChordMarkers(parent[0]);
                });

                // Add chord cursor to chords line
                $(self).append(cursor);
                // Mouseover event for chords line to make chord cursor follow the mouse cursor
                $(self).on('mouseover', function() {
                    // When mouse is hovered to chord view, track mouse position
                    $(self).on('mousemove', function(event) {
                        if (!$(self).is(event.target)) return true;
                        // Get new position based on mouse cursor position and offsets.
                        var diff = event.offsetX;
                        // Get remainder and remove from difference for snapping
                        var remainder = diff%settings.cursorWidth;
                        cursor.css('left', diff - remainder + 'px');
                    });
                // Unbind mousemove event
                }).on('mouseout', function() {
                    $(self).off('mousemove');
                });

                // Set chords line attributes
                $(self).css('height', settings.height)
                .addClass('chordsLine-processed');

             });
        }

        if (typeof command == 'string') {
            switch (command.toLocaleLowerCase()) {
                case 'setvalue':
                    if (typeof option != 'string') return this;
                    return $(this).each(function() {
                        setValue(this, option);
                    });
            }
        }

    }
})(jQuery)
