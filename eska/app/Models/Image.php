<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends AutoUuid
{
    protected $fillable = ['id', 'name', 'category', 'path', 'created_at' ];
}
