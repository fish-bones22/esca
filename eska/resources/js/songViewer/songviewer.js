window.musicReference = require('../utilities/_musicReference.json');

require('../common/dynamicPanel');
require('./songsContainer');
require('./songItem');
require('./songPart');
require('./songLine');
require('../utilities/chordProcessor');
require('../utilities/lyricsLine');
require('../utilities/chordsLine');
require('../utilities/chordMarker');

import { v4 as uuidv4 } from 'uuid';

var songMainKey = '.songkey';
var songsContainer = '.songs-container';
var songItemTemplate = '.song-item-template';
var songTitlePanel = '.song-name';
var songArtistPanel = '.song-artist';
var songPartsContainer = '.songparts-container';
var songLinesContainer = '.songlines-container';
var songPartTemplate = '.songpart-template';
var songLineTemplate = '.songline-template';
var songPartName = '.songpart-name';
var songPartModulationInfo = '.songpart-modulation-info';
var songLineModulationInfo = '.songline-modulation-info';
var chordsLine = '.chords';
var lyricsContentLine = '.lyrics-content'
var lyricsDisplayLine = '.lyrics-display';
var nextSongControl = '.next-song-container';
var previousSongControl = '.prev-song-container';

var monospaceFontSize = '26px';
var monospaceFontFamily = '"Consolas", "Courier New", Courier, monospace';
var monospaceWidth = 0;
var monospaceHeight = 0;

$(function() {
    getPageDimensions();
    $(songsContainer).songsContainer({
        'keySelector': songMainKey,
        'key': 'C',
        'scale': 'major',
        'songItemTemplate': songItemTemplate,
        'songPartTemplate': songPartTemplate,
        'songLineTemplate': songLineTemplate,
        'songTitlePanel': songTitlePanel,
        'songArtistPanel': songArtistPanel,
        'songPartsContainer': songPartsContainer,
        'songPartName': songPartName,
        'songPartModulationInfo': songPartModulationInfo,
        'songLinesContainer': songLinesContainer,
        'songLineModulationInfo': songLineModulationInfo,
        'chordsLine': chordsLine,
        'lyricsContentLine': lyricsContentLine,
        'lyricsDisplayLine': lyricsDisplayLine,
        'lineHeight': monospaceHeight,
        'cursorWidth': monospaceWidth,
        'fontSize': monospaceFontSize,
        'fontFamily': monospaceFontFamily,
        'mode': 'performance',
        'nextSongControl': nextSongControl,
        'previousSongControl': previousSongControl,
    });

    getSongs(['0e987bb3-5e32-41c7-b0a8-4e5b4866420b', '611c3248-7326-448b-b66c-5199f9009dc8']);
})

function getSongs(songIds) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        'url': '/songs',
        'method': 'post',
        'contentType': 'application/json',
        'dataType': 'json',
        'data': JSON.stringify({'songIds': songIds})
    }).done(function(response) {
        console.log(response);
        if ('error' in response) {
            return;
        }
        $(songsContainer).songsContainer('setValues', response);
    }).fail(function(response) {
        console.error(response);
    }).always(function() {

    })
}

function getPageDimensions() {
    // Get width of a single monospace
    var unique = uuidv4();
    var spanTest = $('<span>')
    .addClass(unique)
    .css('font-family', monospaceFontFamily)
    .css('font-size', monospaceFontSize)
    .css('position', 'absolute')
    .html('&nbsp;');
    $('body').append(spanTest);
    monospaceWidth = spanTest.width();
    monospaceHeight = spanTest.height();
    $('.' + unique).remove();
}
