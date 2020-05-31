
window.musicReference = require('./_musicReference.json');
require('./songPart');
require('./outline');
require('./songDetails');

require('./chordProcessor');
require('./chordBuilder');
require('./chordMarker');
require('./dynamicPanel');
require('./contextMenu');
require('./chordsLine');
require('./songLine');
require('./sequenceBuilder');

$(function() {

    var chordMarkerContextMenu = '.chord-context-menu';
    var chordSelection = '.chord-selection-menu';
    var sequenceBox = '#sequenceBox';
    var songPartTitleContextMenu = '.song-part-title-expanded-panel';
    var songLineContextMenu = '.songline-context-menu';
    var sequenceOptions = '.sequence-expanded-menu';
    var characterContextMenu = '.character-context-menu';
    var spacerContextMenu = '.spacer-context-menu';

   // Chord builder
    $(chordSelection).chordBuilder({
        'changeTargetOnChordChange': true,
        'songPartSelector': '.song-part-name',
        'mainRoot': function() {
            return $('#mainKey option:selected').val();
        },
        'mainScale': function() {
            return $('#mainKey option:selected').attr('data-scale');
        },
        'setTargetValue': function(ev, target, value) {
            if (target != undefined) {
                $(target).chordMarker('chordValue', value);
            }
        }
    });


    // SEQUENCE BUILDER
    $(sequenceBox).sequenceBuilder({
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
                    'id': $(this).parent().find('.stanza').attr('id')
                });
            });
            return select;
        }
    });


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

});
