<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;


Route::view('/', 'home');

Route::get('/menu', [MenuController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('menu');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

Route::view('queue', 'queue')
    ->middleware(['auth'])
    ->name('queue');

require __DIR__.'/auth.php';
