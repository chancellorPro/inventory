<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', 'IndexController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware(['auth'])->group(function () {

    Route::resource('product', 'Product\IndexController');
    Route::resource('action-log', 'ActionLog\IndexController');
    Route::resource('partition', 'Partition\IndexController');
    Route::resource('color', 'Color\IndexController');
    Route::resource('material', 'Material\IndexController');
    Route::resource('customer', 'Customer\IndexController');
    Route::resource('plan', 'Plan\IndexController');
    Route::resource('user', 'User\IndexController');

});
