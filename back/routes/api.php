<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
<<<<<<< HEAD
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
=======
use App\Http\Controllers\PermissionController;
>>>>>>> permissions

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

<<<<<<< HEAD
// PUBLIC ROUTE 
Route::get('/user', [UserController::class, 'index']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::put('/updateUser/{id}', [UserController::class, 'updateUser']);
Route::delete('/deleteUser/{id}', [UserController::class, 'deleteUser']);
Route::get('/getUserByID/{id}', [UserController::class, 'getUserByID']);
Route::get('/searchUser/search/{username}', [UserController::class, 'searchUser']);
// Public Student
Route::get('students', [StudentController::class, 'index']);
Route::get('students/{id}', [StudentController::class, 'show']);
Route::post('students', [StudentController::class, 'store']);
Route::put('students/{id}', [StudentController::class, 'update']);
Route::delete('students/{id}', [StudentController::class, 'destroy']);
Route::get('/searchStudent/search/{studentname}', [StudentController::class, 'searchStudent']);
=======
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('permissions', [PermissionController::class, 'index']);
Route::get('permissions/{id}', [PermissionController::class, 'show']);
Route::get('permissions/search/{class}', [PermissionController::class, 'search']);
Route::post('permissions', [PermissionController::class, 'store']);
Route::put('permissions/{id}', [PermissionController::class, 'update']);
Route::delete('permissions/{id}', [PermissionController::class, 'destroy']);
>>>>>>> permissions
