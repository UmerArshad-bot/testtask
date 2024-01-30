<div id="sidebar" class="active">
    <div class="sidebar-wrapper active">
        <div class="sidebar-header">
            <div class="d-flex justify-content-between">
                <div class="logo">
                    <a ><img src="{{asset('assets/images/logo/logo.png')}}"  style="width:200px;height:70px;margin-bottom:1px" alt="Logo" srcset=""></a>
                </div>
                <div class="toggler">
                    <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                </div>
            </div>
        </div>
        <div class="sidebar-menu">
            <ul class="menu">
               

                <li class="sidebar-item {{ request()->routeIs('dashboard') ? 'active' : '' }} ">
                    <a href="{{route('dashboard')}}" class='sidebar-link'>
                        <i class="bi bi-grid-fill"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="sidebar-item {{ request()->routeIs('add-product') ? 'active' : '' }} ">
                    <a href="{{route('add-product')}}" class='sidebar-link'>
                        <i class="bi bi-plus-square-fill"></i>
                        <span>Create Product</span>
                    </a>
                </li>

                <li class="sidebar-item {{ request()->routeIs('all-products') ? 'active' : '' }} ">
                    <a href="{{route('all-products')}}" class='sidebar-link'>
                        <i class="bi bi-tv-fill"></i>
                        <span>All Products</span>
                    </a>
                </li>
                <li class="sidebar-item {{ request()->routeIs('my-products') ? 'active' : '' }} ">
                    <a href="{{route('my-products')}}" class='sidebar-link'>
                        <i class="bi bi-person-fill"></i>
                        <span>My Product</span>
                    </a>
                </li>

               <li class="sidebar-item {{ request()->routeIs('logout') ? 'active' : '' }} ">
                    <a href="{{route('logout')}}" class='sidebar-link'>
                       <i class="bi bi-door-closed-fill"></i>
                      <span>Logout</span>
                    </a>
                </li>
             </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
    </div>
</div>
