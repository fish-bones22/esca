<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class SongDetail extends AutoUuid
{

    protected $fillable = [ 'id', 'key', 'value' ];

    public function song() {
        return $this->belongsTo('App\Models\Song');
    }
}
