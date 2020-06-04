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

    /**
     * Get lyrics line value
     */
    function getValue(obj) {
        var lyrics = [];
        $(obj).children('span').each(function() {
            if ($(this).hasClass('character'))
                lyrics.push($(this).text());
            else if ($(this).hasClass('spacer')) {
                lyrics.push('{spacer-' + $(this).attr('data-width') + '}');
            }
        });

        return lyrics.join('');
    }

    /**
     *
     * @param {object} obj
     */
    function processLine(obj) {

        var settings = $(obj).data('songLine-options');
        // Get data
        if ($(settings.dataSource).hasClass('changed')) {

            var preDefSpacers = [];
            // Get predefined spacers
            if ($(obj).html().indexOf('{spacer-') >= 0) {
                var content = $(obj).html();
                var spacers = content.match(/\{spacer-[0-9]+\}/g);
                spacers.forEach(spacer => {
                    // Get position and width of the spacer
                    var position = content.indexOf(spacer);
                    var width = spacer.match(/\d+/g)[0];
                    preDefSpacers.push({'position': position, 'width': width});
                    // Remove the spacer from the content
                    content = content.replace(/\{spacer-[0-9]+\}/, '');
                });
            }

            var data = $(settings.dataSource).val();

            var charArr = data.split('');

            var formattedData = '';

            charArr.forEach(char => {
                formattedData += '<span class="character">' + char + '</span>';
            });
            $(obj).html(formattedData);

            // Set predefined spacers
            preDefSpacers.reverse().forEach(spacer => {
                addSpacer(obj, $(obj).children('.character')[spacer.position-1], spacer.width);
            });

            // Set event listener
            $(obj).find('.character').on('mouseover', function() {
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

    }

    $.fn.songLine = function(command, option, value) {


        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('songLine-options', settings);

                processLine(self);
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
                case 'getvalue':
                    return getValue(this);
                case 'processline':
                    return $(this).each(function() {
                        processLine(this);
                    })
            }
        }
    }

})(jQuery)
