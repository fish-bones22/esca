
window.musicReference = require('./_musicReference.json');
window.songData = {};
require('./songPart');
require('./outline');
require('./songDetails');

require('./chordProcessor');
require('./chordBuilder');
require('./chordMarker');
require('./dynamicPanel');
require('./chordsLine');
require('./songLine');
require('./sequenceBuilder');

import { v4 as uuidv4 } from 'uuid';

var chordMarkerContextMenu = '.chord-context-menu';
var chordSelection = '.chord-selection-menu';
var sequenceBox = '#sequenceBox';
var songPartTitleContextMenu = '.song-part-title-expanded-panel';
var songLineContextMenu = '.songline-context-menu';
var songPartContextMenu = '.songpart-context-menu';
var sequenceOptions = '.sequence-expanded-menu';
var characterContextMenu = '.character-context-menu';
var spacerContextMenu = '.spacer-context-menu';
var songDetailsContainer = '.song-details-container';
var songPartsContainer = '#songParts';
var otherSequence = '.select-other-sequence';
var otherSequenceSelection = '#otherSequences';
var otherSequenceDialog = '.select-other-sequence-dialog';
var sequenceIdInput = '#sequenceId';
var sequenceNameInput = '#sequenceName';
var sequenceDescriptionInput = '#sequenceDescription';
var sequenceMakeDefaultCheckbox = '#sequenceDefault';

var monospaceFontSize = '20px';
var monospaceFontFamily = '"Consolas", "Courier New", Courier, monospace';
var monospaceWidth = 0;
var monospaceHeight = 0;

$(function() {

    getPageDimensions();

   // Chord builder
    $(chordSelection).chordBuilder({
        'changeTargetOnChordChange': true,
        'songPartSelector': '.song-part-name',
        'mainRoot': function() {
            return $('#mainkey option:selected').val();
        },
        'mainScale': function() {
            return $('#mainkey option:selected').attr('data-scale');
        },
        'setTargetValue': function(ev, target, value) {
            if (target != undefined) {
                $(target).chordMarker('chordValue', value);
            }
        }
    });

    // DIALOG BOXES
    $(otherSequenceDialog).dialogBox();

    // CONTEXT MENUS

    // Chord marker
    $(chordMarkerContextMenu).contextMenu({
        'menuItems': [
            {
                'name': 'delete',
                'selector': '.delete-chord',
                'action': function(ev, obj, target) {
                    $(target).remove();
                    $(obj).contextMenu('hide');
                }
            },
            {
                'name': 'update',
                'selector': '.change-chord',
                'action': function(ev, obj, target) {
                    $(target).chordMarker('select');
                    $(chordSelection).chordBuilder('show', target);
                    $(chordSelection).chordBuilder('setTarget', target, true);
                    $(obj).contextMenu('hide');
                }
            }
        ]
    });

    // Song part
    $(songPartTitleContextMenu).contextMenu({
        'menuItems': [
            {
                'name': 'done',
                'selector': '.done',
                'action': function(ev, obj, target) {
                    var name = $(obj).find('.song-part-name-select').val();
                    var number = $(obj).find('.song-part-name-number-input input').val();
                    name = number != '' ? name + ' ' + number : name;
                    $(target).attr('data-name', name);
                    $(target).html(name);
                    $(obj).contextMenu('hide');
                    $(chordSelection).chordBuilder('generateCustom');
                 }
            },
            {
                'name': 'clear',
                'selector': '.clear',
                'action': function(ev, obj, target) {
                    $(obj).find('.song-part-name-number-input input').val('');
                 }
            }
        ]
    });

    // Song line
    $(songLineContextMenu).contextMenu({
        'menuItems': [
            {
                'name': 'delete',
                'selector': '.delete-line',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1-1;
                    $(target).closest('.dynamicPanel').dynamicPanel('remove', index);
                    $(obj).contextMenu('hide');
                }
            },
            {
                'name': 'insertBelow',
                'selector': '.insert-line-below',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1;
                    $(target).closest('.dynamicPanel').dynamicPanel('insert', index);
                    $(obj).contextMenu('hide');
                }
            }
        ]
    });

    // Song part
    $(songPartContextMenu).contextMenu({
        'menuItems': [
            {
                'name': 'delete',
                'selector': '.delete-songpart',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1-1;
                    $(target).closest('.dynamicPanel').dynamicPanel('remove', index);
                    $(obj).contextMenu('hide');
                }
            },
            {
                'name': 'insertBelow',
                'selector': '.insert-songpart-below',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1;
                    $(target).closest('.dynamicPanel').dynamicPanel('insert', index);
                    $(obj).contextMenu('hide');
                }
            }
        ]
    });

    // Sequence builder
    $(sequenceOptions).contextMenu({
        'menuItems': [
            {
                'name': 'delete',
                'selector': '.delete-sequence',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1-1;
                    $(target).closest('.dynamicPanel').dynamicPanel('remove', index);
                    $(obj).contextMenu('hide');
                }
            },
            {
                'name': 'insertBelow',
                'selector': '.insert-sequence',
                'action': function(ev, obj, target) {
                    var index = $(target).closest('.panel-item').attr('data-order')*1;
                    $(target).closest('.dynamicPanel').dynamicPanel('insert', index);
                    $(obj).contextMenu('hide');
                }
            }
        ]
    });

    // Insert-spacer menu for characters
    $(characterContextMenu).contextMenu({
        'menuItems': [
            {
                'name': 'insert',
                'selector': '.insert',
                'action': function(ev, menu, target) {
                    var input = $(menu).find('.spacer-width input[type="number"]');
                    var width = input.val();
                    input.val(input.attr('data-default'));
                    $(target).parent().songLine('addSpacer', target, width);
                    $(target).parent().songLine('clean');
                    $(menu).contextMenu('hide');
                }
            }
        ],
        'onShow': function(ev, menu, target) {
            $('.temp-spacer').remove();
            $(target).after($('<span class="temp-spacer">&nbsp;</span>').css('background-color', 'lightgray'));
        },
        'onHide': function(ev, menu, target) {
            $('.temp-spacer').remove();
        }
    });

    // Character spacer builder
    $(spacerContextMenu).contextMenu({
        'menuItems': [
            {
                'name': 'delete',
                'selector': '.delete-spacer',
                'action': function(ev, obj, target) {
                    $(target).remove();
                    $(obj).contextMenu('hide');
                }
            },
            {
                'name': 'adjust',
                'selector': '.adjust-spacer',
                'action': function(ev, obj, target) {
                    $(obj).contextMenu('hide');
                    var newTarget = $(target).prev('.character');
                    $(target).remove();
                    window.setTimeout(function(){$('.character-context-menu').contextMenu('show', newTarget)}, 100);
                }
            }
        ]
    });

    $(songDetailsContainer).songDetails({
        'navbarSongTitle': '.song-title input',
        'songTitleInput': '#songTitle',
        'artistInput': '#songArtist',
        'songTagInput': '#songtags',
        'descriptionInput': '#songDescription',
        'navbarKey': '#mainkey',
        'songKeyInput': '#songkey',
        'songTimeSignInput': '#songTimeSign',
        'songSpeedInput': '#songSpeed'
    });

    $(songPartsContainer).songPart({
        'contextMenu': songPartContextMenu,
        'fontSize': monospaceFontSize,
        'fontFamily': monospaceFontFamily,
        'fontWidth': monospaceWidth,
        'fontHeight': monospaceHeight
    });

    // SEQUENCE BUILDER
    $(sequenceBox).sequenceBuilder({
        'otherSequenceSelection': otherSequenceSelection,
        'sequenceIdInput': sequenceIdInput,
        'sequenceNameInput': sequenceNameInput,
        'sequenceDescriptionInput': sequenceDescriptionInput,
        'sequenceMakeDefaultCheckbox': sequenceMakeDefaultCheckbox,
        'otherSequenceSelect': {
            'selector':  otherSequence,
            'action': function (ev) {
                $(otherSequenceDialog).dialogBox('show', 'HELLO', otherSequence);
            }
        },
        'noNameSubstitute': {
            'find': '[no-name]',
            'replace': '<span class="text-muted">No name</span>'
        },
        'defaultSelect': function() {
            var select = [];
            $('.song-part.panel-item .song-part-title').each(function() {
                var name = $(this).find('.song-part-name').attr('data-name');
                if (name == '' || name == undefined) {
                    name = '[no-name]';
                }
                select.push({
                    'name': name,
                    'id': $(this).parent().attr('data-id')
                });
            });
            return select;
        }
    });

    // Get song data
    getSong();

});

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
    $('body').remove('.' + unique);
}


function getSong() {

    var songId = $('#songId').val();
    if (songId == '') {
        $('#songId').val(uuidv4());
        return;
    }

    get(songId);
}

/**
 * Get song data from server
 */
function get($id) {
    $.ajax({
        'url': '/songbuilder/' + $id,
        'method': 'get',
        'contentType': 'application/json',
        'dataType': 'json'
    }).done(function(response) {
        setValues(response);
    }).fail(function(response) {
        console.error('Cannot find song');
        console.error(response);
    });
}

function setValues(songData) {
    console.log(songData);
    // Set details
    if (songData.hasOwnProperty('title')) {
        $(songDetailsContainer).songDetails('set', 'title', songData.title);
    }
    if (songData.details.hasOwnProperty('artist')) {
        $(songDetailsContainer).songDetails('set', 'artist', songData.details.artist);
    }
    if (songData.hasOwnProperty('tags')) {
        $(songDetailsContainer).songDetails('set', 'tags', songData.tags);
    }
    if (songData.details.hasOwnProperty('description')) {
        $(songDetailsContainer).songDetails('set', 'description', songData.details.description);
    }
    if (songData.hasOwnProperty('key') && songData.hasOwnProperty('scale')) {
        $(songDetailsContainer).songDetails('set', 'key', [songData.key, songData.scale]);
    }
    if (songData.details.hasOwnProperty('timeSignature')) {
        $(songDetailsContainer).songDetails('set', 'timeSignature', songData.details.timeSignature);
    }
    if (songData.details.hasOwnProperty('tempo')) {
        $(songDetailsContainer).songDetails('set', 'tempo', songData.details.tempo);
    }
    // Set song parts
    $(songPartsContainer).songPart('setValue', songData.songParts);
    // Set sequence
    $(sequenceBox).sequenceBuilder('setValue', songData.sequence.find(o => o.default));
    $(sequenceBox).sequenceBuilder('setOtherSequencesSelection', songData.sequence);
}
