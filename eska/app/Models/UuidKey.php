<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class UuidKey extends Model
{
    protected $keyType = 'string';

    public $incrementing = false;

}
