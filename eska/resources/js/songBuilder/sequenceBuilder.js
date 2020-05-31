import { v4 as uuidv4 } from 'uuid';
(function($) {

    var defaults = {
        'noNameSubstitute': false,
        'defaultSelect': []
    };

    /**
     * Get option value
     * @param {Object} object 
     * @param {String} key 
     */
    function getOption(object, key) {
        var options = $(object).data('sequenceBuilder-options');

        if (!options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * 
     * @param {object} obj 
     * @param {Array} select array to get select data from
     */
    function setSequenceSelect(obj, select) {

        var select;
        var _select = select == undefined ? getOption(obj, 'defaultSelect') : option;
        // If select is a function, call it
        if (typeof _select == 'function') {
            select = _select();
        } else {
            select = _select;
        }

        // Remove panels first
        var panelCount = $(obj).dynamicPanel('option', 'panelCount');
        for (var i = 0; i < panelCount; i++) {
            $(obj).dynamicPanel('remove');
        }

        // Construct select
        var noName = getOption(obj, 'noNameSubstitute');
        $('.sequence-item-template select').empty();
        select.forEach(elem => {
            var name = elem.name;
            if (typeof noName == 'object' && name == noName.find) {
                name = noName.replace;
            }
            $('.sequence-item-template select').append($('<option>').html(name).val(elem.id));
        });
        // Insert template back to sequence
        for (var i = 0; i < select.length; i++) {
            $(obj).dynamicPanel('insert').find('select').find('option[value="' + select[i].id + '"]').attr('selected', '');
        }
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

                setSequenceSelect(self);
            });
        }

        if (typeof command == 'string') {

            switch (command.toLowerCase()) {

                case 'setsequenceselect':
                    return $(this).each(function() {
                        setSequenceSelect(this, option)
                    });
            }
        }
    }

})(jQuery)