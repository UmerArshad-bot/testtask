<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CRM\AuthController;
use App\Http\Controllers\CRM\ProductController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/',[AuthController::class,'home']);
//User Register Routes
Route::get('register-form',[AuthController::class,'registerForm'])->name('register-form');
Route::post('user-registration',[AuthController::class,'userRegister'])->name('user-registration');
//User Login Routes
Route::get('login-form',[AuthController::class,'loginForm'])->name('login-form');
Route::post('login-user',[AuthController::class,'loginUser'])->name('login-user');
//Protected Routes
Route::middleware('auth.user')->group(function () {
    //Dashboard route
    Route::get('/dashboard', [ProductController::class, 'dashboard'])->name('dashboard');
    //Product module route
    Route::get('/add-product', [ProductController::class, 'addProduct'])->name('add-product');
    Route::post('store-product',[ProductController::class,'storeProduct'])->name('store-product');
    Route::get('/all-products', [ProductController::class, 'allProducts'])->name('all-products');
    //My Product Route
    Route::get('/my-products', [ProductController::class, 'myProducts'])->name('my-products');
    Route::get('/edit-product/{id}', [ProductController::class, 'editProduct'])->name('edit-product');
    Route::post('/update-product//{id}', [ProductController::class, 'updateProduct'])->name('update-product');
    Route::get('/delete-product/{id}', [ProductController::class, 'deleteProduct'])->name('delete-product');
    //logout route
    Route::get('/logout', [ProductController::class, 'logout'])->name('logout');

});