<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SetDetail extends AutoUuid
{
    protected $fillable = [ 'song_id', 'key', 'value' ];
}
