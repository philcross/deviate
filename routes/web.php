<?php

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

Route::delete('/activity-collections/{collection}/activities/{activity}/image', 'Web\Activities\DeleteImage');
Route::post('/activity-collections/{collection}/activities/{activity}/image', 'Web\Activities\UpdateImage');
Route::get('/activity-collections/{collection}/activities/{activity}/image', 'Web\Activities\ShowImage');

Route::post('/activity-collections/{collection}/activities', 'Web\Activities\CreateActivity');
Route::put('/activity-collections/{collection}/activities/{activity}', 'Web\Activities\UpdateActivityDetails');
Route::get('/activity-collections/{collection}/activities/{activity}', 'Web\Activities\FetchActivity');
Route::get('/activity-collections/{collection}/activities', 'Web\Activities\ListActivities');

Route::post('/activity-collections/{collection}/image', 'Web\Activities\Collections\UploadImage');
Route::get('/activity-collections/{collection}/image', 'Web\Activities\Collections\ShowImage');

Route::delete('/activity-collections/{collection}', 'Web\Activities\Collections\DeleteCollection');
Route::post('/activity-collections', 'Web\Activities\Collections\CreateCollection');
Route::put('/activity-collections/{collection}', 'Web\Activities\Collections\UpdateCollection');
Route::get('/activity-collections/{collection}', 'Web\Activities\Collections\FetchCollection');
Route::get('/activity-collections', 'Web\Activities\Collections\ListCollections');

Route::get('/abilities', 'Web\Abilities\ListAbilities');

Route::put('/users/{user}/usergroups', 'Web\Users\Usergroups\UpdateUsergroups');
Route::get('/users/{user}/usergroups', 'Web\Users\Usergroups\FetchUsergroups');

Route::get('/users/{user}/avatar', 'Web\Users\Avatars\FetchAvatar');
Route::post('/users/{user}/avatar', 'Web\Users\Avatars\UpdateAvatar');
Route::delete('/users/{user}/avatar', 'Web\Users\Avatars\DeleteAvatar');

Route::patch('/users/{user}/deactivate', 'Web\Users\DeactivateUser');
Route::patch('/users/{user}/restore', 'Web\Users\RestoreUser');

Route::put('/users/{user}', 'Web\Users\UpdateDetails');
Route::post('/users', 'Web\Users\CreateUser');
Route::get('/users/{user}', 'Web\Users\FetchUser');
Route::get('/users', 'Web\Users\SearchUsers');
Route::delete('/users/{user}', 'Web\Users\DeleteUser');

Route::get('/usergroups/{usergroup}/abilities', 'Web\Usergroups\Abilities\ListAbilities');
Route::put('/usergroups/{usergroup}/abilities', 'Web\Usergroups\Abilities\UpdateAbilities');

Route::post('/usergroups/{usergroup}/members/{user}', 'Web\Usergroups\Membership\AddMember');
Route::delete('/usergroups/{usergroup}/members/{user}', 'Web\Usergroups\Membership\RemoveMember');
Route::get('/usergroups/{usergroup}/members/eligible', 'Web\Usergroups\Membership\SearchEligibleMembers');
Route::get('/usergroups/{usergroup}/members', 'Web\Usergroups\Membership\SearchMembers');

Route::get('/usergroups', 'Web\Usergroups\SearchUsergroups');
Route::get('/usergroups/{usergroup}', 'Web\Usergroups\FetchUsergroup');
Route::post('/usergroups', 'Web\Usergroups\StoreUsergroup');
Route::put('/usergroups/{usergroup}', 'Web\Usergroups\UpdateUsergroup');
Route::delete('/usergroups/{usergroup}', 'Web\Usergroups\DeleteUsergroup');

Route::put('/organisation/plans', 'Web\Organisations\Billing\SelectPlan');

Route::post('/organisation/billing/cards', 'Web\Organisations\Billing\AddPaymentMethod');
Route::get('/organisation/billing/cards', 'Web\Organisations\Billing\FetchPaymentMethods');
Route::delete('/organisation/billing/cards/{cardId}', 'Web\Organisations\Billing\DeletePaymentMethod');

Route::put('/organisation', 'Web\Organisations\UpdateDetails');
Route::get('/organisation', 'Web\Organisations\FetchDetails');

Route::post('/register', 'Web\Registration\Register');

Route::get('/', function () {
    return view('layouts.theme8');
});
