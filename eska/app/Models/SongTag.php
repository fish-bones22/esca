<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SongTag extends UuidKey
{
    protected $fillable = [
        'id', 'name', 'description'
    ];

    public function songs() {
        return $this->belongsToMany('App\Models\Song', 'song_tag_lookup');
    }
}
