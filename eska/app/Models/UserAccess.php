<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAccess extends UuidKey
{
    protected $fillable = ['name', 'description'];
}
