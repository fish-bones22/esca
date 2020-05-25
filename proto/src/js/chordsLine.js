(function($){

    var defaults = {
        'contextMenu': '.chord-context-menu',
        'chordBuilder': '.chord-selection-menu'
    };
    var cursorWidth = 0;
    var cursorHeight = 0;

    var initOnceFlag = false;

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

    /**
     * Set chord marker as selected or unselected
     * @param {object} obj 
     * @param {object} marker Target chord marker
     */
    function selectMarker(obj, marker) {
        let chordBuilder = getOption(obj, 'chordBuilder');
        if ($(marker).hasClass('selected')) {
            unselectMarker(obj, marker);
        } else {
            unselectMarker(obj, '.chord.selected');
            $(marker).addClass('selected');
            $(chordBuilder).chordBuilder('setTarget', marker);
        }
    }

    function unselectMarker(obj, marker) {
        if ($(marker).length <= 0) return;
        $(marker).each(function() {
            $(this).removeClass('selected');
            // Remove if empty on unselect
            if ($(this).attr('data-value') == '') {
                $(this).remove();
            }
        });
        let chordBuilder = getOption(obj, 'chordBuilder');
        $(chordBuilder).chordBuilder('setTarget', null);
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
                cursor.on('click', function(event) {
                    let currCursor = $(this);
                    // Get position of cursor
                    let position = currCursor.position().left;
                    // Create chord span and add to chords line
                    unselectMarker(self, '.chord.selected');
                    var chordMarker = $('<span>').addClass('chord selected');
                    var chordValue = $(settings.chordBuilder).chordBuilder('getChord', chordMarker);
                    chordMarker.attr('data-value', chordValue.value).html(chordValue.display == '' ? '&nbsp;' : chordValue.display);
                    // Make chordMarker draggable
                    chordMarker.draggable({
                        axis: 'x',
                        addClasses: false,
                        containment: 'parent',
                        grid:[cursorWidth, 0],
                        create: function(ev, ui) {
                            chordMarker.removeAttr('style')
                            .css('left', position)
                            .attr('data-position', Math.round(position/cursorWidth));
                        },
                        stop: function(ev, ui) {
                            let diff = Math.round(chordMarker.position().left);
                            let remainder = diff % cursorWidth;
                            let newPos = diff - remainder;
                            chordMarker.removeAttr('style')
                            .css('left', newPos)
                            .attr('data-position', newPos/cursorWidth);
                            sortChordMarkers(chordMarker);
                        }
                    });
                    chordMarker.on('click', function(ev) {
                        selectMarker(self, this);
                    });
                    // Set-up context menu
                    chordMarker.on('contextmenu', function(ev) {
                        ev.preventDefault();
                        $(settings.contextMenu).contextMenu('toggle', this);
                    });
                    // Set-up double click
                    chordMarker.on('dblclick', function() {
                        $(settings.chordBuilder).chordBuilder('show', this);
                    });
                    var parent =  $(currCursor).parent();
                    parent.append(chordMarker);
                    // Sort chords line
                    sortChordMarkers(parent);
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
                // Set chords line attributes
                $(self)
                .css('height', cursorHeight+5 + 'px')
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
                    });
                // Unbind mousemove event
                }).on('mouseout', function() {
                    $(self).off('mousemove');
                });

                // Init once the ff
                if (!initOnceFlag) {
                    // Remove selection when clicked outside chord markers
                    $(document).on('click', function(ev) {
                        if (!$(ev.target).hasClass('chord') 
                        && !$(ev.target).hasClass('chord-cursor') 
                        && $(ev.target).closest(settings.contextMenu).length <= 0
                        && $(ev.target).closest(settings.chordBuilder).length <= 0) {
                            unselectMarker(self, '.chord.selected');
                        }
                    });

                    initOnceFlag = true;
                }
             });


        }

        if (typeof command == 'string') {
            switch(command.toLowerCase()) {
                case 'select':
                    return $(this).each(function() {
                        selectMarker(this, option);
                    });
            }
        }
    }
})(jQuery)