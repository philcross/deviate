<!DOCTYPE html>
<html lang="en" >
    <head>
        <meta charset="utf-8" />

        <title>Deviate</title>
        <meta name="description" content="User profile view and edit">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
        <script>
            WebFont.load({
                google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700","Asap+Condensed:500"]},
                active: function() {
                    sessionStorage.fonts = true;
                }
            });
        </script>

        <link href="/assets/vendors/base/vendors.bundle.css" rel="stylesheet" type="text/css" />
        <link href="/assets/demo/demo8/base/style.bundle.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="assets/demo8/demo/media/img/logo/favicon.ico" />
    </head>
    <body style="background-image: url('/assets/app/media/img/bg/bg-7.jpg')" class="m-page--fluid m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default">
        <div class="m-grid m-grid--hor m-grid--root m-page">
            <header id="m_header" class="m-grid__item m-header" m-minimize="minimize" m-minimize-mobile="minimize" m-minimize-offset="10" m-minimize-mobile-offset="10">
                <div class="m-header__top">
                    <div class="m-container m-container--fluid m-container--full-height m-page__container">
                        <div class="m-stack m-stack--ver m-stack--desktop">
                            <div class="m-stack__item m-brand m-stack__item--left">
                                <div class="m-stack m-stack--ver m-stack--general m-stack--inline">
                                    <div class="m-stack__item m-stack__item--middle m-brand__logo">
                                        <a href="index.html" class="m-brand__logo-wrapper">
                                            <img alt="" src="/assets/demo/demo8/media/img/logo/logo.png" class="m-brand__logo-default"/>
                                            <img alt="" src="/assets/demo/demo8/media/img/logo/logo_inverse.png" class="m-brand__logo-inverse"/>
                                        </a>
                                    </div>
                                    <div class="m-stack__item m-stack__item--middle m-brand__tools">
                                        <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                            <span></span>
                                        </a>

                                        <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                            <i class="flaticon-more"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="m-stack__item m-stack__item--middle m-dropdown m-dropdown--arrow m-dropdown--large m-dropdown--mobile-full-width m-dropdown--align-right m-dropdown--skin-light m-header-search m-header-search--expandable- m-header-search--skin-" id="m_quicksearch" m-quicksearch-mode="default">
                                <form class="m-header-search__form">
                                    <div class="m-header-search__wrapper">
                                        <span class="m-header-search__icon-search" id="m_quicksearch_search">
                                            <i class="la la-search"></i>
                                        </span>

                                        <span class="m-header-search__input-wrapper">
                                            <input autocomplete="off" type="text" name="q" class="m-header-search__input" value="" placeholder="Search..." id="m_quicksearch_input">
                                        </span>

                                        <span class="m-header-search__icon-close" id="m_quicksearch_close">
                                            <i class="la la-remove"></i>
                                        </span>

                                        <span class="m-header-search__icon-cancel" id="m_quicksearch_cancel">
                                            <i class="la la-remove"></i>
                                        </span>
                                    </div>
                                </form>

                                <div class="m-dropdown__wrapper">
                                    <div class="m-dropdown__arrow m-dropdown__arrow--center"></div>
                                    <div class="m-dropdown__inner">
                                        <div class="m-dropdown__body">
                                            <div class="m-dropdown__scrollable m-scrollable" data-scrollable="true" data-height="300" data-mobile-height="200">
                                                <div class="m-dropdown__content m-list-search m-list-search--skin-light">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="m-stack__item m-stack__item--right m-header-head" id="m_header_nav">
                                <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
                                    <div class="m-stack__item m-topbar__nav-wrapper">
                                        <ul class="m-topbar__nav m-nav m-nav--inline">
                                            <li class="m-nav__item m-topbar__notifications m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center 	m-dropdown--mobile-full-width" m-dropdown-toggle="click" m-dropdown-persistent="1">
                                                <a href="#" class="m-nav__link m-dropdown__toggle" id="m_topbar_notification_icon">
                                                    <span class="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger"></span>
                                                    <span class="m-nav__link-icon"><span class="m-nav__link-icon-wrapper"><i class="flaticon-music-2"></i></span></span>
                                                </a>
                                                <div class="m-dropdown__wrapper">
                                                    <span class="m-dropdown__arrow m-dropdown__arrow--center"></span>
                                                    <div class="m-dropdown__inner">
                                                        <div class="m-dropdown__header m--align-center">
                                                            <span class="m-dropdown__header-title">9 New</span>
                                                            <span class="m-dropdown__header-subtitle">User Notifications</span>
                                                        </div>
                                                        <div class="m-dropdown__body">
                                                            <div class="m-dropdown__content">
                                                                <ul class="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                                                                    <li class="nav-item m-tabs__item">
                                                                        <a class="nav-link m-tabs__link active" data-toggle="tab" href="#topbar_notifications_notifications" role="tab">
                                                                            Alerts
                                                                        </a>
                                                                    </li>
                                                                    <li class="nav-item m-tabs__item">
                                                                        <a class="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_events" role="tab">Events</a>
                                                                    </li>
                                                                    <li class="nav-item m-tabs__item">
                                                                        <a class="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_logs" role="tab">Logs</a>
                                                                    </li>
                                                                </ul>
                                                                <div class="tab-content">
                                                                    <div class="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
                                                                        <div class="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
                                                                            <div class="m-list-timeline m-list-timeline--skin-light">
                                                                                <div class="m-list-timeline__items">
                                                                                    <div class="m-list-timeline__item">
                                                                                        <span class="m-list-timeline__badge -m-list-timeline__badge--state-success"></span>
                                                                                        <span class="m-list-timeline__text">12 new users registered</span>
                                                                                        <span class="m-list-timeline__time">Just now</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane" id="topbar_notifications_events" role="tabpanel">
                                                                        <div class="m-scrollable" data-scrollable="true" data-height="250" data-mobile-height="200">
                                                                            <div class="m-list-timeline m-list-timeline--skin-light">
                                                                                <div class="m-list-timeline__items">
                                                                                    <div class="m-list-timeline__item">
                                                                                        <span class="m-list-timeline__badge m-list-timeline__badge--state1-success"></span>
                                                                                        <a href="" class="m-list-timeline__text">New order received</a>
                                                                                        <span class="m-list-timeline__time">Just now</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                                                                        <div class="m-stack m-stack--ver m-stack--general" style="min-height: 180px;">
                                                                            <div class="m-stack__item m-stack__item--center m-stack__item--middle">
                                                                                <span class="">All caught up!<br>No new logs.</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="m-nav__item m-topbar__quick-actions m-dropdown m-dropdown--skin-light m-dropdown--large m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                                                <a href="#" class="m-nav__link m-dropdown__toggle">
                                                    <span class="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
                                                    <span class="m-nav__link-icon"><span class="m-nav__link-icon-wrapper"><i class="flaticon-share"></i></span></span>
                                                </a>
                                                <div class="m-dropdown__wrapper">
                                                    <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                                    <div class="m-dropdown__inner">
                                                        <div class="m-dropdown__header m--align-center">
                                                            <span class="m-dropdown__header-title">Quick Actions</span>
                                                            <span class="m-dropdown__header-subtitle">Shortcuts</span>
                                                        </div>
                                                        <div class="m-dropdown__body m-dropdown__body--paddingless">
                                                            <div class="m-dropdown__content">
                                                                <div class="m-scrollable" data-scrollable="false" data-height="380" data-mobile-height="200">
                                                                    <div class="m-nav-grid m-nav-grid--skin-light">
                                                                        <div class="m-nav-grid__row">
                                                                            <a href="#" class="m-nav-grid__item">
                                                                                <i class="m-nav-grid__icon flaticon-file"></i>
                                                                                <span class="m-nav-grid__text">Generate Report</span>
                                                                            </a>
                                                                            <a href="#" class="m-nav-grid__item">
                                                                                <i class="m-nav-grid__icon flaticon-time"></i>
                                                                                <span class="m-nav-grid__text">Add New Event</span>
                                                                            </a>
                                                                        </div>
                                                                        <div class="m-nav-grid__row">
                                                                            <a href="#" class="m-nav-grid__item">
                                                                                <i class="m-nav-grid__icon flaticon-folder"></i>
                                                                                <span class="m-nav-grid__text">Create New Task</span>
                                                                            </a>
                                                                            <a href="#" class="m-nav-grid__item">
                                                                                <i class="m-nav-grid__icon flaticon-clipboard"></i>
                                                                                <span class="m-nav-grid__text">Completed Tasks</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="m-nav__item m-topbar__user-profile  m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                                                <a href="#" class="m-nav__link m-dropdown__toggle">
                                                    <span class="m-topbar__userpic">
                                                        <img src="/assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless m--img-centered" alt=""/>
                                                    </span>
                                                </a>
                                                <div class="m-dropdown__wrapper">
                                                    <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                                    <div class="m-dropdown__inner">
                                                        <div class="m-dropdown__header m--align-center">
                                                            <div class="m-card-user m-card-user--skin-light">
                                                                <div class="m-card-user__pic">
                                                                    <img src="/assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless" alt=""/>
                                                                </div>
                                                                <div class="m-card-user__details">
                                                                    <span class="m-card-user__name m--font-weight-500">Mark Andre</span>
                                                                    <a href="" class="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="m-dropdown__body">
                                                            <div class="m-dropdown__content">
                                                                <ul class="m-nav m-nav--skin-light">
                                                                    <li class="m-nav__section m--hide">
                                                                        <span class="m-nav__section-text">Section</span>
                                                                    </li>
                                                                    <li class="m-nav__item">
                                                                        <a href="profile.html" class="m-nav__link">
                                                                            <i class="m-nav__link-icon flaticon-profile-1"></i>
                                                                            <span class="m-nav__link-title">
                                                                                <span class="m-nav__link-wrap">
                                                                                    <span class="m-nav__link-text">My Profile</span>
                                                                                    <span class="m-nav__link-badge"><span class="m-badge m-badge--success">2</span></span>
                                                                                </span>
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="m-nav__item">
                                                                        <a href="profile.html" class="m-nav__link">
                                                                            <i class="m-nav__link-icon flaticon-share"></i>
                                                                            <span class="m-nav__link-text">Activity</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="m-nav__item">
                                                                        <a href="profile.html" class="m-nav__link">
                                                                            <i class="m-nav__link-icon flaticon-chat-1"></i>
                                                                            <span class="m-nav__link-text">Messages</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="m-nav__separator m-nav__separator--fit">
                                                                    </li>
                                                                    <li class="m-nav__item">
                                                                        <a href="profile.html" class="m-nav__link">
                                                                            <i class="m-nav__link-icon flaticon-info"></i>
                                                                            <span class="m-nav__link-text">FAQ</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="m-nav__item">
                                                                        <a href="profile.html" class="m-nav__link">
                                                                            <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                                                                            <span class="m-nav__link-text">Support</span>
                                                                        </a>
                                                                    </li>
                                                                    <li class="m-nav__separator m-nav__separator--fit">
                                                                    </li>
                                                                    <li class="m-nav__item">
                                                                        <a href="snippets/pages/user/login-1.html" class="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-header__bottom">
                    <div class="m-container m-container--fluid m-container--full-height m-page__container">
                        <div class="m-stack m-stack--ver m-stack--desktop">
                            <div class="m-stack__item m-stack__item--fluid m-header-menu-wrapper">
                                <button class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-light" id="m_aside_header_menu_mobile_close_btn"><i class="la la-close"></i></button>
                                <div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light "  >
                                    <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
                                        <li class="m-menu__item  m-menu__item--submenu m-menu__item--tabs m-menu__item--hover"  m-menu-submenu-toggle="tab" aria-haspopup="true">
                                            <a  href="#" class="m-menu__link m-menu__toggle">
                                                <span class="m-menu__link-text">Dashboard</span>
                                                <i class="m-menu__hor-arrow la la-angle-down"></i>
                                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs">
                                                <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                                                    <ul class="m-menu__subnav">
                                                        <li class="m-menu__item">
                                                            <a href="/#/" class="m-menu__link">
                                                                <i class="m-menu__link-icon flaticon-network"></i>
                                                                <span class="m-menu__link-text">Dashboard</span>
                                                            </a>
                                                        </li>
                                                        <li class="m-menu__item">
                                                            <a href="/#/profile" class="m-menu__link">
                                                                <i class="m-menu__link-icon flaticon-profile-1"></i>
                                                                <span class="m-menu__link-text">My Account</span>
                                                            </a>
                                                        </li>
                                                        <li class="m-menu__item">
                                                            <a href="/logout" class="m-menu__link">
                                                                <i class="m-menu__link-icon flaticon-logout"></i>
                                                                <span class="m-menu__link-text">Logout</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                            </div>
                                        </li>
                                        <li class="m-menu__item  m-menu__item--submenu m-menu__item--tabs"  m-menu-submenu-toggle="tab" aria-haspopup="true">
                                            <a href="#" class="m-menu__link m-menu__toggle">
                                                <span class="m-menu__link-text">Activities</span>
                                                <i class="m-menu__hor-arrow la la-angle-down"></i>
                                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs">
                                                <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                                                <ul class="m-menu__subnav">
                                                    <li class="m-menu__item">
                                                        <a href="/#/activity-collections" class="m-menu__link">
                                                            <i class="m-menu__link-icon flaticon-rocket"></i>
                                                            <span class="m-menu__link-text">List Collections</span>
                                                        </a>
                                                    </li>
                                                    <li class="m-menu__item">
                                                        <a href="/#/activities/my-activities" class="m-menu__link">
                                                            <i class="m-menu__link-icon flaticon-list-2"></i>
                                                            <span class="m-menu__link-text">My Activities</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="m-menu__item  m-menu__item--submenu m-menu__item--tabs" m-menu-submenu-toggle="tab" aria-haspopup="true">
                                            <a href="#" class="m-menu__link m-menu__toggle">
                                                <span class="m-menu__link-text">Organisation</span>
                                                <i class="m-menu__hor-arrow la la-angle-down"></i>
                                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs">
                                                <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                                                <ul class="m-menu__subnav">
                                                    <li class="m-menu__item m-menu__item--submenu m-menu__item--rel m-menu__item--submenu-tabs" m-menu-submenu-toggle="click" aria-haspopup="true">
                                                        <a href="javascript:;" class="m-menu__link m-menu__toggle">
                                                            <i class="m-menu__link-icon flaticon-add"></i>
                                                            <span class="m-menu__link-text">Organisation</span>
                                                            <i class="m-menu__hor-arrow la la-angle-down"></i>
                                                            <i class="m-menu__ver-arrow la la-angle-right"></i>
                                                        </a>
                                                        <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                                                            <span class="m-menu__arrow m-menu__arrow--adjust" style="left: 72px;"></span>
                                                            <ul class="m-menu__subnav">
                                                                <li class="m-menu__item " aria-haspopup="true">
                                                                    <a href="/#/organisation" class="m-menu__link ">
                                                                        <i class="m-menu__link-icon flaticon-list-1"></i>
                                                                        <span class="m-menu__link-title">
                                                                            <span class="m-menu__link-wrap">
                                                                                <span class="m-menu__link-text">Update Details</span>
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li class="m-menu__item " aria-haspopup="true">
                                                                    <a href="/#/organisation/billing" class="m-menu__link ">
                                                                        <i class="m-menu__link-icon flaticon-coins"></i>
                                                                        <span class="m-menu__link-title">
                                                                            <span class="m-menu__link-wrap">
                                                                                <span class="m-menu__link-text">Billing Details</span>
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                                <li class="m-menu__item " aria-haspopup="true">
                                                                    <a href="/#/organisation/plan" class="m-menu__link ">
                                                                        <i class="m-menu__link-icon flaticon-rocket"></i>
                                                                        <span class="m-menu__link-title">
                                                                            <span class="m-menu__link-wrap">
                                                                                <span class="m-menu__link-text">Plan Management</span>
                                                                            </span>
                                                                        </span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li class="m-menu__item">
                                                        <a href="/#/users" class="m-menu__link">
                                                            <i class="m-menu__link-icon flaticon-users"></i>
                                                            <span class="m-menu__link-text">Users</span>
                                                        </a>
                                                    </li>
                                                    <li class="m-menu__item">
                                                        <a href="/#/usergroups" class="m-menu__link">
                                                            <i class="m-menu__link-icon flaticon-multimedia-1"></i>
                                                            <span class="m-menu__link-text">Usergroups</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="app"></div>

            <footer class="m-grid__item m-footer ">
                <div class="m-container m-container--fluid m-container--full-height m-page__container">
                    <div class="m-footer__wrapper">
                        <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                            <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                            <span class="m-footer__copyright">
                                {{ date('Y') }} &copy; Deviate
                            </span>
                            </div>
                            <div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                                <ul class="m-footer__nav m-nav m-nav--inline m--pull-right">
                                    <li class="m-nav__item">
                                        <a href="#" class="m-nav__link">
                                            <span class="m-nav__link-text">About</span>
                                        </a>
                                    </li>
                                    <li class="m-nav__item">
                                        <a href="#"  class="m-nav__link">
                                            <span class="m-nav__link-text">Privacy</span>
                                        </a>
                                    </li>
                                    <li class="m-nav__item">
                                        <a href="#" class="m-nav__link">
                                            <span class="m-nav__link-text">T&C</span>
                                        </a>
                                    </li>
                                    <li class="m-nav__item">
                                        <a href="#" class="m-nav__link" data-toggle="m-tooltip" title="Support Center" data-placement="left">
                                            <i class="m-nav__link-icon flaticon-info m--icon-font-size-lg3"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        <script src="/assets/vendors/base/vendors.bundle.js" type="text/javascript"></script>
        <script src="/assets/demo/demo8/base/scripts.bundle.js" type="text/javascript"></script>
        <script src="https://js.stripe.com/v3/"></script>

        <script type="text/javascript" src="{{ mix('/dist/applications/application.js') }}"></script>
        @stack('js')
    </body>
</html>
