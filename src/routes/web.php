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
    Route::resource('stock', 'Stock\IndexController');
    Route::resource('plan', 'Plan\IndexController');
    Route::resource('customer', 'Customer\IndexController');
    Route::resource('user', 'User\IndexController');

    Route::get('export', 'ActionLog\IndexController@getExportData')->name('export');
});
