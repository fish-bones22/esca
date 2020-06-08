@extends('Layouts.standard')

@section('title')
ESKA
@stop

@section('style')
<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/songviewer.css') }}" />
@stop

@section('body')

<div class="song-item-template" style="display: none">
    <div class="song-item">
        <div class="song-details">
            <div class="song-name"></div>
            <div class="song-artist"></div>
        </div>
        <div class="songparts-container"></div>
    </div>
</div>

<div class="songpart-template">
    <div class="songpart-item">
        <div class="songpart-details">
            <div class="songpart-name"></div>
            <div class="songpart-modulation-info" style="display: none">Modulate to <span></span></div>
        </div>
        <div class="songlines-container"></div>
    </div>
</div>

<div class="songline-template">
    <div class="songline-item">
        <div class="songline-modulation-info" style="display: none">Modulate to <span></span></div>
        <div class="chords"></div>
        <div class="lyrics-content"></div>
        <div class="lyrics-display"></div>
    </div>
</div>

<div class="songs-container"></div>

@stop

@section('script')
<script src="{{ asset('js/songviewer.js') }}"></script>
@stop
