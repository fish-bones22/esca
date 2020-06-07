import { v4 as uuidv4 } from 'uuid';
(function($) {

    var defaults = {
        'sequenceIdInput': '',
        'sequenceNameInput': '',
        'sequenceDescriptionInput': '',
        'sequenceMakeDefaultCheckbox': '',
        'otherSequenceSelection': '',
        'noNameSubstitute': false,
        'defaultSelect': [],
        'otherSequenceSelect': {
            'selector':  '',
            'action': function (ev) {}
        },
        'newSequence': {
            'selector': '',
            'action': function (ev) {}
        },
    };

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('sequenceBuilder-options');

        if (options == undefined || !options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Modify all the sequence songpart selections in the sequence panel
     * @param {object} obj
     * @param {Array} select array to get select data from
     */
    function setSequenceSelect(obj, select = undefined) {

        var _select = select == undefined ? getOption(obj, 'defaultSelect') : select;
        // If select is a function, call it
        if (typeof _select == 'function') {
            select = _select();
        } else {
            select = _select;
        }

        if (select == null) return;

        // Remove panels first
        var panelCount = $(obj).dynamicPanel('option', 'panelCount');

        var noName = getOption(obj, 'noNameSubstitute');
        var options = [];
        select.forEach(elem => {
            var name = elem.name;
            if (typeof noName == 'object' && name == noName.find) {
                name = noName.replace;
            }
            var option = $('<option>').html(name).val(elem.id);
            options.push(option);

            if (panelCount <= 0) {
                var panel = $(obj).dynamicPanel('insert');
                panel.find('select option[value="' + elem.id + '"]').prop('selected', true);
            }
        });

        // Set select of protype item
        $('.sequence-item-template').find('select').html(options);

        $(obj).children('.panel-item').each(function() {
            var selectInp = $(this).find('select');
            var selectedVal = selectInp.val();
            selectInp.empty();
            options.forEach(option => { selectInp.append(option.clone()) });
            selectInp.children('option[value="' + selectedVal + '"]').prop('selected', true);
        });
    }

    /**
     *
     * @param {object} obj
     * @param {object} sequence the sequence object
     */
    function setValue(obj, sequence) {

        if (sequence == undefined || !sequence.hasOwnProperty('name')) return;
        // Get selectors
        var idInput = getOption(obj, 'sequenceIdInput');
        var nameInput = getOption(obj, 'sequenceNameInput');
        var descInput = getOption(obj, 'sequenceDescriptionInput');
        var defCheck = getOption(obj, 'sequenceMakeDefaultCheckbox');
        // Set values
        $(idInput).val(sequence.id);
        $(nameInput).val(sequence.name);
        $(descInput).text(sequence.description);
        $(defCheck).prop('checked', sequence.default);
        // Re-init the songpart selections
        setSequenceSelect(obj);
        // Set the value of the songpart selections
        fillSequenceSongParts(obj, sequence.songParts);
    }

    /**
     *
     * @param {object} obj
     * @param {array} songParts Collection of songpart objects
     */
    function fillSequenceSongParts(obj, songParts) {

        if (songParts == undefined || typeof songParts != 'object') return;

        // Remove existing panels first
        $(obj).dynamicPanel('removeAll');

        songParts.forEach(songPart => {
            // Insert panel
            var panel = $(obj).dynamicPanel('insert');
            // Set the panel's song part selection value based on ID, if none, based on name.
            var opt = panel.find('select option[value="' + songPart.songPart + '"]');
            if (opt.length > 0) {
                opt.prop('selected', true);
            } else {
                opt = panel.find('select option[text="' + songPart.name + '"]');
                if (opt.length > 0) opt.prop('selected', true);
            }
            // Set song part repeat
            if (songPart.repeat != undefined && songPart.repeat > 1) {
                panel.find('.repeat-input input[type="number"]').val(songPart.repeat);
            }
            // Set song part modulation
            if (songPart.referenceKey != undefined && songPart.referenceKey != NaN  && songPart.referenceKey != 0) {
                panel.find('.modulation-input input[type="number"]').val(songPart.referenceKey);
            }
        });
    }

    /**
     * Modify other sequence selection for the song
     * @param {object} obj
     * @param {array} otherSequences Collection of sequence object
     */
    function setOtherSequenceSelection(obj, otherSequences) {
        // Get other sequence selection selector
        var otherSequenceSelection = getOption(obj, 'otherSequenceSelection');

        $(otherSequenceSelection).empty();

        if (otherSequences == undefined || otherSequences.length <= 0) {
            $(otherSequenceSelection).append($('<option>').val('').html("No sequences yet"));
            return;
        }
        // Iterate on the collection and fill selection
        otherSequences.forEach(value => {
            $(otherSequenceSelection).append($('<option>').val(value.id).html(value.name));
        });
    }

    /**
     * Remove values of sequence properties and songparts
     * @param {object} obj
     */
    function clearSequence(obj) {
        // Get selectors
        var idInput = getOption(obj, 'sequenceIdInput');
        var nameInput = getOption(obj, 'sequenceNameInput');
        var descInput = getOption(obj, 'sequenceDescriptionInput');
        var defCheck = getOption(obj, 'sequenceMakeDefaultCheckbox');
        // Clear properties
        $(idInput).val('');
        $(nameInput).val('');
        $(descInput).val('');
        $(defCheck).prop('checked', false);
        // Reset panels
        $(obj).dynamicPanel('removeAll');
        setSequenceSelect(obj);
    }

    /**
     * Get the sequence values
     * @param {object} obj
     */
    function getValues(obj) {
        var idInput = getOption(obj, 'sequenceIdInput');
        var nameInput = getOption(obj, 'sequenceNameInput');
        var descInput = getOption(obj, 'sequenceDescriptionInput');
        var defCheck = getOption(obj, 'sequenceMakeDefaultCheckbox');

        var id = $(idInput).val() != '' ? $(idInput).val() : uuidv4();
        var name = $(nameInput).val();
        var description = $(descInput).val();
        var makeDefault = $(defCheck).prop('checked');

        var songParts = [];
        $(obj).children('.panel-item').each(function() {
            var referenceKey = $(this).find('.modulation-input input[type="number"]').val()*1 || 0;
            var songpart = $(this).find('select').val();
            var repeat  = $(this).find('.repeat-input input[type="number"]').val()*1 || 1;
            var order = $(this).attr('data-order');
            songParts.push({
                'order': order,
                'referenceKey': referenceKey,
                'repeat': repeat,
                'songPart': songpart
            });
        });

        return [{
            'id': id,
            'name': name,
            'description': description,
            'default': makeDefault,
            'referenceKey': 0,
            'songParts': songParts
        }];
    }


    function validateInputs(obj) {
        var allValid = true;
        // Show error message if needed
        $(obj).siblings('.sequence-details').find('.input-container').each(function() {
            // If no error text element, do not engage
            var errText = $(this).find('.error-text');
            if (errText.length <= 0) {
                return;
            }
            var value = $(this).find('input, select').val();
            // If value of input or select is not empty, hide error message if shown
            if (value != '') {
                if ($(this).hasClass('has-error')) $(this).removeClass('has-error')
                return;
            }
            // Show error message
            $(this).addClass('has-error')
            allValid = false;
        });

        return allValid;
    }

    $.fn.sequenceBuilder = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);

                $(self).data('sequenceBuilder-options', settings);

                // Set up dynamic panel
                $(self).dynamicPanel({
                    'startCount': 0,
                    'key': 'sequence',
                    'panelTemplate': '.sequence-item-template',
                    'removerSelector': '.delete-sequence',
                    'draggable': {
                        'cancel': ['.option-sequence']
                    },
                    'onInsert': function(ev, panel) {
                        // Set panel ID
                        let id = 'panel' + uuidv4().replace(/[{,},-]*/g, '');
                        panel.attr('id', id);
                        // Set expanded menu listener
                        panel.find('.option-sequence').on('click', function() {
                            $('.sequence-expanded-menu').contextMenu('toggle', this);
                        });
                    }
                });

                $(settings.otherSequenceSelect.selector).on('click', settings.otherSequenceSelect.action);
                $(settings.newSequence.selector).on('click', settings.newSequence.action);

                setSequenceSelect(self);
            });
        }

        if (typeof command == 'string') {

            switch (command.toLowerCase()) {

                case 'setsequenceselect':
                    return $(this).each(function() {
                        setSequenceSelect(this, option)
                    });
                case 'setvalues':
                    if (typeof option != 'object') return this;
                    return $(this).each(function() {
                        setValue(this, option)
                    });

                case 'setothersequencesselection':
                    if (typeof option != 'object') return this;
                    return $(this).each(function() {
                        setOtherSequenceSelection(this, option);
                    });

                case 'clear':
                    return $(this).each(function() {
                        clearSequence(this);
                    });

                case 'getvalues':
                    return getValues(this);

                case 'validate':
                    return validateInputs(this);
            }
        }
    }

})(jQuery)
