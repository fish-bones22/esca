(function($) {

    var defaults = {
        'dragSnap': 0,
        'leftOffset': 0,
        'keySelector': '#key',
        'mainKey': 'C',
        'mainScale': 'Major',
        'parent': undefined,
        'selectOnCreate': true,
        'remainSelected': false,
        'keyReference': 0,
        'value': null,
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
        var disp = ChordProcessor.processChord($(obj).attr('data-value'), getOption(obj, 'mainRoot'),  getOption(obj, 'mainScale'), getOption(obj, 'referenceKey'));
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
     * Toggle this chord marker as selected
     * @param {object} obj
     * @param {object} marker Target chord marker
     */
    function selectMarker(obj) {
        let chordBuilder = getOption(obj, 'chordBuilder');
        if ($(obj).hasClass('selected')) {
            unselectMarker(obj, chordBuilder);
            $(chordBuilder).chordBuilder('setTarget', null);
        } else {
            unselectAllMarkers();
            $(obj).addClass('selected');
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
        $(chordBuilder).chordBuilder('setTarget', null);
        setOption(obj, 'remainSelected', false);
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
                // Set up draggable
                $(self).draggable({
                    axis: 'x',
                    addClasses: false,
                    containment: 'parent',
                    grid:[settings.dragSnap, 0],
                    create: function(ev, ui) {
                        $(self).removeAttr('style')
                        .css('left', settings.leftOffset)
                        .attr('data-position', Math.round(settings.leftOffset/settings.dragSnap));
                    },
                    stop: function(ev, ui) {
                        let diff = Math.round($(self).position().left);
                        let remainder = diff % settings.dragSnap;
                        let newPos = diff - remainder;
                        $(self).removeAttr('style')
                        .css('left', newPos)
                        .attr('data-position', newPos / settings.dragSnap);
                        $(self).trigger('chordMarker:dragstop', [$(self)]);
                    }
                });

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
                // Key selector changed
                $(settings.keySelector).on('change', function() {
                    settings.mainRoot = $(this).val();
                    settings.mainScale = $(this).find('option:selected').attr('data-scale');
                    updateChord(self);
                });

                // Custom events
                $(self).on('chordMarker:dragstop', settings.onDragStop);

                // Append marker to parent
                $(settings.parent).append($(self));

                // Run on init

                // Set main key
                settings.mainRoot = $(settings.keySelector).val();
                settings.mainScale = $(settings.keySelector).find('option:selected').attr('data-scale');

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
            }
        }

    }

})(jQuery)
