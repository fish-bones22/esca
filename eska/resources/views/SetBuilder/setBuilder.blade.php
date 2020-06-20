@extends('Layouts.standard')

@section('title')
Set Builder
@stop

@section('style')
<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/setbuilder.css') }}" />
@stop

@section('body')
<div class="set-builder-container">
    @include('SetBuilder._contentSetDetails')
    @include('SetBuilder._contentSetSongs')
    @include('SetBuilder._contentSetBuilderActions')
</div>

<div class="song-search-container">
    <div class="song-search">
        <button type="button" class="btn-action close"><span class="material-icons">clear</span></button>
        <div class="content">
            <div class="header">Search song</div>
            <div class="body">
                <div class="search-bar">
                    <input type="search" id="songSearchBar" />
                    <button type="button" class="btn-action search"><span class="material-icons">search</span></button>
                </div>
                <div class="search-result">
                    <table id="songSearchResult" class="noresults">
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Artist</td>
                                <td>Orig. Key</td>
                            </tr>
                        </thead>
                        <tbody>
                            @for($i = 0; $i < 56; $i++)
                            <tr>
                                <td>In Jesus' Name</td>
                                <td>Darlene Zschech</td>
                                <td>D major</td>
                            </tr>
                            @endfor
                            <tr class="no-results-row">
                                <td colspan="3"><i>No results</i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="search-actions">
                    <button class="btn-primary select">Select</button>
                    <button class="btn-secondary cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>
@stop

@section('script')

@stop
