<?php

namespace App\Models;

use App\Http\Requests\SongRequest;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Song extends UuidKey
{
    protected $fillable = [
        'id', 'title', 'key', 'scale', 'status', 'version'
    ];

    function details()
    {
        return $this->hasMany('App\Models\SongDetail');
    }

    function songParts() {
        return $this->hasMany('App\Models\SongPart')->orderBy('order');
    }

    function tags() {
        return $this->belongsToMany('App\Models\SongTag', 'song_tag_lookup');
    }

    function sequences() {
        return $this->hasMany('App\Models\Sequence');
    }



}
