<template>
    <div class="m-alert m-alert--icon m-alert--icon-solid m-alert--outline alert alert-brand fade show" role="alert" :class="alertClass">
        <div class="m-alert__icon">
            <i :class="icon"></i>
            <span></span>
        </div>
        <div class="m-alert__text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'informational-alert',
        props: {
            dismissible: { required: false, type: Boolean, default: true },
            icon: { required: true, type: String }
        },
        computed: {
            alertClass: function () {
                return {
                    'alert-dismissible': this.dismissible
                }
            }
        }
    }
</script>
