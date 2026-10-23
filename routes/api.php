<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//api login
Route::post('/auth', [AuthController::class, 'auth']);

//api membatasi request yang harus login
Route::middleware('auth:sanctum')->group(function () {
    //api mendapatkan user yang login
    Route::get('/currentUser', [AuthController::class, 'getCurrentUser']);

    //ambil semua data kelas
    Route::get('/kelas', [])
});