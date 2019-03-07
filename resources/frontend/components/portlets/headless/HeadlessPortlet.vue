<template>
    <div class="m-portlet" :class="portletClass" m-portlet="true">
        <div class="m-portlet__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'headless-portlet',
        props: {
            fullHeight: { required: false, type: Boolean, default: false },
        },
        computed: {
            portletClass: function () {
                return {
                    'm-portlet--full-height': this.fullHeight,
                }
            }
        }
    }
</script>
