<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MenusModel;
use App\Models\MenuModel;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Menusmodel::orderBy('id')->get();
        // dd($data);
        return Inertia::render('Dashboard', [
            'menus' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function tambahMenu( Request $request)
    {
        $menus = Menusmodel::orderBy('id')->get();
        $menu = null;
        if ($request->has('id')) {
            $menu = MenusModel::find($request->id);
        }
        return Inertia::render('Dashboard',[
            'menuDetail' => $menu->find($request->id),
            'menus' => $menus

        ]);
    }

}
