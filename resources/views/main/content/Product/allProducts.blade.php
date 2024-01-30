@extends('main.mainlayout.layout')
@section('title','All Products')
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
                    <h3>Listings</h3>
                    <p class="text-subtitle text-muted">For User to View All Products</p>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">All Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="card">
                <div class="card-header">
                 
                    <div class="row">
                        <div class="col-10"></div>
                        <div class="col-2">
                            <a type="button" href="{{route('add-product')}}" class="btn btn-primary btn-sm" >Add Product</a>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <table class="table table-striped" id="table1">
                        <thead>
                        <tr>
                             <th>Image</th> 
                            <th>Name</th>
                            <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach($products as $product)
                            <tr>
                            <td><img src="{{asset('assets/ProductImage/'.$product->image)}} "
                                     width="70px" height="70px" alt="image"></td>
                              <td>{{$product->name}}</td>
                              <td>{{$product->description}}</td>
                              </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </div>

@endsection
