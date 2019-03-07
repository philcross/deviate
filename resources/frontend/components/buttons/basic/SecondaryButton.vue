<template>
    <button type="button" class="btn btn-secondary" v-on:click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'secondary-button'
    }
</script>
