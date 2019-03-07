<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Deviate | Login</title>
        <meta name="description" content="Latest updates and statistic charts">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
        <script>
            WebFont.load({
                google: {
                    "families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700"]
                },
                active: function() {
                    sessionStorage.fonts = true;
                }
            });
        </script>

        <link href="/assets/vendors/base/vendors.bundle.css" rel="stylesheet" type="text/css" />
        <link href="/assets/demo/default/base/style.bundle.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/assets/demo/default/media/img/logo/favicon.ico" />
    </head>
    <body class="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
        <div class="m-grid m-grid--hor m-grid--root m-page">
            <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1" id="m_login" style="background-image: url(/assets/app/media/img//bg/bg-1.jpg);">
                <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
                    <div class="m-login__container" id="app">
                        <div class="m-login__logo">
                            <a href="#">
                                <img src="/assets/app/media/img//logos/logo-1.png">
                            </a>
                        </div>
                        <login-form></login-form>
                    </div>
                </div>
            </div>
        </div>

        <script src="/dist/vendors/base/vendors.bundle.js" type="text/javascript"></script>
        <script src="/dist/js/core.bundle.js" type="text/javascript"></script>
        <script src="{{ mix('/dist/js/app.js') }}" type="text/javascript"></script>
        <script src="{!! mix('/dist/applications/login.js') !!}" type="text/javascript"></script>
    </body>
</html>
