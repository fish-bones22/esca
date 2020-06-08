(function($){

    var defaults = {
        'spacing': 'css',
        'height': 10,
        'cursorWidth': 10,
        'contextMenu': '.chord-context-menu',
        'chordBuilder': '',
        'mainScale': '',
        'songModulation': 0,
        'songPartScale': '',
        'scale': '',
        'key': '',
        'songPartModulation': 0,
        'modulation': 0,
        'modulationInfo': '.song-line-modulation-info',
        'value': '',
        'fontSize': '',
        'fontFamily': '',
        'editable': false,
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
     * Set option value
     * @param {Object} obj
     * @param {String} option
     * @param {any} value
     */
    function setOption(obj, option, value) {
        var options = $(obj).data('chordsLine-options');
        options[option] = value;
        $(obj).data('chordsLine-options', options);
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
     * @param {string} scale scale reference of the chord
     * @param {number} modulation modulation of the chord
     * @param {string} value chord value with parts delimited by /
     */
    function insertChordMarker(obj, width, position, scale, modulation = 0, value = null) {
        $('<span>').chordMarker({
            'spacing': getOption(obj, 'spacing'),
            'chordBuilder': getOption(obj, 'chordBuilder'),
            'contextMenu': getOption(obj, 'contextMenu'),
            'dragSnap': width,
            'leftOffset': position,
            'key': getOption(obj, 'key'),
            'mainScale': getOption(obj, 'mainScale'),
            'songPartScale': getOption(obj, 'songPartScale'),
            'songLineScale': function() { getOption(obj, 'scale') },
            'scale': scale,
            'parent': obj,
            'songModulation': getOption(obj, 'songModulation'),
            'songLineModulation': function() {return getOption(obj, 'modulation')},
            'songPartModulation': getOption(obj, 'songPartModulation'),
            'sequenceModulation': getOption(obj, 'sequenceModulation'),
            'modulation': modulation,
            'value': value,
            'onDragStop': function() {
                sortChordMarkers(obj);
            },
            'editable': getOption(obj, 'editable'),
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
        if (chords.length < 1) {
            console.error('Error at chordsLine.setValue() => Invalid chords data');
            return;
        }
        // Set chord line details
        var details = chords.splice(0, 1)[0].split('/');
        if (details.length < 2) {
            console.error('Error at chordsLine.setValue() => Invalid chords metadata');
            return;
        }
        var modulation = details[0]*1;
        var scale = details[1];
        modulate(obj, modulation);
        changeScale(obj, scale);

        chords.forEach(chord => {
            // Get chord parts
            var chordPart = chord.split('/');
            if (chordPart.length != 8) return;

            var keyReference = chordPart[0]*1;
            var scale = chordPart[1];
            var position = chordPart[2]*1;
            var measure = chordPart[3];
            var root = chordPart[4];
            var variation = chordPart[5];
            var variation2 = chordPart[6];
            var bass = chordPart[7];
            insertChordMarker(obj, getOption(obj, 'cursorWidth'), position*getOption(obj, 'cursorWidth'), scale, keyReference, [measure, root, variation, variation2, bass].join('/'));
        });
    }

    /**
     * Get the value of chords in this chord line in array form
     * @param {object} obj
     */
    function getValue(obj) {
        var chords = [];
        // Get details
        var modulation = getOption(obj, 'modulation');
        var scale = getOption(obj, 'scale');
        modulation = typeof modulation == 'function' ? modulation() : modulation;
        scale = typeof scale == 'function' ? scale() : scale;
        chords.push([modulation, scale].join('/'));
        // Get chords in the line
        $(obj).find('.chord').each(function() {
            var modulation = $(this).chordMarker('option', 'modulation');
            var scale = $(this).chordMarker('option', 'scale');
            modulation = typeof modulation == 'function' ? modulation() : modulation;
            scale = typeof scale == 'function' ? scale() : scale;
            var position = $(this).attr('data-position');

            var value = $(this).attr('data-value');
            chords.push([modulation, scale, position, value].join('/'));
        });
        return chords;
    }

    /**
     * Modulate the song line
     * @param {object} obj
     * @param {number} amount Amount of modulation
     */
    function modulate(obj, amount) {
        $(obj).closest('.song-line').attr('data-modulation', amount);
        setOption(obj, 'modulation', amount);
        setModulationInfo(obj);
    }

    /**
     * Change the scale of the song line
     * @param {object} obj
     * @param {string} scale Name of the new scale
     */
    function changeScale(obj, scale) {
        $(obj).closest('.song-line').attr('data-scale', scale);
        setOption(obj, 'scale', scale);
        setModulationInfo(obj);
    }


    function setModulationInfo(obj) {
        // Get the song's modulation
        var songModulation = getOption(obj, 'songModulation');
        songModulation = typeof songModulation == 'function' ? songModulation() : songModulation;

        // Get the song part modulation
        var songPartModulation = getOption(obj, 'songPartModulation');
        songPartModulation = typeof songPartModulation == 'function' ? songPartModulation() : songPartModulation;

        // Get the sequence modulation
        var sequenceModulation = getOption(obj, 'sequenceModulation');
        sequenceModulation = typeof sequenceModulation == 'function' ? sequenceModulation() : sequenceModulation || 0;

        // Get this line's modulation
        var modulation = getOption(obj, 'modulation');
        modulation = typeof modulation == 'function' ? modulation() : modulation || 0;

        // Get the scale of the song part
        var songPartScale =  getOption(obj, 'songPartScale');
        songPartScale = typeof songPartScale == 'function'  ? songPartScale() : songPartScale;

        // Get this line's current scale
        var scale  = getOption(obj, 'scale');
        scale  = typeof scale == 'function'  ? scale() : scale;

        // Get the song's main key
        var mainKey = getOption(obj, 'key');
        mainKey = typeof mainKey == 'function'  ? mainKey() : mainKey;

        // Hide the modulation info if no changes to key and scale in relation with it's parent song part
        if (modulation == 0 && scale == songPartScale) {
            $(obj).siblings(getOption(obj, 'modulationInfo')).hide();
        } else {
            // Get the reference key given modulation and display
            var display = window.ChordProcessor.processChord('no/1/M//', mainKey, scale, modulation + songModulation*1 + songPartModulation*1 + sequenceModulation*1);
            $(obj).siblings(getOption(obj, 'modulationInfo')).show().children('span').html('Key of ' + display + (scale != 'major' ? ' ' + scale : ''));
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
                    insertChordMarker(self, settings.cursorWidth, position, typeof settings.scale == 'function' ? settings.scale() : settings.scale);
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

                changeScale(self, typeof settings.songPartScale == 'function' ? settings.songPartScale() : settings.songPartScale);

                if (settings.value != '') {
                    setValue(self, settings.value);
                }

                if (settings.fontFamily != '') {
                    $(self).css('font-family', settings.fontFamily);
                }
                if (settings.fontSize != '') {
                    $(self).css('font-size', settings.fontSize);
                }
             });
        }

        if (typeof command == 'string') {
            switch (command.toLocaleLowerCase()) {
                case 'setvalue':
                    if (typeof option != 'string') return this;
                    return $(this).each(function() {
                        setValue(this, option);
                    });
                case 'getvalue':
                    return getValue(this);
                case 'setscale':
                    return getValue(this);
                case 'modulate':
                    if (typeof option != 'number') return; // NaN
                    return $(this).each(function() {
                        modulate(this, option);
                    });
                case 'changescale':
                    return $(this).each(function() {
                        changeScale(this, option);
                    });
                case 'update':
                    return $(this).each(function() {
                        setModulationInfo(this);
                    });
            }
        }

    }
})(jQuery)
