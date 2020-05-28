(function($) {

    var defaults = {
        'dataSource': undefined,
        'contextMenu': '',
        'spacerContextMenu': ''
    }

    /**
     * Get option value
     * @param {Object} object 
     * @param {String} key 
     */
    function getOption(object, key) {
        var options = $(object).data('songLine-options');
    
        if (options == undefined || !options.hasOwnProperty(key)) return null;
    
        return options[key];
    }

    /**
     * Add spacer next to this character
     * @param {object} obj 
     * @param {number} width Width of the spacer
     */
    function addSpacer(obj, target, width) {

        var i = width;
        var arr = []
        while(--i) arr[i] = '&nbsp;';
        
        var sibPrevCount = $(target).prevAll('.character').length + 1;
        var spacer = $('<span>').addClass('spacer')
        .attr('data-width', width)
        .attr('data-position', sibPrevCount)
        .html(arr.join('') + '-' + arr.join(''));
        spacer.on('contextmenu', function(ev) {
            ev.preventDefault();
            $(getOption(obj, 'spacerContextMenu')).contextMenu('show', this);
        });
        $(target).after(spacer);
    }

    /**
     * Remove temporary spacers
     */
    function cleanLine() {
        $('.lyrics .temp-spacer').remove();
    }

    $.fn.songLine = function(command, option, value) {


        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('songLine-options', settings);

                // Get data
                if ($(settings.dataSource).hasClass('changed')) {
                    var data = $(settings.dataSource).val();
                    
                    var charArr = data.split('');

                    var formattedData = '';

                    charArr.forEach(char => {
                        formattedData += '<span class="character">' + char + '</span>';
                    });
                    $(self).html(formattedData);

                    // Set event listener
                    $(self).find('.character').on('mouseover', function() {
                        $(this).css('border-right', '2.5px solid lightgray');
                    }).on('mouseleave', function() {
                        $(this).css('border-right', 'none');
                    }).on('contextmenu', function(ev) {
                        ev.preventDefault();
                        $(this).css('border-right', 'none');
                        $(settings.contextMenu).contextMenu('show', this);
                    });

                    $(settings.dataSource).removeClass('changed');
                }

            });
    
        }

        if (typeof command == 'string') {
            switch(command.toLowerCase()) {
                case 'addspacer':
                    return $(this).each(function() {
                            addSpacer(this, option, value);
                        });
                case 'clean':
                    return $(this).each(function() {
                            cleanLine();
                        });
            }
        }
    }

})(jQuery)