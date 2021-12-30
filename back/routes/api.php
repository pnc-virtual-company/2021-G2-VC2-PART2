<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiscipleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public route
Route::get('disciple', [DiscipleController::class, 'index']);
Route::get('disciple/{id}', [DiscipleController::class, 'show']);
Route::get('disciple/search/{class}', [DiscipleController::class, 'search']);


// Private route
Route::post('disciple', [DiscipleController::class, 'store']);
Route::put('disciple/{id}', [DiscipleController::class, 'update']);
Route::delete('disciple/{id}', [DiscipleController::class, 'destroy']);