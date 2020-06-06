
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
require('./outline');

import { v4 as uuidv4 } from 'uuid';

var navbarKey = '#mainkey';
var navbarScale = '#mainscale';
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
var songPartsParentContainer = '.song-part-container';
var sequenceContainer = '.sequence-container';
var newSequence = '.new-sequence';
var otherSequence = '.select-other-sequence';
var otherSequenceSelection = '#otherSequences';
var otherSequenceDialog = '.select-other-sequence-dialog';
var sequenceIdInput = '#sequenceId';
var sequenceNameInput = '#sequenceName';
var sequenceDescriptionInput = '#sequenceDescription';
var sequenceMakeDefaultCheckbox = '#sequenceDefault';
var informationDialogBox = '.information-dialog';
var warningDialogBox = '.warning-dialog';
var stepOutline = '.step-outline';
var addDetailsButton = '#addDetails';
var addLyricsButton = '#addLyrics';
var addChordsButton = '#addChords';
var createSequenceButton = '#createSequence';
var previousButton = '#previous';
var nextButton = '#next';
var optionsButton = '#options';
var songBuilderActionsMenu = '.song-builder-actions-menu'
var modulateMenu = '.modulation-content-menu';
var loadingScreen = '.loading-panel';

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
            return $('#mainscale option:selected').val();
        },
        'setTargetValue': function(ev, target, value) {
            if (target != undefined) {
                $(target).chordMarker('chordValue', value);
            }
        }
    });

    // DIALOG BOXES
    $(otherSequenceDialog).dialogBox({
        'cancelInputs': true,
        'controls': [
            {
                'name': 'close',
                'selector': '.close',
                'action': function(event, dialogBox, callback) {
                    $(otherSequenceDialog).dialogBox('hide');
                }
            },
            {
                'name': 'choose',
                'selector': '.choose-other-sequence',
                'action': function(event, dialogBox, callback) {
                    if (typeof callback == 'function') callback();
                    $(otherSequenceDialog).dialogBox('hide');
                }
            }
        ]
    });
    $(warningDialogBox).dialogBox({
        'cancelInputs': true,
        'messagePanel': '.message',
        'controls': [
            {
                'name': 'close',
                'selector': '.close',
                'action': function(event, dialogBox, callback) {
                    $(warningDialogBox).dialogBox('hide');
                }
            },
            {
                'name': 'okay',
                'selector': '.okay',
                'action': function(event, dialogBox, callback) {
                    if (typeof callback == 'function') callback();
                    $(warningDialogBox).dialogBox('hide');
                }
            }
        ]
    });
    $(informationDialogBox).dialogBox({
        'cancelInputs': true
    });

    // Loading screen
    $(loadingScreen).loadingScreen();

    // CONTEXT MENUS

    $(songBuilderActionsMenu).contextMenu({
        'menuItems': [{
            'name': 'finish',
            'selector': '#finish',
            'action': function(ev, obj, target) {
                collectValuesAndSave();
                $(obj).contextMenu('hide');
            }
        }]
    });

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
                'name': 'modulate',
                'selector': '.modulate-chord',
                'action': function(ev, obj, target) {
                    // Get current modulation of songpart and make it the input's value
                    window.setTimeout(function() { $(modulateMenu).contextMenu('show', target) }, 100);
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
                'name': 'modulate',
                'selector': '.modulate-line',
                'action': function(ev, obj, target) {
                    // Get current modulation of songpart and make it the input's value
                    window.setTimeout(function() { $(modulateMenu).contextMenu('show', target) }, 100);
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

    // Modulation
    $(modulateMenu).contextMenu({
        'onShow': function(ev, menu, target) {

            var currentModulation = 0;
            var currentScale = $(navbarScale).val();
            // If target is a song part
            if ($(target).parent().hasClass('song-part')) {
                currentModulation = $(target).parent().attr('data-modulation');
                currentScale = $(target).parent().attr('data-scale');
            } else if ($(target).parent().hasClass('song-line-actions')) {
                currentModulation = $(target).closest('.song-line').attr('data-modulation');
                currentScale = $(target).closest('.song-line').attr('data-scale');
            } else if ($(target).hasClass('chord')) {
                currentModulation = $(target).chordMarker('option', 'modulation');
                currentScale = $(target).chordMarker('option', 'scale');
            }

            $(menu).find('.modulation-amount-input input[type="number"]').val(currentModulation != undefined ? currentModulation : 0);
            $('#modulationScale option[value="' + (currentScale != undefined ? currentScale : $(navbarScale).val()) + '"]').prop('selected', true);
        },
        'menuItems': [
            {
                'name': 'done',
                'selector': '.done',
                'action': function(ev, obj, target) {

                    var compTarg = null;
                    var amount = $(obj).find('.modulation-amount-input input[type="number"]').val();
                    var scale = $(obj).find('#modulationScale').val();
                    // target is song part
                    if ($(target).parent().hasClass('song-part')) {
                        var compTarg = $(target).parent();
                        compTarg.parent().songPart('modulate', compTarg, amount*1);
                        compTarg.parent().songPart('changeScale', compTarg, scale);
                    // target is song line
                    } else if ($(target).parent().hasClass('song-line-actions')) {
                        var compTarg = $(target).closest('.song-line');
                        compTarg.find('.chords')
                        .chordsLine('modulate', amount*1)
                        .chordsLine('changeScale', scale);
                    // target is a chord
                    } else if ($(target).hasClass('chord')) {
                        $(target).chordMarker('modulate', amount*1);
                        $(target).chordMarker('option', 'scale', scale);
                        $(target).chordMarker('update');
                    }

                    if (compTarg != null) {
                        compTarg.find('.chord').each(function() {
                            $(this).chordMarker('update');
                        });
                    }

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
                    var panel = $(target).closest('.panel-item');
                    checkSongpartSequences(panel);
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
            },
            {
                'name': 'modulate',
                'selector': '.modulate-songpart',
                'action': function(ev, obj, target) {
                    // Get current modulation of songpart and make it the input's value
                    window.setTimeout(function() { $(modulateMenu).contextMenu('show', target) }, 100);
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
        'navbarKey': navbarKey,
        'songKeyInput': '#songkey',
        'navbarScale': navbarScale,
        'songScaleInput': '#songscale',
        'songTimeSignInput': '#songTimeSign',
        'songSpeedInput': '#songSpeed',
        'keyChange': function() {
            $(songPartsContainer).songPart('update');
        }
    });

    $(songPartsContainer).songPart({
        'contextMenu': songPartContextMenu,
        'fontSize': monospaceFontSize,
        'fontFamily': monospaceFontFamily,
        'fontWidth': monospaceWidth,
        'fontHeight': monospaceHeight,
        'mainScale': function () { return $(navbarScale).val() },
        'key': function () { return $(navbarKey).val() },
        'songModulation': function () { return 0 }
    });

    // SEQUENCE BUILDER
    $(sequenceBox).sequenceBuilder({
        'otherSequenceSelection': otherSequenceSelection,
        'sequenceIdInput': sequenceIdInput,
        'sequenceNameInput': sequenceNameInput,
        'sequenceDescriptionInput': sequenceDescriptionInput,
        'sequenceMakeDefaultCheckbox': sequenceMakeDefaultCheckbox,
        'newSequence': {
            'selector': newSequence,
            'action': function (ev) {
                $(warningDialogBox).dialogBox('show', 'This will discard any unsaved changes to the sequence. Continue?', function() {
                    $(sequenceBox).sequenceBuilder('clear');
                })
            }
        },
        'otherSequenceSelect': {
            'selector':  otherSequence,
            'action': function (ev) {
                $(otherSequenceDialog).dialogBox('show', null, function() {
                    var seqId = $(otherSequenceSelection).find('option:selected').attr('value');
                    if (seqId != '' && seqId != undefined)
                        getSequence(seqId);
                });
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

    $(stepOutline).outline({
        'nextSelector': nextButton,
        'previousSelector': previousButton,
        'controls': [
            {
                'runOnInit': true,
                'name': 'setdetails',
                'selector': addDetailsButton,
                'action': addDetails
            },
            {
                'runOnInit': false,
                'name': 'setlyrics',
                'selector': addLyricsButton,
                'action': addLyrics
            },
            {
                'runOnInit': false,
                'name': 'setchords',
                'selector': addChordsButton,
                'action': addChords
            },
            {
                'runOnInit': false,
                'name': 'createsequence',
                'selector': createSequenceButton,
                'action': setSequence
            }
        ]
    });

    $(optionsButton).on('click', function() {
        $(songBuilderActionsMenu).contextMenu('show', this);
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
    $('.' + unique).remove();
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
    $(loadingScreen).loadingScreen('show');
    $.ajax({
        'url': '/song/' + $id,
        'method': 'get',
        'contentType': 'application/json',
        'dataType': 'json'
    }).done(function(response) {
        if ('error' in response) {
            $(informationDialogBox).dialogBox('show', 'Uh-oh, something happened.<hr/>Technical message: '+ response['error']);
            return;
        }
        setValues(response);
    }).fail(function(response) {
        $(informationDialogBox).dialogBox('show', 'Uh-oh, something bad happened.');
        console.error(response);
    }).always(function() {
        $(loadingScreen).loadingScreen('hide');
    });
}


function setValues(songData) {
    console.log(songData);
    // Set details
    if (songData.hasOwnProperty('id')) {
        $('#songId').val(songData.id);;
    }
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
    if (songData.hasOwnProperty('key')) {
        $(songDetailsContainer).songDetails('set', 'key', [songData.key, songData.scale]);
    }
    if (songData.hasOwnProperty('scale')) {
        $(songDetailsContainer).songDetails('set', 'scale', [songData.key, songData.scale]);
    }
    if (songData.details.hasOwnProperty('timeSignature')) {
        $(songDetailsContainer).songDetails('set', 'timeSignature', songData.details.timeSignature);
    }
    if (songData.details.hasOwnProperty('tempo')) {
        $(songDetailsContainer).songDetails('set', 'tempo', songData.details.tempo);
    }
    // Set song parts
    $(songPartsContainer).songPart('setValues', songData.songParts);
    // Set sequence
    $(sequenceBox).sequenceBuilder('setValues', songData.sequence.find(o => o.default));
    $(sequenceBox).sequenceBuilder('setOtherSequencesSelection', songData.sequence);
}

function getSequence(sequenceId) {
    $.ajax({
        'url': '/sequence/' + sequenceId,
        'method': 'get',
        'contentType': 'application/json',
        'dataType': 'json'
    }).done(function(response) {
        $(sequenceBox).sequenceBuilder('setValues', response);
    }).fail(function(response) {
        console.error('Cannot find sequence ' + sequenceId);
        console.error(response);
    });
}


function getValues() {
    return {
        'id': $('#songId').val() != '' ? $('#songId').val() : uuidv4(),
        'title': $(songDetailsContainer).songDetails('get', 'title'),
        'key': $(songDetailsContainer).songDetails('get', 'key'),
        'scale': $(songDetailsContainer).songDetails('get', 'scale'),
        'details': {
            'artist': $(songDetailsContainer).songDetails('get', 'artist'),
            'description': $(songDetailsContainer).songDetails('get', 'description'),
            'timeSignature': $(songDetailsContainer).songDetails('get', 'timeSignature'),
            'tempo': $(songDetailsContainer).songDetails('get', 'tempo')
        },
        'tags': $(songDetailsContainer).songDetails('get', 'tags'),
        'songParts': $(songPartsContainer).songPart('getValues'),
        'sequence': $(sequenceBox).sequenceBuilder('getValues')
    }
}

function addDetails(ev) {
    $(songDetailsContainer).show();
    $(songPartsParentContainer).hide();
    $(sequenceContainer).hide();
    // Hide chord builder
    $(chordSelection).chordBuilder('hide');
    $(previousButton).hide();

    $('.step.current').removeClass('current');
    $(addDetailsButton).addClass('current');
    $(stepOutline).outline('setPrevious', null);
    $(stepOutline).outline('setNext', addLyrics);
}

function addLyrics(ev) {

    $(songDetailsContainer).hide();
    $(songPartsParentContainer).show();
    $(sequenceContainer).hide();

    $('.song-line .lyrics-view').each(function() {
        // Set process
        $('#processing').val('lyrics');
        // Hide chords if shown
        $(this).parent().siblings('.chords').hide();
        // Hide input
        $(this).hide();
        // Get sibling view element
        var lyricsInput = $(this).siblings('input[type="text"]');
        if (lyricsInput.length <= 0) return;
        // Set view element text
        lyricsInput.show();
    });
    $(chordSelection).chordBuilder('hide');
    $(previousButton).show();

    $('.step.current').removeClass('current');
    $(addLyricsButton).addClass('current');
    $(stepOutline).outline('setPrevious', addDetails);
    $(stepOutline).outline('setNext', addChords);
}

function addChords(ev) {
    $(songDetailsContainer).hide();
    $(songPartsParentContainer).show();
    $(sequenceContainer).hide();

    // Get each lyrics line and display
    $('.song-line.panel-item .lyrics input[type="text"]').each(function() {
        // Set process
        $('#processing').val('chords');
        // Show chords
        $(this).parent().siblings('.chords').show();
        // Hide input
        $(this).hide();
        var lyricsView = $(this).siblings('.lyrics-view');
        if (lyricsView.length <= 0) return;
        lyricsView.songLine('processLine');
        lyricsView.show();

    });
    $(previousButton).show();

    $('.step.current').removeClass('current');
    $(addChordsButton).addClass('current');
    $(stepOutline).outline('setPrevious', addLyrics);
    $(stepOutline).outline('setNext', setSequence);
}

function setSequence(ev) {
    // Hide other panels
    $(songDetailsContainer).hide();
    $(songPartsParentContainer).hide();
    $(sequenceContainer).show();

    // Set processing value
    $('#processing').val('sequence');

    // Hide chord builder
    $('.chord-selection-menu').chordBuilder('hide');

    // // Init sequence builder
    $(sequenceBox).sequenceBuilder('setSequenceSelect');
    $(previousButton).show();
    $('.step.current').removeClass('current');
    $(createSequenceButton).addClass('current');
    $(stepOutline).outline('setPrevious', addChords);
    $(stepOutline).outline('setNext', collectValuesAndSave);
}

/**
 * Gets related sequences for a songpart from the server
 */
function checkSongpartSequences(songPart) {
    var id = songPart.attr('data-id');
    var index = songPart.attr('data-order')*1 - 1;
    var sequences = [];
    $(loadingScreen).loadingScreen('show');
    $.ajax({
        'url': '/songpart/' + id + '/sequences',
        'method': 'get',
        'contentType': 'application/json',
        'dataType': 'json'
    }).done(function(response) {
        // If array and not empty
        if (response != null && Array.isArray(response)) {
            response.forEach(sequence => {
                sequences.push(sequence.name);
            })
        } else {
            sequences = getFallbackSequences(songPart);
        }
    }).fail(function(response) {
        // Log error
        console.log("No sequence found for songpart " + id);
        console.log(response);
        // Get fallback
        sequences = getFallbackSequences(songPart);
    }).always(function() {
        $(loadingScreen).loadingScreen('hide');
        // Warn user about related sequences before removing
        if (sequences.length > 0) {
            $(warningDialogBox).dialogBox('show',
            'Deleting this will modify the following sequences.<br/><ul><li>' + sequences.join('</li><li>') + '</li></ul>Are you sure?',
            function() {
                $(songPart).parent().dynamicPanel('remove', index);
            });
        }
        // Remove if no related sequences
        else {
            $(songPart).parent().dynamicPanel('remove', index);
        }
    });
}

function post(song) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    return $.ajax({
        'url': '/song',
        'method': 'post',
        'contentType': 'application/json',
        'dataType': 'json',
        'data': JSON.stringify(song)
    })
}

function collectValuesAndSave() {

    if (!$(songDetailsContainer).songDetails('validate')) {
        addDetails();
        return;
    }
    $(warningDialogBox).dialogBox('show', 'Do you want to save? Make sure everything is in place.', function() {
            $(loadingScreen).loadingScreen('show');
            var song = getValues();
            console.log(song);
            post(song).done(function(response) {
                if ('error' in response) {
                    $(informationDialogBox).dialogBox('show', 'Saving failed. Please try again.<hr/>Technical message: ' + response['error']);
                    return;
                }
                $(informationDialogBox).dialogBox('show', 'Saving complete!');
            }).fail(function(response) {
                $(informationDialogBox).dialogBox('show', 'Saving failed completely. Please try again.');
                console.error(response);
            }).always(function() {
                $(loadingScreen).loadingScreen('hide');
            })
    })

}

/**
 * Gets related sequences for a songpart stored in its data attribute
 * This method of getting sequences can end up getting stale data as sequences might have been updated.
 */
function getFallbackSequences(songPart) {
    var fallbackSequence = songPart.attr('data-sequences');
    if (fallbackSequence == '' || fallbackSequence == undefined) return [];
    return fallbackSequence.split('|');
}


window.getSong = function(id) {
    get(id);
}
