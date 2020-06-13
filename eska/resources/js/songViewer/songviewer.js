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
require('./options');

var songMainKey = '.songkey';
var songMainScale = '.songscale';
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
var songControl = '.songs-control';
var nextSongControl = '.next-song-container';
var previousSongControl = '.prev-song-container';
var allSongsPanel = '.songlist-expanded';
var allSongsButton = '.songs-control-options button';
var allSongsList = '.songlist-body';
var sequenceListPanel = '.sequence-list';
var sequenceList = '.sequence-list-body';
var sequenceListToggler = '.sequence-list-options';
var currentSequenceDisplay = '.current-sequence-display';
var sequencesQuickControl = '.quick-control';
var nextSequenceControl = '.quick-control .next';
var prevSequenceControl = '.quick-control .prev';
var sequenceControl = '.sequence-controls';
var totalSequences = '.total-sequences';
var currentSequenceOrder = '.current-sequence-order';
var loadingScreen = '.loading-panel';
var optionsToggler = '.options-toggler';
var optionsPanel = '.options-panel';

var simpleFontSize = '16px';
var monospaceFontSize = '26px';
var monospaceFontFamily = '"Consolas", "Courier New", Courier, monospace';
var monospaceWidth = 0;
var monospaceHeight = 0;
var displayFontSize = '36px';
var displayFontFamily = '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif';
var displayAlignment = 'center';
var displayColor = 'red';

$(function() {

    // Loading screen
    $(loadingScreen).loadingScreen();

    $(songsContainer).songsContainer({
        'keySelector': songMainKey,
        'scaleSelector': songMainScale,
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
        'displayFontSize': displayFontSize,
        'displayFontFamily': displayFontFamily,
        'displayAlignment': displayAlignment,
        'displayColor': displayColor,
        'simpleFontSize': simpleFontSize,
        'mode': 'performance',
        'nextSongControl': nextSongControl,
        'previousSongControl': previousSongControl,
        'songControl': songControl,
        'allSongsPanel': allSongsPanel,
        'allSongsButton': allSongsButton,
        'allSongsList': allSongsList,
        'sequenceControl': sequenceControl,
        'sequenceListPanel': sequenceListPanel,
        'sequenceList': sequenceList,
        'sequenceListToggler': sequenceListToggler,
        'sequencesQuickControl': sequencesQuickControl,
        'currentSequenceDisplay': currentSequenceDisplay,
        'totalSequences': totalSequences,
        'currentSequenceOrder': currentSequenceOrder,
        'nextSequenceControl': nextSequenceControl,
        'prevSequenceControl': prevSequenceControl,
        'optionsPanel': optionsPanel,
        'optionsToggler': optionsToggler,
        'loadingScreen': loadingScreen
    });

    getSongs(['0e987bb3-5e32-41c7-b0a8-4e5b4866420b', '611c3248-7326-448b-b66c-5199f9009dc8']);
})

function getSongs(songIds) {
    $(loadingScreen).loadingScreen('show');
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
    }).then(function() {
        $(loadingScreen).loadingScreen('hide');
    })
}
