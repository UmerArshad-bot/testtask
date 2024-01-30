<!DOCTYPE html>
<html lang="en">

<head>

    <title>@yield('title') </title>
    <link rel="icon" type="image/x-icon" href={{asset('assets/images/Favicon.png')}}>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/jquery.dataTables.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/mobiscroll.javascript.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendors/simple-datatables/style.css')}}">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
    @include('main.include.fonts')
    @include('main.include.head')
    @yield('headerExtra')
</head>
<body>
@yield('bodyExtra')
<div id="app">
    @include('main.include.sidebar')
</div>
<div id="main">
    @yield('content')
    @include('main.include.footer')
</div>
<script src="{{asset('assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js')}}"></script>
<script src="{{asset('assets/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('assets/js/mobiscroll.javascript.min.js')}}"></script>
<script src="{{asset('assets/vendors/apexcharts/apexcharts.js')}}"></script>
<script src="{{asset('assets/js/pages/dashboard.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/vendors/toastify/toastify.js')}}"></script>
<script type="text/javascript" src="{{asset('assets/vendors/simple-datatables/simple-datatables.js')}}"></script>
<script src="{{asset('assets/js/main.js')}}"></script>
<script>
    // Simple Datatable
    let table1 = document.querySelector('#table1');
    let dataTable = new simpleDatatables.DataTable(table1);
</script>

@stack('page_scripts')
@include('main.include.toast')
</body>

</html>
