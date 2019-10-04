<div class="col-md-3 left_col">
    <div class="left_col scroll-view">
        <div class="navbar nav_title" style="border: 0;">
            <a href="{{ url('/') }}" class="site_title"><i class="fa fa-cubes"></i> <span>{{ config('app.name',
            'Laravel') }}</span></a>
        </div>
        
        <div class="clearfix"></div>
        
        <!-- menu profile quick info -->
        <div class="profile">
            
            <div class="profile_info">
                <h2>@lang('Welcome'), {{ Auth::user()->name }}</h2>
            </div>
        </div>
        <!-- /menu profile quick info -->
        
        <br />
        
        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu-section">
                <ul class="nav side-menu">
                    <!--  Menu-->
                </ul>
            </div>
        </div>
        <!-- /sidebar menu -->
        
        <!-- /menu footer buttons -->
<!--        <div class="sidebar-footer hidden-small">
            <a>
                <span class="glyphicon"></span>
            </a>
            <a>
                <span class="glyphicon"></span>
            </a>
            <a>
                <span class="glyphicon"></span>
            </a>

            <a data-toggle="tooltip" data-placement="top" title="Logout" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </div>-->
        <!-- /menu footer buttons -->
    </div>
</div>
