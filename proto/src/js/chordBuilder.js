var chordsReference = {
    'measures': [
        { 'name': 'whole', 'displayName': '|', 'default': true },
        { 'name': 'half', 'displayName': '\'' },
        { 'name': 'quarter', 'displayName': '-' },
        { 'name': 'eightth', 'displayName': '·' },
    ],
    'notes': [
        { 'name':'C', 'displayName': 'C' },  
        { 'name': 'C#', 'displayName': 'C♯', 'altName': 'D♭' }, 
        { 'name': 'D', 'displayName': 'D' }, 
        { 'name': 'D#', 'displayName': 'D♯', 'altName': 'E♭' }, 
        { 'name': 'E', 'displayName': 'E' },
        { 'name': 'F', 'displayName': 'F' },
        { 'name': 'F#', 'displayName': 'F♯', 'altName': 'G♭' },
        { 'name': 'G', 'displayName': 'G' },
        { 'name': 'G#', 'displayName': 'G♯', 'altName': 'A♭' },
        { 'name': 'A', 'displayName': 'A' },
        { 'name': 'A#', 'displayName': 'A♯', 'altName': 'B♭' },
        { 'name': 'B', 'displayName': 'B' }
    ],
    'scale': [{
        'name': 'Major',
        'pattern': [
            { 'name': '1','noteIndex': 0 },    // C
            { 'name': '2','noteIndex': 2 },    // D
            { 'name': '3','noteIndex': 4 },    // E
            { 'name': '4','noteIndex': 5 },    // F
            { 'name': '5','noteIndex': 7 },   // G
            { 'name': '6','noteIndex': 9 },   // A
            { 'name': '7','noteIndex': 11 },   // B
            { 'name': '1s','noteIndex': 1 },   // C#
            { 'name': '2s','noteIndex': 3 },   // D#
            { 'name': '4s','noteIndex': 6 },   // F#
            { 'name': '5s','noteIndex': 8 },  // G#
            { 'name': '6s','noteIndex': 10 },  // A#
            // { 'name': '2f','noteIndex': 1, 'useAltName': true },  // Db
            // { 'name': '3f','noteIndex': 3, 'useAltName': true },   // Eb
            // { 'name': '5f','noteIndex': 6, 'useAltName': true  },   // Gb
            // { 'name': '6f','noteIndex': 8, 'useAltName': true  },  // Ab
            // { 'name': '7f','noteIndex': 10 , 'useAltName': true }  // Bb
        ],
        'family': [
            { 'name': '1', 'variationIndex': 0 },
            { 'name': '2', 'variationIndex': 1 },
            { 'name': '3', 'variationIndex': 1 },
            { 'name': '4', 'variationIndex': 0 },
            { 'name': '5', 'variationIndex': 0 },
            { 'name': '6', 'variationIndex': 1 },
            { 'name': '7', 'variationIndex': 2 },
        ]
    }],
    'variations': [
        { 'name': 'M', 'display': 'M', 'html': '', 'fullName': 'Major', 'precedence': 0, 'order': 0, 'default': true },
        { 'name': 'm', 'display': 'm', 'html': 'm', 'fullName': 'Minor', 'precedence': 0, 'order': 0 },
        { 'name': 'dim', 'display': 'dim', 'html': '<sup>dim</sup>', 'fullName': 'Diminished', 'precedence': 0, 'order': 1 },
        { 'name': 'aug', 'display': 'aug', 'html': '<sup>aug</sup>', 'fullName': 'Augmented', 'precedence': 0,'order': 1 },
        { 'name': 'dom7', 'display':'7', 'html': '<sup>7</sup>', 'fullName': 'Dominant seventh', 'precedence': 1, 'order': 2 },
        { 'name': 'maj7', 'display':'M7', 'html': '<sup>M7</sup>', 'fullName': 'Major seventh', 'precedence': 1,'order': 2 },
        { 'name': '5', 'display':'5', 'html': '<sup>5</sup>', 'fullName': 'Fifth/Power chord', 'precedence': 1,},
        { 'name': 'flat5', 'display':'♭5', 'html': '<sup>♭5</sup>', 'fullName': 'Flat fifth', 'precedence': 1,},
        { 'name': '6', 'display':'6', 'html': '<sup>6</sup>', 'fullName': 'Sixth', 'precedence': 1 },
        { 'name': '9', 'display':'9', 'html': '<sup>9</sup>', 'fullName': 'Ninth', 'precedence': 1, },
        { 'name': 'maj9', 'display':'M9', 'html': '<sup>M9</sup>', 'fullName': 'Major ninth', 'precedence': 1, },
        { 'name': '11', 'display':'11', 'html': '<sup>11</sup>', 'fullName': 'Eleventh', 'precedence': 1, },
        { 'name': '13', 'display':'13', 'html': '<sup>13</sup>', 'fullName': 'Thirteenth', 'precedence': 1, },
        { 'name': 'sus2', 'display':'sus2', 'html': '<sup>sus2</sup>', 'fullName': 'Suspended second', 'precedence': 2, },
        { 'name': 'sus4', 'display':'sus4', 'html': '<sup>sus4</sup>', 'fullName': 'Suspended fourth', 'precedence': 2, },
        { 'name': 'add6', 'display':'add6', 'html': '<sup>add6</sup>', 'fullName': 'Add sixth', 'precedence': 2, },
        { 'name': 'add9', 'display':'add9', 'html': '<sup>add9</sup>', 'fullName': 'Add ninth', 'precedence': 2, },
    ]
};

(function($) {

    var defaults = {
        'setTargetValue': function(ev, target) {
            if (target != undefined) {
                $(target).attr('data-value', chordValue);
                $(target).html(chordDisplay);
            }
        },
        'mainRoot': 'G',
        'mainScale': 'Major',
        'keySelector': '.key'
    }
    var chordDisplay = '';
    var chordValue = '';

    function getOption(obj, option) {
        var options = $(obj).data('chordBuilder-options');

        if (!options.hasOwnProperty(option)) return null;

        return options[option];
    }

    function initializePanel(obj) {
        // Add measures
        var section = $(obj).find('.section.measures');
        section.empty();
        for (var i = 0; i < chordsReference.measures.length; i++) {
            var item = $('<span>').addClass('item measure')
            .attr('data-value', chordsReference.measures[i].name)
            .attr('data-display', chordsReference.measures[i].displayName)
            .html(chordsReference.measures[i].displayName);
            if (chordsReference.measures[i].hasOwnProperty('default') && chordsReference.measures[i].default) {
                item.addClass('selected');
            }
            section.append(item);
        }
        // Add root and bass
        section = $(obj).find('.section.chord-roots');
        var section2 = $(obj).find('.section.chord-bass');
        section.empty();
        section2.empty();
        // Get root key and scale
        let root = getOption(obj, 'mainRoot');
        let scale = getOption(obj, 'mainScale');
        let scaleReference = chordsReference.scale.find(o => o.name == scale);
        // Get position of root note
        let rootNoteIndex = chordsReference.notes.indexOf(chordsReference.notes.find(note => note.name == root));
        for (var i = 0; i < scaleReference.pattern.length; i++) {
            // Get notes based root
            let noteIndex = (scaleReference.pattern[i].noteIndex + rootNoteIndex) % chordsReference.notes.length
            let noteRef = chordsReference.notes[noteIndex];
            // Create item for root selection
            var item = $('<span>').addClass('item root')
            .attr('data-value', scaleReference.pattern[i].name)
            .attr('data-display', noteRef.displayName)
            .html(noteRef.displayName);
            // Create item for bass selection
            var item2 = $('<span>').addClass('item bass')
            .attr('data-value', scaleReference.pattern[i].name)
            .attr('data-display', '<sub>/' + noteRef.displayName + '</sub>')
            .html(noteRef.displayName);
            // Get default variation for root selection
            var family = scaleReference.family.find(o => o.name == scaleReference.pattern[i].name);
            if (family != undefined) {
                item.attr('data-default-variation', chordsReference.variations[family.variationIndex].name);
            }
            section.append(item);
            section2.append(item2);
            
        }
        $('.key-view-root').html(root);
        $('.key-view-scale').html(scale);

        // Setup variations
        section = $(obj).find('.section.chord-variations');
        section2 = $(obj).find('.section.chord-others');
        section.empty();
        section2.empty();

        for (var i = 0; i < chordsReference.variations.length; i++) {
            var item;
            if (chordsReference.variations[i].precedence == 0) 
            {
                item = $('<span>').addClass('item chord-variation');
            } else {
                item = $('<span>').addClass('item chord-other');
            }

            item.attr('data-value', chordsReference.variations[i].name)
            .attr('data-display', chordsReference.variations[i].html)
            .html(chordsReference.variations[i].display);

            if (chordsReference.variations[i].hasOwnProperty('default') && chordsReference.variations[i].default) {
                item.addClass('selected');
            }

            if (chordsReference.variations[i].precedence == 0) {
                section.append(item);
            } else {
                section2.append(item);
            }
        }

    }
    /**
     * Construct chords from selection
     * @param {object} obj 
     */
    function buildChord(obj) {
        
        // Get first three essential selections
        var measureVal = $(obj).find('.measure.selected').attr('data-value');
        var rootVal = $(obj).find('.root.selected').attr('data-value');
        var variationVal = $(obj).find('.chord-variation.selected').attr('data-value');
        // Check if selections valid, else display previous chord selected
        var view = $(obj).find('.selected-chord');
        if (measureVal == undefined || rootVal == undefined || variationVal == undefined) {
            view.attr('data-value', chordValue);
            view.html(chordDisplay);
            return;
        }
        // Get other selections
        var otherVarVal = $(obj).find('.selected.chord-other').attr('data-value');
        var bassVal = $(obj).find('.selected.bass').attr('data-value');
        // Get display values
        var measure = $(obj).find('.measure.selected').attr('data-display');
        var root = $(obj).find('.root.selected').attr('data-display');
        var variation = $(obj).find('.selected.chord-variation').attr('data-display');
        var otherVar = $(obj).find('.selected.chord-other').attr('data-display');
        var bass = $(obj).find('.selected.bass').attr('data-display');
        // Build string 
        chordValue =  [measureVal, rootVal, variationVal, otherVarVal, bassVal ].join('/');
        chordDisplay = [measure, root, variation, otherVar, bass ].join('');
        // Set value to displayer
        view.attr('data-value', chordValue);
        view.html(chordDisplay);
    }
    /**
     * Show chord builder panel and target
     * @param {object} obj 
     * @param {object} target Chord marker target to set
     */
    function showPanel(obj, target) {
        setTarget(obj, target);
        $(obj).show();
    }
    /**
     * Hide chord builder panel
     * @param {object} obj 
     */
    function hidePanel(obj) {
        setTarget(obj, null);
        $(obj).hide();
    }
    /**
     * Set target
     * @param {object} obj 
     */
    function setTarget(obj, target) {
        $(obj).data('target', target);
    }

    function onItemClick(event) {
        if ($(event.target).hasClass('selected')) {
            $(event.target).removeClass('selected');
        } else {
            $(event.target).parent().find('.selected').removeClass('selected');
            $(event.target).addClass('selected');
            // select default varaiation attached to it
            var defaultVariation = $(event.target).attr('data-default-variation');
            if (defaultVariation != undefined) {
                var varItem = $('.item.chord-variation[data-value="' + defaultVariation + '"]');
                varItem.parent().find('.selected').removeClass('selected');
                varItem.addClass('selected');
            }
        }
        buildChord(event.data.obj);
    }


    $.fn.chordBuilder = function(command, value) {
        if (command == undefined || typeof command == 'object') {
            return $(this).each(function() {
                var self = this;

                var settings = $.extend({}, defaults, command);
                $(self).data('chordBuilder-options', settings);
                initializePanel(self);
                // Toggle item selected state
                $(document).on('click', '.chord-builder .section .item', { 'obj': self }, onItemClick);
                // Execute preliminary chord
                buildChord(self);
                // Close button
                $(self).find('.close').on('click', function() {
                    hidePanel(self);
                });
                // done button
                $(self).find('.select-chord').on('click', function() {
                    $(self).trigger('chordBuilder:setTargetValue', [$(self).data('target')]);
                });
                // Double click
                $(self).find('.item').on('dblclick', function() {
                    $(this).parent().find('.selected').removeClass('selected');
                    $(this).addClass('selected');
                    $(self).trigger('chordBuilder:setTargetValue', [$(self).data('target')]);
                });
                // Activate draggable 
                $(self).draggable({
                    'cursor': 'grabbing'
                });
                // Key selector changed
                $(settings.keySelector).on('change', function() {
                    settings.mainRoot = $(this).val();
                    settings.mainScale = $(this).find('option:selected').attr('data-scale')
                    initializePanel(self);
                });
                // Custom events
                $(self).on('chordBuilder:setTargetValue', settings.setTargetValue);
            });
        }

        if (typeof command == 'string') {

            switch (command.toLowerCase()) {
                case 'show':
                    return $(this).each(function() {
                        showPanel(this, value);
                    });
                case 'hide':
                    return $(this).each(function() {
                        hidePanel(this);
                    });
                case 'getchord':
                    $(this).each(function() {
                        if ($(this).is(':hidden')) {
                            showPanel(this, value);
                        } else {
                            setTarget(this, value);
                        }
                    });
                    return {
                        'value': chordValue,
                        'display': chordDisplay
                    };
                case 'settarget': 
                    return $(this).each(function() {
                        setTarget(this, value);
                    });    
            }
        }
    }
})(jQuery)