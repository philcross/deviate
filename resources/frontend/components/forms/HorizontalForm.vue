<template>
    <form class="m-form m-form--fit m-form--label-align-right" v-on:submit.prevent="$emit('submit')" v-on:keydown="$emit('keydown', $event)" v-on:change="$emit('change', $event)">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'horizontal-form'
    }
</script>
