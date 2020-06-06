<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScaleReference extends AutoUuid
{
    protected $fillable = [
        'id', 'name', 'display', 'description', 'order'
    ];
}
