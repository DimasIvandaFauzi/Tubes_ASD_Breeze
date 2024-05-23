<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_orders', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id');
            $table->integer('menu_id');
            $table->string("nama_menu");
            $table->integer("jumlah");
            $table->integer("total");
            $table->timestamps();
            
            $table->foreignId("order_id")->references('id')->on('orders')->onDelete('cascade');
            $table->foreignId("menu_id")->references('id')->on('menu')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_orders');
    }
};
