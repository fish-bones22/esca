<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class SongPart extends UuidKey
{
    protected $table = 'songparts';

    protected $fillable = ['id', 'name', 'reference_key', 'lyrics', 'lyrics_display', 'chords'];

    public function song() {
        return $this->belongsTo('App\Models\Song');
    }

    public function sequence() {
        return $this->belongsToMany('App\Models\Sequence', 'sequence_lookup');
    }
}
