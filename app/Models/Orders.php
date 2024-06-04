<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'nama_kasir',
        'nama_pelanggan'
    ];

    public function User(){
        return $this->hasMany(User::class);
    }

    public function DetailOrders(){
        return $this->hasMany(DetailOrders::class);
    }
}
