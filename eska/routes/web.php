<?php

use App\Http\Controllers\SongController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/songbuilder', function() {
    return view('SongBuilder/songBuilder');
});
Route::get('/songviewer', function() {
    return view('SongViewer/songViewer');
});
Route::get('/setbuilder', function() {
    return view('SetBuilder/setBuilder');
});

Route::get('/songs', 'SongController@getSongs');
Route::post('/songs', 'SongController@getList');
Route::post('/song', 'SongController@upsert');
Route::get('/song/{id}', 'SongController@get');

Route::get('/sequence/{id}', 'SequenceController@get');

Route::get('/songpart/{id}/sequences', 'SongpartController@getSequences');

Route::post('/image', 'ImageController@save');
Route::delete('image/{id}', 'ImageController@delete');
Route::post('/images', 'ImageController@getAll');
