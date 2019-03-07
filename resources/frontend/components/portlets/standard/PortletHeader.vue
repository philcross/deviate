<template>
    <div class="m-portlet__head">
        <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
                    <span class="m-portlet__head-icon" v-if="icon">
                        <i :class="icon"></i>
                    </span>
                <h3 class="m-portlet__head-text">{{ title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "portlet-header",
        props: {
            title: { required: true, type: String },
            icon: { required: false, default: null }
        }
    }
</script>
