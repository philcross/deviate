<template>
    <span class="m-badge m-badge--wide" :class="badgeClass">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'wide-badge',
        props: {
            type: { required: false, type: String, default: 'info' },
        },
        computed: {
            badgeClass: function () {
                return {
                    'm-badge--info': this.type === 'info',
                    'm-badge--brand': this.type === 'standard' || this.type === 'brand',
                    'm-badge--accent': this.type === 'warning' || this.type === 'accent',
                    'm-badge--danger': this.type === 'danger',
                }
            }
        }
    }
</script>
