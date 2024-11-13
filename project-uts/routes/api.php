<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PegawaiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function() {
Route::get('/pegawai', [PegawaiController::class, 'index']);
Route::get('/pegawai/{id}', [PegawaiController::class, 'show']);
Route::post('/pegawai', [PegawaiController::class, 'store']);
Route::put('/pegawai/{id}', [PegawaiController::class, 'update']);
Route::delete('/pegawai/{id}', [PegawaiController::class, 'delete']);
Route::get('/pegawai/search', [PegawaiController::class, 'searchByName']);
Route::get('/pegawai/active', [PegawaiController::class, 'getActiveResources']);
Route::get('/pegawai/inactive', [PegawaiController::class, 'getInactiveResources']);
Route::get('/pegawai/terminated', [PegawaiController::class, 'getTerminatedResources']);
});