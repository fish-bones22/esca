(function($) {

    var defaults = {
        'dragSnap': 0,
        'leftOffset': 0,
        'scale': '',
        'mainKey': 'C',
        'mainScale': 'Major',
        'parent': undefined,
        'selectOnCreate': true,
        'remainSelected': false,
        'songModulation': 0,
        'songPartModulation': 0,
        'sequenceModulation': 0,
        'songLineModulation': 0,
        'modulation': 0,
        'value': null,
        'spacing': 'css',
        'editable': true,
        onDragStop: function() {},
    };

    var ChordProcessor = window.ChordProcessor;

    function getOption(obj, name) {
        let option = $(obj).data('chordMarker-options');
        if (option == undefined || !option.hasOwnProperty(name)) {
            return undefined;
        }
        return option[name];
    }

    function setOption(obj, name, value) {
        let option = $(obj).data('chordMarker-options');
        if (option == undefined || !option.hasOwnProperty(name)) {
            return;
        }
        option[name] = value;
        $(obj).data('chordMarker-options', option);
    }

    /**
     * Update each chord
     * @param {object} obj
     */
    function updateChord(obj) {
        if ($(obj).attr('data-value') == '') {
            $(obj).html('&nbsp;');
            return;
        }

        var mainRoot = getOption(obj, 'key');
        var scale = getOption(obj, 'scale');
        mainRoot = typeof mainRoot == 'function' ? mainRoot() : mainRoot;
        scale = typeof scale == 'function' ? scale() : scale;

        var modulationAmount = getModulationAmount(obj);
        var disp = ChordProcessor.processChord($(obj).attr('data-value'), mainRoot, scale, modulationAmount);
        $(obj).html(disp);
    }

    /**
     * Set value of chord
     * @param {object} obj
     * @param {string} value Value of chord
     */
    function setValue(obj, value) {
        $(obj).attr('data-value', value);
        updateChord(obj);
        if (!getOption(obj, 'remainSelected') && value != '') {
            unselectMarker(obj);
        }
    }

    /**
     * Modulate the chord
     * @param {object} obj
     * @param {number} amount Amount of modulation
     */
    function modulate(obj, amount) {
        setOption(obj, 'modulation', amount);
    }

    /**
     * Get total modulation (song + song part + song line) of the chord
     * @param {object} obj
     */
    function getModulationAmount(obj) {
        var _songModulation = getOption(obj, 'songModulation');
        var _songPartModulation = getOption(obj, 'songPartModulation');
        var _sequenceModulation = getOption(obj, 'sequenceModulation');
        var _songLineModulation = getOption(obj, 'songLineModulation');

        var songModulation = typeof _songModulation == 'function' ? _songModulation() : _songModulation;
        var songPartModulation = typeof _songPartModulation == 'function' ? _songPartModulation() : _songPartModulation;
        var sequenceModulation = typeof _sequenceModulation == 'function' ? _sequenceModulation() : _sequenceModulation;
        var songLineModulation = typeof _songLineModulation == 'function' ? _songLineModulation() : _songLineModulation;

        var modulation = getOption(obj, 'modulation');

        return modulation*1 + songModulation*1 + songPartModulation*1 + sequenceModulation*1 + songLineModulation*1;
    }

    /**
     * Toggle this chord marker as selected
     * @param {object} obj
     * @param {object} marker Target chord marker
     */
    function selectMarker(obj) {
        let chordBuilder = getOption(obj, 'chordBuilder');


        if ($(obj).hasClass('selected')) {
            unselectMarker(obj, chordBuilder);
            if (chordBuilder == '') return;
            $(chordBuilder).chordBuilder('setTarget', null);
        } else {
            unselectAllMarkers();
            $(obj).addClass('selected');
            if (chordBuilder == '') return;
            $(chordBuilder).chordBuilder('setTarget', obj);
        }
    }

    /**
     * Unselect this chord marker
     * @param {object} obj
     */
    function unselectMarker(obj, chordBuilder = undefined) {
        if ($(obj).length <= 0) return;
        $(obj).removeClass('selected');
        // Remove if empty on unselect
        if ($(obj).attr('data-value') == '') {
            $(obj).remove();
        }
        if (chordBuilder == undefined) {
            chordBuilder = getOption(obj, 'chordBuilder');
        }

        if (chordBuilder == '') return;

        $(chordBuilder).chordBuilder('setTarget', null);
        setOption(obj, 'remainSelected', false);
    }

    function updatePosition(obj) {

        $(obj).css('left', getOption(obj, 'leftOffset'));
    }

    /**
     * Unselect all selected chords markers
     */
    function unselectAllMarkers() {
        $('.chord.selected').each(function() {
            unselectMarker(this);
            remainSelected = true;
        });
    }

    $.fn.chordMarker = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var settings = $.extend({}, defaults, command);
                var self = this;
                // Save settings
                $(self).data('chordMarker-options', settings);
                // Set up attributes
                $(self).addClass('chord').html('&nbsp;');

                var position =  settings.position;
                if (settings.position != null) {
                    position = Math.round(settings.leftOffset/settings.dragSnap);
                    setOption(self, 'position', position);
                }

                // Set up draggable
                $(self).draggable({
                    axis: 'x',
                    addClasses: false,
                    containment: 'parent',
                    grid:[settings.dragSnap, 0],
                    disabled: !settings.editable,
                    create: function(ev, ui) {
                        $(self).removeAttr('style')
                        .css('left', settings.leftOffset)
                        .css('position', 'absolute')
                        .attr('data-position', position);
                    },
                    stop: function(ev, ui) {
                        let diff = $(self).position().left;
                        let snapPos = Math.round(diff / settings.dragSnap);
                        $(self).removeAttr('style')
                        .css('left', snapPos * settings.dragSnap)
                        .attr('data-position', snapPos);
                        $(self).trigger('chordMarker:dragstop', [$(self)]);
                    }
                });

                if (settings.editable) {
                    // Events
                    $(self).on('click', function(ev) {
                        selectMarker(self);
                        settings.remainSelected = true;
                    });
                    // Set-up context menu
                    $(self).on('contextmenu', function(ev) {
                        ev.preventDefault();
                        $(settings.contextMenu).contextMenu('toggle', this);
                    });

                    if (settings.chordBuilder != '') {
                        // Set-up double click
                        $(self).on('dblclick', function() {
                            $(settings.chordBuilder).chordBuilder('show', this);
                        });
                        // Remove selection when clicked outside chord markers
                        $(document).on('click', function(ev) {
                            if ($(ev.target).closest('.chords').length <= 0
                            && $(ev.target).closest(settings.contextMenu).length <= 0
                            && $(ev.target).closest(settings.chordBuilder).length <= 0) {
                                unselectMarker(self);
                            }
                        });
                    }

                    // Custom events
                    $(self).on('chordMarker:dragstop', settings.onDragStop);

                }
                // Append marker to parent
                $(settings.parent).append($(self));

                // Run on init

                if (settings.value == null) {
                    var chordValue = $(settings.chordBuilder).chordBuilder('getChord', self);
                    if (settings.selectOnCreate) {
                        unselectAllMarkers();
                        selectMarker(self);
                    }
                    setValue(self, chordValue.value);
                }
                else {
                    setValue(self, settings.value);
                    settings.value = null;
                }
            });
        }

        if (typeof command == 'string') {
            switch (command.toLowerCase()) {
                case 'update':
                    return $(this).each(function() {
                        updateChord(this);
                    });
                case 'chordvalue':
                    return $(this).each(function() {
                        setValue(this, option);
                    });
                case 'select':
                    return $(this).each(function() {
                        selectMarker(this);
                    });
                case 'unselect':
                    return $(this).each(function() {
                        unselectMarker(this);
                    });
                case 'unselectall':
                    unselectAllMarkers();
                    return this;
                case 'modulate':
                    if (typeof option != 'number') return this;
                    return $(this).each(function() {
                        modulate(this, option);
                    });
                case 'option':
                    if (typeof option != 'string') return null;
                    if (value != undefined) {
                        return $(this).each(function() {
                            setOption(this, option, value);
                        });
                    }
                    return getOption(this, option);
                case 'getmodulationamount':
                    return getModulationAmount(this);
                case 'updateposition':
                    return $(this).each(function() {
                        updatePosition(this);
                    });
            }
        }

    }

})(jQuery)
