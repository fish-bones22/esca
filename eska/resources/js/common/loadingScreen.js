(function($) {

    var defaults = {

    }

    function showPanel(obj, duration = null) {
        $(obj).show();
        if (duration != null) {
            window.setTimeout(function() {
                hidePanel(obj);
            }, duration);
        }
    }

    function hidePanel(obj) {
        $(obj).hide();
    }

    $.fn.loadingScreen = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('loadingScreen-options', settings);



            });
        }

        if (typeof command == 'string') {

            switch (command.toLocaleLowerCase()) {
                case 'show':
                    return $(this).each(function() {
                        showPanel(this, option);
                    });
                case 'hide':
                    return $(this).each(function() {
                        hidePanel(this);
                    });
            }
        }

    }

})(jQuery)
