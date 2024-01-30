@extends('main.mainlayout.layout')
@section('title','Edit Product')
@section('content')
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>

    <div class="page-heading">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Edit Product</h3>
                    <p class="text-subtitle text-muted">For Admin to Edit Product</p>

                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="card">
                <div class="card-header">
               
                </div>
                <form method="POST"  enctype="multipart/form-data" action="{{ route('update-product',$product->id)}}" id="form">
                    @csrf
                    <div class="card-body">
                        <!--1st Row div start!-->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Name</label>
                                    <input type="text" name="name" class="form-control" id="name"
                                           placeholder="Name" value="{{$product->name}}" required  >

                                    @error('name')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                    <div style="color:red;font-size:12px" id="auction-date-error"></div>
                                </div>
                            </div>

                            <div class="col-md-6">
                            <label for="basicInput">Image</label>
                                <div class="form-group">
                                 <input type="file" name="image" class="form-control" id="image"
                                 placeholder="Image" >
                                 <br>
                                 <div class="form-group">
                                 <img src="http://127.0.0.1:8000/assets/ProductImage/{{$product->image}}" style="max-height: 60px">
                                                                
                                 </div>
                                    @error('image')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                    <div style="color:red;font-size:12px" id="image-error"></div><br>
                                </div>
                            </div>
                        </div>

                        <!--1st Row div end!-->

                        <!--2st Row div start!-->
                        <div class="row">
                             <div class="col-md-6">
                                <label for="basicInput">Description</label>
                                <div class="form-group">
                                <textarea id="description" class="form-control" name="description" rows="4" cols="50">{{$product->description}}</textarea>
                                    @error('description')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                         </div>
                        <!--2st Row div end!-->

                      <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Update Product</button>
                        </div>

                    </div>


                    <!--Card body div end!-->

                </form>


            </div>
            <!--Card div end!-->
        </section>

    </div>



@endsection
