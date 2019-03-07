<template>
    <div class="m-portlet m-portlet--skin-dark m-portlet--bordered-semi">
        <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <span class="m-portlet__head-icon" v-if="icon">
                        <i :class="icon"></i>
                    </span>
                    <h3 class="m-portlet__head-text">
                        {{ title }}
                    </h3>
                </div>
            </div>
            <div class="m-portlet__head-tools">
                <slot name="tools"></slot>
            </div>
        </div>
        <div class="m-portlet__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dark-portlet',
        props: {
            title: { required: true },
            icon: { required: false, default: null }
        }
    }
</script>
