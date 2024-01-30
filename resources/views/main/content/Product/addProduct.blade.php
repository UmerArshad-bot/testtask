@extends('main.mainlayout.layout')
@section('title','Add Product')
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
                    <h3>Add Product</h3>
                    <p class="text-subtitle text-muted">For User to Add New Product</p>

                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Add Product</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="card">
                <div class="card-header"></div>
                <form method="POST"  enctype="multipart/form-data" action="{{ route('store-product') }}" id="form">
                    @csrf
                    <div class="card-body">
                        <!--1st Row div start!-->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Name</label>
                                    <input type="text" name="name" class="form-control" id="name"
                                           placeholder="Name" required  >

                                    @error('name')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                    </div>
                            </div>
                            <div class="col-md-6">
                            <label for="basicInput">Image</label>
                                <div class="form-group">
                                 <input type="file" name="image" class="form-control" id="image"
                                 placeholder="Image" required>
                                    @error('image')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                    <div style="color:red;font-size:12px" id="image-error"></div><br>
                                </div>
                            </div>
                        </div>

                        <!--1st Row div end!-->

                        <div class="row">
                         
                            <div class="col-md-6">
                                <label for="basicInput">Description</label>
                                <div class="form-group">
                                <textarea id="description" class="form-control" name="description" rows="4" cols="50"></textarea>
                                    @error('description')
                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                      <!--2st Row div end!-->
                       <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Add Product</button>
                        </div>

                    </div>
                 <!--Card body div end!-->
               </form>

                 </div>
            <!--Card div end!-->
        </section>
</div>
@endsection
