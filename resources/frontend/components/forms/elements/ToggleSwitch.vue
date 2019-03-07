<template>
    <div>
        <span class="m-switch m-switch--icon" :class="sizeClass" v-if="readonly !== true">
            <label>
                <input type="checkbox" :value="checkedValue" :checked="checked" v-on:change="$emit('change', $event)" :true-value="checkedValue" false-value="">
                <span></span>
            </label>
        </span>
        <button v-else-if="readonly === true" class="btn m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air" :class="{ 'btn-primary' : checked, 'btn-danger': !checked }">
            <i class="la" :class="{ 'la-check' : checked, 'la-times': !checked }"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'toggle-switch',
        props: {
            checkedValue: { required: false, default: 1 },
            checked: { required: false },
            size: { required: false, default: 'sm' },
            readonly: { required: false, type: Boolean, default: null },
        },
        computed: {
            sizeClass: function () {
                return {
                    '': this.size !== 'sm' && this.size !== 'lg',
                    'm-switch--sm': this.size === 'sm',
                    'm-switch--lg': this.size === 'lg',
                }
            }
        }
    }
</script>
