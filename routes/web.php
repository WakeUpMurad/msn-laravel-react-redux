<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\UsersController;


Auth::routes();
Route::get('/', function () {
    return view('layouts/app');
    });

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/get/employee/list', [EmployeeController::class, 'getEmployeeList'])->name('employee.list');
Route::post('/get/individual/employee/details', [EmployeeController::class, 'getEmployeeDetails'])->name('employee.details');
Route::post('/update/employee/data', [EmployeeController::class, 'updateEmployeeData']);
Route::post('/store/employee/data', [EmployeeController::class, 'store']);
Route::delete('delete/employee/data/{employee}', [EmployeeController::class, 'destroy']);

Route::get('/get/users/list', [UsersController::class, 'getUsersList'])->name('user.list');

Route::get('/get/user/data', [UsersController::class, 'getUserData'])->name('user.data');
Route::post('/update/user/data', [UsersController::class, 'setFollowUser']);
Route::post('/get/individual/user/details', [UsersController::class, 'getUserDetails'])->name('user.details');


Route::view('/{path?}', 'home')
    ->where('path', '.*')
    ->name('react');
