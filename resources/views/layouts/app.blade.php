<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/grid.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                <img src="{{asset('images/logo_192x192.png')}}" alt="msn" width="40" height="40" class="rounded-circle">
                {{ config('app.name', 'Laravel') }}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" class="form-control" placeholder="Search..."
                                   aria-label="Search" action="{{ 'search' }}">
                        </form>
                    </li>
                </ul>
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <!-- Authentication Links -->
                    @guest
                        @if (Route::has('login'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                        @endif

                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                            </li>
                        @endif
                    @else
                        <li class="nav-item">
                            <a href="{{ url('/home') }}" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/profile') }}">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/dialogs') }}">Dialogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/users') }}">Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/news') }}">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/music') }}">Music</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/settings') }}">Settings</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                <img src="{{asset('images/logo_192x192.png')}}" alt="logo" width="32" height="32" class="rounded-circle">
                                {{ Auth::user()->name}} {{ Auth::user()->id}}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('register') }}">{{ __('Register') }}</a>
                                <a class="dropdown-item" href="{{ route('login') }}">{{ __('Login') }}</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>

                            </div>
                        </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>

    <main class="py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    @yield('content')
                </div>
            </div>
        </div>
    </main>
    <footer class="d-flex  py-3 border-top bg-white shadow-sm">
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img class="bi rounded-circle" width="30" height="30" src="{{asset('images/logo_192x192.png')}}" alt="msn" ></img>
                </a>
                <span class="text-muted">© 2022 Murad Gakhramanov Company, Inc</span>
            </div>

            <ul class="col-md-4 justify-content-end list-unstyled d-flex m-0">
                <li class="ms-3">
                    <a href="https://www.instagram.com/murad.savage" class="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img width="30" height="30" src="{{asset('images/linksIco/instagram.png')}}" alt="img"/>
                    </a>
                </li>
                <li class="ms-3">
                    <a href="https://web.telegram.org/murad_savage" class="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img width="30" height="30" src="{{asset('images/linksIco/telegram.png')}}" alt="img"/>
                    </a>
                </li>
                <li class="ms-3">
                    <a href="https://www.linkedin.com/in/murad-gakhramanov" class="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img width="30" height="30" src="{{asset('images/linksIco/linkedin.png')}}" alt="img"/>
                    </a>
                </li>
                <li class="ms-3">
                    <a href="https://github.com/WakeUpMurad" class="mb-0 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img width="30" height="30" src="{{asset('images/linksIco/github.png')}}" alt="img"/>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</div>
</body>
</html>
