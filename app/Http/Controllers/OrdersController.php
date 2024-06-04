<?php

namespace App\Http\Controllers;

use App\Models\DetailOrders;
use App\Models\MenusModel;
use App\Models\Orders;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Menusmodel::orderBy('id')->get();
        // dd($data);
        return Inertia::render('Dashboard', [
            'menus' => $data,
            
        ]);
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
        $user = $request->user();
        $order = Orders::create([
            'user_id' => $request->user()->id,
            'nama_kasir' => $user['name'],
            'nama_pelanggan' => $user['name'],
        ]);
        
        


        // $detail = $request->detail_orders;
        // $menuid = MenusModel::with('menus')->find('id');
        // // foreach ($request->detail_orders as $detail) {
       
        //     DetailOrders::create([
        //         'order_id' => $order->id,
        //         'menu_id' => $menuid,
        //         'jumlah' => $detail['jumlah'],
        //         'total' => $detail['total'],
        //     ]);
        // // }

        return redirect()->route('dashboard');

    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $detail = DetailOrders::with('menu')->orderBy('id')->get();
        $datas = Menusmodel::orderBy('id')->get();
        return Inertia::render('Dashboard', [
            'menus' => $datas,
            'menuDetails' => $detail
        ]);
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
