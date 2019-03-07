<template>
    <button class="btn btn-outline-brand m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air" v-on:click.prevent="$emit('click', $event)">
        <i :class="icon"></i>
    </button>
</template>

<script>
    export default {
        name: 'brand-button',
        props: {
            icon: { required: true, type: String },
        }
    }
</script>
