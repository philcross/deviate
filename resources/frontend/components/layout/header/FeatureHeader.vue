<template>
    <div class="m-subheader ">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="m-subheader__title">{{ title }}</h3>
            </div>

            <slot></slot>
        </div>

        <!--<bootstrap-alert target="page"></bootstrap-alert>-->
    </div>
</template>

<script>
    // import BootstrapAlert from "./BootstrapAlert";

    export default {
        name: "feature-header",
        props: {
            title: { required: true, type: String },
        },
        components: {
            // BootstrapAlert
        },
    }
</script>
