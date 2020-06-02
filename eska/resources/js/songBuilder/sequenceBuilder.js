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
     *
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
                $(obj).dynamicPanel('insert');
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

    function setValue(obj, sequence) {

        if (sequence == undefined || !sequence.hasOwnProperty('name')) return;

        var idInput = getOption(obj, 'sequenceIdInput');
        var nameInput = getOption(obj, 'sequenceNameInput');
        var descInput = getOption(obj, 'sequenceDescriptionInput');
        var defCheck = getOption(obj, 'sequenceMakeDefaultCheckbox');

        $(idInput).val(sequence.id);
        $(nameInput).val(sequence.name);
        $(descInput).text(sequence.description);
        $(defCheck).prop('checked', sequence.default);
        setSequenceSelect(obj);
        fillSequenceSongParts(obj, sequence.songParts);
    }

    function fillSequenceSongParts(obj, songParts) {
        // Remove existing panels first
        $(obj).dynamicPanel('removeAll');

        songParts.forEach(songPart => {
            var panel = $(obj).dynamicPanel('insert');
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
        });
    }

    function setOtherSequenceSelection(obj, values) {
        var otherSequenceSelection = getOption(obj, 'otherSequenceSelection');
        values.forEach(value => {
            $(otherSequenceSelection).append($('<option>').val(value.id).html(value.name));
        });
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

                setSequenceSelect(self);
            });
        }

        if (typeof command == 'string') {

            switch (command.toLowerCase()) {

                case 'setsequenceselect':
                    return $(this).each(function() {
                        setSequenceSelect(this, option)
                    });
                case 'setvalue':
                    if (typeof option != 'object') return this;
                    return $(this).each(function() {
                        setValue(this, option)
                    });

                case 'setothersequencesselection':
                    if (typeof option != 'object') return this;
                    return $(this).each(function() {
                        setOtherSequenceSelection(this, option);
                    })
            }
        }
    }

})(jQuery)
