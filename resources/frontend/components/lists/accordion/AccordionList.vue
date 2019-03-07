<template>
    <div class="m-accordion m-accordion--default" :id="id" role="tablist" :class="accordionClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'accordion-list',
        props: {
            id: { required: true },
            shaded: { required: false, type: Boolean, default: false }
        },
        computed: {
            accordionClass: function () {
                return {
                    'm-accordion--solid': this.shaded,
                }
            }
        }
    }
</script>
