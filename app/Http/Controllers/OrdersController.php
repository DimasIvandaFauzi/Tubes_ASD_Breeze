<?php

namespace App\Http\Controllers;

use App\Models\DetailOrders;
use App\Models\MenusModel;
use App\Models\Orders;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'order_id' => 'required|exists:orders,id',
            'menu_id' => 'required|exists:menus,id',
            'jumlah' => 'required|integer|min:1',
        ]);

        $order = Orders::find($validatedData['order_id']);
        $menu = MenusModel::find($validatedData['menu_id']);
        $total = $menu->harga * $validatedData['jumlah'];

        $user = Auth::user();
        $order = Orders::create([
            'user_id' => $user->id
        ]);

        $detail = new DetailOrders();
        $detail->order_id = $order->id;
        $detail->menu_id = $menu->id;
        $detail->nama_menu = $menu->nama;
        $detail->jumlah = $validatedData['jumlah'];
        $detail->total = $total;
        $detail->save();

        return response()->json(['message' => 'Detail order berhasil disimpan', 'detail_order'=>$detail],201);


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
