<template>
    <div v-show="isActive" class="tab-pane active show" role="tabpanel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "portlet-tab",
        props: {
            name: { required: true, type: String },
            icon: { required: false, type: String },
            active: { required: false, type: Boolean, default: false }
        },
        data: function () {
            return {
                isActive: false,
            }
        },
        computed: {
            href: function () {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        mounted: function () {
            this.isActive = this.active;
        }
    }
</script>
