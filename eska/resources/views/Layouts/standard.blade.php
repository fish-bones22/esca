<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/common.css') }}" />
    @yield('style')
</head>
<body>
@yield('body')
<script src="{{ asset('js/main.js') }}"></script>
@yield('script')
</body>
</html>
