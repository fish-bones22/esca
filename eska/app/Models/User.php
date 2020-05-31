<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'username', 'password', 'admin', 'status'
    ];

    protected $hidden = [
        'password',
    ];

    public function userAccesses() {
        return $this->belongsToMany('App\Models\UserAccess', 'user_access_lookup');
    }
}
