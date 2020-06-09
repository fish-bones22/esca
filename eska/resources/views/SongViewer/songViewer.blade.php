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
<div class="songs-container"></div>
<div class="songs-control">
    <div class="next-song-container song-control-container" style="display: none">
        <div class="song-control-details" id="nextSongDetails">
            <div class="song-title"></div>
            <div class="song-artist"></div>
        </div>
        <button class="btn-primary trigger"><span class="material-icons">navigate_next</span></button>
    </div>
    <div class="songs-control-options">
        <button><span class="material-icons">more_vert</span></button>
    </div>
    <div class="prev-song-container song-control-container" style="display: none">
        <button class="btn-primary trigger"><span class="material-icons">navigate_before</span></button>
        <div class="song-control-details" id="previousSongDetails">
            <div class="song-title"></div>
            <div class="song-artist"></div>
        </div>
    </div>
</div>
@stop

@section('script')
<script src="{{ asset('js/songviewer.js') }}"></script>
@stop
