@extends('Layouts.standard')

@section('title')
ESKA
@stop

@section('style')
<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/songbuilder.css') }}" />
@stop

@section('body')
{{-- Templates --}}
@include('Songbuilder._songLine')
@include('Songbuilder._songPart')
@include('Songbuilder._sequence')
@include('Songbuilder._chordBuilder')
{{-- Context Menus --}}
@include('Songbuilder.ContextMenus._characterMarker')
@include('Songbuilder.ContextMenus._spacer')
@include('Songbuilder.ContextMenus._chordMarker')
@include('Songbuilder.ContextMenus._sequence')
@include('Songbuilder.ContextMenus._songPartTitle')
@include('Songbuilder.ContextMenus._songLine')
@include('Songbuilder.ContextMenus._songPart')
@include('Songbuilder.ContextMenus._modulation')
{{-- Dialog Boxes --}}
@include('Songbuilder.DialogBoxes._selectOtherSequence')
@include('Shared.DialogBoxes._warning')
@include('Shared.DialogBoxes._information')
@include('Shared.DialogBoxes._loader')
{{-- Content --}}
@include('Songbuilder._navigation')
<div class="container">
    @include('Songbuilder._outline')
    <div class="overflow-window">
        @include('Songbuilder._contentSongDetails')
        @include('Songbuilder._contentSongParts')
        @include('Songbuilder._contentSequence')
    </div>
    @include('Songbuilder._contentActions')
</div>
<input type="hidden" id="processing" value=""/>
<input type="hidden" id="songId" value=""/>
@stop

@section('script')
<script src="{{ asset('js/songbuilder.js') }}"></script>
<script>
    // Test
    var song = {
        'id' : '611c3248-7326-448b-b66c-5199f9009dc8',
        'key' : 'C',
        'scale' : 'Major',
        'title' : 'Test Song',
        'details' : {
            'artist' : 'Foo foo',
            'description' : 'Original song by Foo foo bar bar',
            'timeSignature' : '4/4',
            'tempo': 160
        },
        'tags' : [ '9db87722-47c0-4fd0-ae3a-eb6c432624f3',
                    '3c9dec5e-7987-4d37-812f-f184cbc21e61',
                    '08202b04-98d2-4a4b-bcde-43cf69539c82'
                 ],
        'songParts' : [
            {
                'id' : '815fe3d4-3f14-4ad4-b461-f2afc524cb84',
                'name' : 'Verse 1',
                'order' : 1,
                'referenceKey' : 0,
                'scale' : 'major',
                'lyrics' : {
                    'content' : 'This is the lyric{newline}He{spacer-1}llo world this is the lyric',
                    'display' : 'This is the lyric{newline}Hello world this is the lyric'
                },
                'chords' : {
                    'content' : '0/major|0/major/3/whole/1/M//|0/major/8/whole/5/M//|0/major/14/whole/6/m/dom7/|0/major/22/whole/4/M//{newline}0/major|0/major/3/whole/1/M//|0/major/8/whole/5/M//|0/major/14/whole/6/m/maj7/|0/major/25/no/4/M//'
                }
            },
            {
                'id' : 'a81dd9a2-0bb5-4e50-a064-5881d2dcb6dd',
                'name' : 'Chorus',
                'order' : 2,
                'referenceKey' : 0,
                'scale' : 'major',
                'lyrics' : {
                    'content' : 'This is the chorus{newline}He{spacer-1}llo world this is the chorus',
                    'display' : 'This is the chorus{newline}Hello world this is the chorus'
                },
                'chords' : {
                    'content' : '0/major|0/major/3/whole/1/M//|0/major/8/whole/5/M//|0/major/14/whole/6/m/dom7/|0/major/22/whole/4/M//{newline}0/major|0/major/3/whole/1/M//|0/major/8/whole/5/M//|0/major/14/whole/6/m/maj7/|0/major/25/no/4/M//'
                }
            }
        ],
        'sequence' : [
            {
                'id' : 'b33388b4-8ed7-4a15-aaad-49e706ca1bb3',
                'name' : 'Default Sequence',
                'referenceKey' : 0,
                'description' : 'Original sequence as releaased',
                'default' : true,
                'songParts' : [
                    {
                        'songPart' : '815fe3d4-3f14-4ad4-b461-f2afc524cb84',
                        'order' : 1,
                        'referenceKey' : 0,
                        'repeat' : 1
                    },
                    {
                        'songPart' : 'a81dd9a2-0bb5-4e50-a064-5881d2dcb6dd',
                        'order' : 2,
                        'referenceKey' : 0,
                        'repeat' : 1
                    },
                    {
                        'songPart' : '815fe3d4-3f14-4ad4-b461-f2afc524cb84',
                        'order' : 3,
                        'referenceKey' : 0,
                        'repeat' : 1
                    },
                    {
                        'songPart' : 'a81dd9a2-0bb5-4e50-a064-5881d2dcb6dd',
                        'order' : 4,
                        'referenceKey' : 0,
                        'repeat' : 2
                    },
                    {
                        'songPart' : 'a81dd9a2-0bb5-4e50-a064-5881d2dcb6dd',
                        'order' : 5,
                        'referenceKey' : 1,
                        'repeat' : 1
                    }
                ]
            },
            {
                'id' : '0b93c4e2-1d6f-4b1b-a508-51b97013c7d8',
                'name' : 'Short Sequence',
                'referenceKey' : 0,
                'description' : 'Quick short sequence',
                'default' : false,
                'songParts' : [
                    {
                        'songPart' : '815fe3d4-3f14-4ad4-b461-f2afc524cb84',
                        'order' : 1,
                        'referenceKey' : 0,
                        'repeat' : 1
                    },
                    {
                        'songPart' : 'a81dd9a2-0bb5-4e50-a064-5881d2dcb6dd',
                        'order' : 2,
                        'referenceKey' : 0,
                        'repeat' : 2
                    },
                    {
                        'songPart' : 'a81dd9a2-0bb5-4e50-a064-5881d2dcb6dd',
                        'order' : 5,
                        'referenceKey' : 1,
                        'repeat' : 1
                    }
                ]
            }
        ]

    };

    $(function() {

    });

    function get() {
        $.ajax({
            'url': '/song/611c3248-7326-448b-b66c-5199f9009dc8',
            'method': 'get',
            'contentType': 'application/json',
            'dataType': 'json'
        }).done(function(response) {

        }).fail(function(response) {

        }).always(function(response) {
            console.log(response);
        });
    }

    function post() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            'url': '/song',
            'method': 'post',
            'contentType': 'application/json',
            'data': JSON.stringify(song)
        }).done(function(response) {

        }).fail(function(response) {

        }).always(function(response) {
            console.log(response);
        });
    }
</script>

@stop
