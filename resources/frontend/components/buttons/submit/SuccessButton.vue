<template>
    <button type="submit" class="btn btn-success" :class="buttonClass" :disabled="actioning" v-on:click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'success-button',
        props: {
            actioning: { required: false, type: Boolean, default: false },
        },
        computed: {
            buttonClass: function () {
                return {
                    'm-loader m-loader--light m-loader--right': this.actioning,
                }
            },
        },
    }
</script>
