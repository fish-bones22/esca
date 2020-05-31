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
@include('Songbuilder.ContextMenus._chordMarker')
@include('Songbuilder.ContextMenus._sequence')
@include('Songbuilder.ContextMenus._songPartTitle')
@include('Songbuilder.ContextMenus._songLine')
{{-- Content --}}
@include('Songbuilder._navigation')
<div class="container">
    @include('Songbuilder._outline')
    @include('Songbuilder._contentSongDetails')
    @include('Songbuilder._contentSongParts')
    @include('Songbuilder._contentSequence')
    @include('Songbuilder._contentActions')
</div>
@stop

@section('script')
<script src="{{ asset('js/main.js') }}"></script>
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
                    '08202b04-98d2-4a4b-bcde-43cf69539c82',
                    'ec8dcaba-2192-48f4-940b-5d123be46fc7',
                    'cef391a4-0200-440d-bfd3-4bbc2616edcc' ],
        'songParts' : [
            {
                'id' : '815fe3d4-3f14-4ad4-b461-f2afc524cb84',
                'name' : 'Verse 1',
                'order' : 1,
                'referenceKey' : 0,
                'lyrics' : {
                    'content' : 'This is the lyric{newline}He{spacer-1}llo world this is the lyric',
                    'display' : 'This is the lyric{newline}Hello world this is the lyric'
                },
                'chords' : {
                    'content' : '0/3/whole/1/M//|0/8/whole/5/M//|0/14/whole/6/m/7/|0/16/whole/4/M//'
                }
            },
            {
                'id' : 'a81dd9a2-0bb5-4e50-a064-5881d2dcb6dd',
                'name' : 'Chorus',
                'order' : 2,
                'referenceKey' : 0,
                'lyrics' : {
                    'content' : 'This is the chorus{newline}He{spacer-1}llo world this is the chorus',
                    'display' : 'This is the chorus{newline}Hello world this is the chorus'
                },
                'chords' : {
                    'content' : '0/3/whole/1/M//|0/8/whole/5/M//|0/14/whole/6/m/7/|0/16/whole/4/M//'
                }
            }
        ],
        'sequences' : [
            {
                'id' : 'b33388b4-8ed7-4a15-aaad-49e706ca1bb3',
                'name' : 'Default Sequence',
                'referenceKey' : 0,
                'description' : '',
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
            }
        ]

    };

    $(function() {
        post();
    });

    function get() {
        $.ajax({
            'url': '/songbuilder/611c3248-7326-448b-b66c-5199f9009dc8',
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
            'url': '/songbuilder',
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
