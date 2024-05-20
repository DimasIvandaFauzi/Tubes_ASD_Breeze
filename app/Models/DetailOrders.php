<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailOrders extends Model
{
    use HasFactory;

    public function orders(){
        return $this->hasOne(Orders::class);
    }

    public function menu(){
        return $this->hasMany(MenusModel::class);
    }
}


