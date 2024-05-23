<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenusModel extends Model
{
    use HasFactory;
    protected $table = 'menus';
    
    public function DetailOrders(){
        return $this->hasMany(DetailOrders::class);
    }
}
