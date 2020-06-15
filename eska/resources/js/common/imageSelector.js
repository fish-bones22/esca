(function($) {


    var defaults = {
        'selection': []
    };

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('imageSelector-options');

        if (options == undefined || !options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Set option value
     * @param {Object} object
     * @param {String} key
     * @param {String} value
     */
    function setOption(object, key, value) {
        var options = $(object).data('imageSelector-options');

        options[key] = value;

        $(object).data('imageSelector-options', options);
    }

    function clickImage(event) {

        var imageItem = $(event.target);
        if (!imageItem.hasClass('image-item')) {
            imageItem = imageItem.closest('.image-item');
        }

        var selection = getOption(event.data.object, 'selection');

        if (!Array.isArray(selection)) selection = [];

        var imagePath = imageItem.attr('data-path');
        if (imagePath == undefined) return;

        if (imageItem.hasClass('selected')) {
            imageItem.removeClass('selected');
            selection.splice(selection.indexOf(imagePath));
        } else {
            imageItem.addClass('selected');
            selection.push(imagePath);
        }

        console.log(selection);
        setOption(event.data.object, 'selection', selection);
    }


    $.fn.imageSelector = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('imageSelector-options', settings);

                $(self).find('.image-item').on('click', { 'object': self }, clickImage);

            });
        }
    }

})(jQuery)
