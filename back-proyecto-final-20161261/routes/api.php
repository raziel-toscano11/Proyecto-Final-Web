<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
//  return $request->user();
//})->middleware('auth:sanctum');


//Rutas sin autenticacion
Route::post('/login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{post}', [PostController::class, 'show']);
Route::get('/posts/{post}/comentarios', [ComentarioController::class, 'mostrarComentarios']);
Route::post('/posts', [PostController::class, 'store']);
Route::post('/posts/{post}/comentar', [ComentarioController::class, 'hacerComentario']);


Route::get('/images/{image}', [ImageController::class, 'show']);


Route::get('/images', [ImageController::class, 'index']);

//Rutas con autenticacion
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::post('/logout', [AuthController::class, 'logout']);

    #Rutas auntenticadas para el Administrador
    Route::group(['middleware' => ['role:Admin']], function () {
        //
    });

    Route::apiResource('/users', UserController::class)->names('users');
    //Route::apiResource('/posts', PostController::class)->names('posts');
    
});

