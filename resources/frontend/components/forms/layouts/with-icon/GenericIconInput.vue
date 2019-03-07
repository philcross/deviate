<template>
    <div class="m-input-icon m-input-icon--left m-input-icon--right">
        <slot></slot>
        <span class="m-input-icon__icon m-input-icon__icon--left">
            <span><i :class="icon"></i></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'generic-icon-input',
        props: {
            icon: { required: true, type: String },
        }
    }
</script>

<style scoped>

</style>
