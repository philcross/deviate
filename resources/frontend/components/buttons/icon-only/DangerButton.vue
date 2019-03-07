<template>
    <button class="btn btn-outline-danger m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air" v-on:click.prevent="$emit('click', $event)">
        <i :class="icon"></i>
    </button>
</template>

<script>
    export default {
        name: 'danger-button',
        props: {
            icon: { required: true, type: String },
        }
    }
</script>
