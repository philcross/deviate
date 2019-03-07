<template>
    <div class="input-group">
        <slot name="from"></slot>
        <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">{{ label }}</span>
        </div>
        <slot name="to"></slot>
    </div>
</template>

<script>
    export default {
        name: 'range-input',
        props: {
            label: { required: false, type: String, default: 'to' },
        }
    }
</script>

