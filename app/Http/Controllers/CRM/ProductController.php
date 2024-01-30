<?php

namespace App\Http\Controllers\CRM;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
class ProductController extends Controller
{
    //Dashboard
    public function dashboard(){
        $user=User::where('id',Auth()->user()->id)->first();
        $allProducts=Product::where('deleted_at',null)->count();
        $my_products=Product::where('user_id',Auth()->user()->id)->count();
        return view('main.content.Dashboard.dashboard',compact('user','allProducts','my_products'));
    }
    public function logout()
    {
        Auth::logout();
        Session::flash('success-toast', 'Successfully Logged-Out!');
        return redirect()->route('login-form');
    }
    //add product
    public function addProduct(){
        return view('main.content.Product.addProduct');
    }
    //store product
    public function storeProduct(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:600',
        ]);
        $product=new Product();
        if ($request->hasFile('image')) {
            $allowedfileExtension = ['jpeg', 'jpg', 'png'];
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $check = in_array($extension, $allowedfileExtension);
            if ($check) {
                $filename = time() . rand(100, 99999999) . '.' . $extension;
                $file->move('assets/ProductImage/', $filename);
                $product->image = $filename;
            } else {
                return 'Allowed Extension in jpeg,png,jpg,mp4.';
            }
        }
        $product->name=$request->name;
        $product->description=$request->description;
        $product->user_id=Auth::user()->id;
        $product->save();
        if($product){
            Session::flash('success-toast', 'Product added Successfully'); 
        }
        else{
            Session::flash('error-toast', 'Product not Found');
        }
        return redirect()->route('all-products');
    }
    //All Products
    public function allProducts(){
        $products=Product::all();
        return view('main.content.Product.allProducts',compact('products'));
    }
    //My Products
    public function myProducts(){
        $my_products=Product::where('user_id',Auth()->user()->id)->get();
        return view('main.content.Product.myProducts',compact('my_products'));
    }
    //Edit My Product
    public function editProduct($id){
        $product=Product::find($id);
        return view('main.content.Product.updateProduct',compact('product'));
    }
    //Update My Product
    public function updateProduct(Request $request,$id){
        
        $product=Product::find($id);
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:600',
        ]);
        if ($request->hasFile('image')) {
            $request->validate(
                [
                    'image' => 'required|mimes:jpeg,png,jpg',
                ]
            );
            $destination = 'assets/ProductImage/' . $product->image;
            if (File::exists($destination)) {
                File::delete($destination);
            }
            $allowedfileExtension = ['jpeg', 'jpg', 'png'];
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $check = in_array($extension, $allowedfileExtension);
            if ($check) {
                $filename = time() . rand(100, 99999999) . '.' . $extension;
                $file->move('assets/ProductImage/', $filename);
                $product->image = $filename;
            } else {
                return 'Allowed Extension in jpeg,png,jpg.';
            }
        }
        $product->name=$request->name;
        $product->description=$request->description;
        $product->update();
        if($product){
            Session::flash('success-toast', 'Product updated Successfully'); 
        }
        else{
            Session::flash('error-toast', 'Product not Found');
        }
        return redirect()->route('my-products');
    }
    //Delete My Product
    public function deleteProduct($id){
       $product=Product::find($id);

        if(!$product){
            Session::flash('error-toast', 'No Data Found.');
            return redirect()->route('my-products');
        }
        $product->delete();
        if($product->deleted_at!=null){
            $product->deleted_by=Auth()->user()->id;
            $product->update();
        }
        if($product)
            Session::flash('success-toast', 'Product  deleted successfully.');
        else
            Session::flash('error-toast', 'Product not found.');
        return redirect()->route('my-products');
    }
}
