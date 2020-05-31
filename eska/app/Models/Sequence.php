<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class Sequence extends UuidKey
{
    protected $fillable =  [ 'id', 'name', 'reference_key', 'description', 'default', 'status' ];

    public function songParts() {
        return $this->belongsToMany('App\Models\SongPart', 'sequence_lookup', 'sequence_id', 'songpart_id')->withPivot('repeat', 'reference_key', 'order')->orderBy('order', 'ASC') ;
    }

    public function song() {
        return $this->belongsTo('App\Models\Song');
    }

}
