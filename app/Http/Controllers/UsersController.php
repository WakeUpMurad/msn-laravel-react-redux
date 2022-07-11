<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Exception;

class UsersController extends Controller
{
    public function getUserData()
    {
        try {
            $userId = Auth::id();

            $userdata = User::where('id', $userId)->get();
            return response()->json($userdata);

        } catch (Exception $e) {
            Log::error($e);
        }
    }

    // Get Users List from database.

    public function getUsersList()
    {
        try {
            $users = User::orderBy('id', 'DESC')->get();
            return response()->json($users);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /*
         * Get individual user details.
         *
         * */
    public function getUserDetails(Request $request)
    {
        try {
            $userData = User::findOrFail($request->get('userId'));
            return response()->json($userData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    public function setFollowUser(Request $request)
    {
        try {
            $userId = Auth::id();
            $followingUserIds = $request->get('followingUserIds');

            User::where('id', $userId)->update([
                    'following_users_id' => $followingUserIds
            ]);
            return response()->json($followingUserIds);

        } catch (Exception $e) {
            Log::error($e);
        }
    }


}
