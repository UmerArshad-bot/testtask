<?php

namespace App\Http\Controllers\CRM;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function home(){
        if (auth()->user()){
            return redirect()->route('dashboard');
        } else{
            return redirect()->route('login-form');
        }
    }
    //Form for User Registration
    public function registerForm(){
       return view('register');
    }
    //Store Register User Data 
    public function userRegister(Request $request){
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|unique:users,email',
        ]);
        $user=new User();
        $user->username=$request->username;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->save();
        if($user){
            Session::flash('success-toast', 'User Register Successfully'); 
        }
        else{
            Session::flash('error-toast', 'User not Found');
        }
        return redirect()->route('login-form');
   }
   //Login Form for User
    public function loginForm(){
      return view('main.auth.login');
    }
    public function loginUser(request $request){
        $credentials = $request->validate([
            'email' => 'required',
            'password' => 'required|min:8'
        ]);
        if(Auth::attempt($credentials, $request->remember)){
            Session::flash('success-toast', 'Successfully Logged-in!');
            return redirect()->route('dashboard');
        }
        else {
            Session::flash('error-toast', "Login Failed, Invalid username/password");
            return redirect()->route('login-form');
        }
    }
    
}
