<template>
    <div class="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop m-page__container m-body">
        <div class="m-grid__item m-grid__item--fluid m-wrapper">
            <exception-alert target="page" :exception="true"></exception-alert>

            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import ErrorBus from '@modules/errors/ErrorBus';
    import ExceptionAlert from '@components/alerts/ExceptionAlert';

    export default {
        components: {ExceptionAlert},
        name: "app",
        data: function () {
            return {
                hasError: false,
                menu: null,
            }
        },
        mounted: function () {
            let _this = this;

            ErrorBus.$on('exception', function (data) {
                _this.hasError = true;
            });
        }
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
