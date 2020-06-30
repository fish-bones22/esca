(function($) {

    var defaults = {
        'searchBar': '#songSearchBar',
        'resultsTable': '#songSearchResult',
        'isSearching': false,
        'characterTreshold': 3
    }

    /**
     * Get option value
     * @param {object} obj
     * @param {string} option
     */
    function getOption(obj, option) {
        var options = $(obj).data('songSearcher-options');

        if (!options.hasOwnProperty(option)) return null;

        return options[option];
    }

    /**
     * Set option value
     * @param {Object} obj
     * @param {String} option
     * @param {any} value
     */
    function setOption(obj, option, value) {
        var options = $(obj).data('songSearcher-options');
        options[option] = value;
        $(obj).data('songSearcher-options', options);
    }

    function search(obj, searchTerm) {
        console.log(searchTerm);
        setOption(obj, 'isSearching', true);
        $.ajax({
            'url': '/songs?term=' + searchTerm,
            'method': 'get',
            'contentType': 'application/json',
            'dataType': 'json'
        }).done(function(response) {
            console.log(response);
            if ('error' in response) {
                return;
            }
            buildSearchResult(obj, response);
        }).fail(function(response) {
            console.error(response);
        }).always(function() {
            setOption(obj, 'isSearching', false);
        });
    }

    function buildSearchResult(obj, songs) {
        if (songs == null) return;
        if (!Array.isArray(songs)) return;

        var table = $(obj).find(getOption(obj, 'resultsTable'));
        if (table.length <= 0) return;

        table.find('tbody').find('tr:not(.no-results-row)').remove();
        if (songs.length <= 0) {
            table.addClass('noresults');
            return;
        }

        table.removeClass('noresults');

        songs.forEach(function(song) {
            var tdTitle = $('<td>').text(song.title);
            var tdArtist = $('<td>').text(song.details.artist);
            var tdKey = $('<td>').text(song.key + ' ' + song.scale);

            table.find('tbody').append($('<tr>').append(tdTitle).append(tdArtist).append(tdKey));
        });
    }

    $.fn.songSearcher = function(command, option, value) {

        if (command == undefined || typeof command == 'object') {

            return $(this).each(function() {

                var self = this;
                var settings = $.extend({}, defaults, command);
                $(self).data('songSearcher-options', settings);

                $(settings.searchBar).on('keyup', function() {
                    if (getOption(self, 'isSearching')) return false;
                    if ($(this).val().length <= getOption(self, 'characterTreshold')*1) return false;

                    search(self, $(this).val());
                });

            });
        }

    }


})(jQuery)
