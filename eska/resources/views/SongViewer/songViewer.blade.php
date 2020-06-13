@extends('Layouts.standard')

@section('title')
ESKA
@stop

@section('style')
<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/songviewer.css') }}" />
@stop

@section('body')
@include('SongViewer._navigation')
@include('SongViewer._songItemTemplate')
@include('SongViewer._songLineTemplate')
@include('SongViewer._songPartTemplate')
<div class="song-viewer">
    <div class="songs-container"></div>
    @include('SongViewer._contentSequenceControls')
    @include('SongViewer._contentSongControls')
    @include('SongViewer._contentOptions')
    @include('Shared.DialogBoxes._loader')
</div>
@stop

@section('script')
<script src="{{ asset('js/songviewer.js') }}"></script>
@stop
