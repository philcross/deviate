<template>
    <div class="m-portlet m-portlet--brand m-portlet--head-solid-bg">
        <portlet-header :title="title" :icon="icon"></portlet-header>

        <div class="m-portlet__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import PortletHeader from '@components/portlets/standard/PortletHeader';

    export default {
        name: "brand-portlet",
        props: {
            title: { required: true, type: String },
            icon: { required: false, default: null }
        },
        components: {
            PortletHeader,
        },
    }
</script>
