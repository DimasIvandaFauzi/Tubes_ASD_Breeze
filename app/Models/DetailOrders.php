<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailOrders extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'menu_id',
        'jumlah',
        'total'
    ];
    public function orders(){
        return $this->belongsTo(Orders::class);
    }

    public function menu(){
        return $this->belongsTo(MenusModel::class);
    }
}


