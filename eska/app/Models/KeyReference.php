<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KeyReference extends AutoUuid
{
    protected $fillable = [
        'id', 'root', 'scale', 'display', 'alternative_root', 'alternative_display', 'order'
    ];
}
