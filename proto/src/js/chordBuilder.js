(function($) {

    var defaults = {
        'setTargetValue': function(ev, target, value) {
            if (target != undefined) {
                $(target).attr('data-value', value);
            }
        },
        'mainRoot': 'G',
        'mainScale': 'Major',
        'keySelector': '.key',
        'changeTargetOnChordChange':false
    }
    var chordDisplay = '';
    var chordValue = '';
    var changeValueOfTarget = false;

    var chordsReference = window.musicReference || {};

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
    function setTarget(obj, target, setImmediately = false) {
        $(obj).data('target', target);
        changeValueOfTarget = setImmediately != undefined && setImmediately;
    }

    function onItemClick(event) {
        // Toggle select
        if ($(event.target).hasClass('selected') && $(event.target).closest('.section').attr('data-required') == undefined) {
            $(event.target).removeClass('selected');
        } else {
            $(event.target).parent().find('.selected').removeClass('selected');
            $(event.target).addClass('selected');
            // select default variation attached to it
            var defaultVariation = $(event.target).attr('data-default-variation');
            if (defaultVariation != undefined) {
                var varItem = $('.item.chord-variation[data-value="' + defaultVariation + '"]');
                varItem.parent().find('.selected').removeClass('selected');
                varItem.addClass('selected');
            }
        }
        buildChord(event.data.obj);
        if (changeValueOfTarget || getOption(event.data.obj, 'changeTargetOnChordChange')) {
            $(event.data.obj).trigger('chordBuilder:setTargetValue', [$(event.data.obj).data('target'), chordValue]);
            changeValueOfTarget = false;
        }
    }


    $.fn.chordBuilder = function(command, option, value) {
        if (command == undefined || typeof command == 'object') {
            return $(this).each(function() {
                var self = this;

                var settings = $.extend({}, defaults, command);
                $(self).data('chordBuilder-options', settings);
                initializePanel(self);
                // Execute preliminary chord
                buildChord(self);
                // Close button
                $(self).find('.close').on('click', function() {
                    hidePanel(self);
                });
                // done button
                $(self).find('.select-chord').on('click', function() {
                    $(self).trigger('chordBuilder:setTargetValue', [$(self).data('target'), chordValue]);
                });
                // Double click
                $(document).on('dblclick', '.chord-builder .section .item', function(ev) {
                    $(ev.target).parent().find('.selected').removeClass('selected');
                    $(ev.target).addClass('selected');
                    $(self).trigger('chordBuilder:setTargetValue', [$(self).data('target'), chordValue]);
                });
                // Toggle item selected state
                $(document).on('click', '.chord-builder .section .item', { 'obj': self }, onItemClick);
                // Activate draggable 
                $(self).draggable({
                    'cursor': 'grabbing',
                    'cancel': 'button,.item'
                });
                // Key selector changed
                $(settings.keySelector).on('change', function() {
                    settings.mainRoot = $(this).val();
                    settings.mainScale = $(this).find('option:selected').attr('data-scale')
                    initializePanel(self);
                }).change();
                // Custom events
                $(self).on('chordBuilder:setTargetValue', settings.setTargetValue);
            });
        }

        if (typeof command == 'string') {

            switch (command.toLowerCase()) {
                case 'show':
                    return $(this).each(function() {
                        showPanel(this, option);
                    });
                case 'hide':
                    return $(this).each(function() {
                        hidePanel(this);
                    });
                case 'getchord':
                    $(this).each(function() {
                        if ($(this).is(':hidden')) {
                            showPanel(this, option);
                        } else {
                            setTarget(this, option);
                        }
                    });
                    return {
                        'value': chordValue,
                        'display': chordDisplay
                    };
                case 'settarget': 
                    return $(this).each(function() {
                        setTarget(this, option, value);
                    });    
            }
        }
    }
})(jQuery)