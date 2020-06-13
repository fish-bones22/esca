(function($) {

    var defaults = {
        'dataSource': undefined,
        'editable': true,
        'contextMenu': '',
        'spacerContextMenu': '',
        'value': '',
        'fontSize': '',
        'fontFamily': '',
        'cursorWidth': 10,
        'offset': 4,
    }

    /**
     * Get option value
     * @param {Object} object
     * @param {String} key
     */
    function getOption(object, key) {
        var options = $(object).data('lyricsLine-options');

        if (options == undefined || !options.hasOwnProperty(key)) return null;

        return options[key];
    }

    /**
     * Set option value
     * @param {Object} obj
     * @param {String} option
     * @param {any} value
     */
    function setOption(obj, option, value) {
        var options = $(obj).data('lyricsLine-options');
        options[option] = value;
        $(obj).data('lyricsLine-options', options);
    }

    /**
     * Add spacer next to this character
     * @param {object} obj
     * @param {number} width Width of the spacer
     */
    function addSpacer(obj, target, width) {

        if (width == undefined || width == '') width = 1;
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
    function processLine(obj, value = '') {

        var settings = $(obj).data('lyricsLine-options');

        if (value != '') {
            settings.value = value;
        }

        // Get data
        var preDefSpacers = [];
        // Get predefined spacers
        if (settings.value.indexOf('{spacer-') >= 0) {
            var content = settings.value;
            var spacers = content.match(/\{spacer-[0-9]+\}/g);
            spacers.forEach(spacer => {
                // Get position and width of the spacer
                var position = content.indexOf(spacer);
                var width = spacer.match(/\d+/g)[0];
                preDefSpacers.push({'position': position, 'width': width});
                // Remove the spacer from the content
                content = content.replace(/\{spacer-[0-9]+\}/, '');
            });
            settings.value = content;
        }

        var data = '';
        if (settings.dataSource != undefined && $(settings.dataSource).hasClass('changed')) {
            data = $(settings.dataSource).val()
            $(settings.dataSource).removeClass('changed');
        } else {
            data = settings.value;
        }
        settings.value = '';
        $(obj).data('lyricsLine-options', settings);

        if (data == '') {
            return;
        }

        if (settings.editable || preDefSpacers.length > 0) {

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
        } else {
            $(obj).html(data);
        }


        // Set event listener
        if (settings.editable) {
            $(obj).find('.character').on('mouseover', function() {
                $(this).css('border-right', '2.5px solid lightgray');
            }).on('mouseleave', function() {
                $(this).css('border-right', 'none');
            }).on('contextmenu', function(ev) {
                ev.preventDefault();
                $(this).css('border-right', 'none');
                $(settings.contextMenu).contextMenu('show', this);
            });
        }

    }

    function updateDisplay(obj) {

        var fontFamily = getOption(obj, 'fontFamily');
        var fontSize = getOption(obj, 'fontSize');
        var cursorWidth = getOption(obj, 'cursorWidth');
        var offset = getOption(obj, 'offset');

        if (fontFamily != null) {
            $(obj).css('font-family', fontFamily);
        }
        if (fontSize != null) {
            $(obj).css('font-size', fontSize);
        }

        if (cursorWidth != NaN && offset != NaN) {
            $(obj).css('margin-left', cursorWidth * offset);
        }
    }

    $.fn.lyricsLine = function(command, option, value) {


        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('lyricsLine-options', settings);

                processLine(self);
                updateDisplay(self);
            });

        }

        if (typeof command == 'string') {
            switch(command.toLowerCase()) {
                case 'option':
                    if (typeof option != 'string') return this;
                    if (value != undefined) {
                        return $(this).each(function() {
                            setOption(this, option, value);
                        });
                    }
                    return getOption(this, option);
                case 'addspacer':
                    return $(this).each(function() {
                            addSpacer(this, option, value);
                        });
                case 'clean':
                    return $(this).each(function() {
                            cleanLine();
                        });
                case 'setvalue':
                    return $(this).each(function() {
                        processLine(this, option);
                    });
                case 'getvalue':
                    return getValue(this);
                case 'processline':
                    return $(this).each(function() {
                        processLine(this);
                    });
                case 'updatedisplay':
                    return $(this).each(function() {
                        updateDisplay(this);
                    });
            }
        }
    }

})(jQuery)
