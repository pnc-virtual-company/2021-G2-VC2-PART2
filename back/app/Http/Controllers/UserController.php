<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{   
    public function index()
    {
        return User::all();
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|max:50',
            'email' => 'required|unique:users',
            'password' => 'required|min:8|confirmed',
            'image'=>'nullable|image|mimes:jpg,jpeg,png,gif,jfif|max:1999'
        ]);

        $request -> file('image')->store('public/images');
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->role = $request->role;
        $user->image =$request->file('image')->hashName();
        $user->save();
        $token = $user->createToken('MyToken')->plainTextToken;
        return response()->json([
            'Message' => 'Created',
            'data' => $user,
            'token' => $token
        ], 201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json(['Message' => 'Logouted']);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['Message' => 'Bed login']);
        }
        $token = $user->createToken('MyToken')->plainTextToken;
        return response()->json([
            'Message' => 'Logined',
            'data' => $user,
            'token' => $token
        ]);
    }
}