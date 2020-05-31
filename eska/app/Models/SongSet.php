<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class SongSet extends UuidKey
{
    protected $fillable = [ 'date', 'status' ];

    public function details() {
        return $this->hasMany('App\Models\SetDetails');
    }

    public function songs() {
        return $this->hasMany('App\Models\Sequence', 'set_lookup');
    }
}
