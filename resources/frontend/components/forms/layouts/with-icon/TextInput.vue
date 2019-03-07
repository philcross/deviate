<template>
    <div class="m-input-icon m-input-icon--left m-input-icon--right">
        <input type="text" class="form-control m-input m-input--air" :placeholder="placeholder" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
        <span class="m-input-icon__icon m-input-icon__icon--left">
            <span><i :class="icon"></i></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'text-input',
        props: {
            value: { required: true },
            icon: { required: true, type: String },
            placeholder: { required: false, type: String, default: '' }
        }
    }
</script>
