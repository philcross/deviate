<template>
    <div>
        <div class="form-group m-form__group row">
            <div class="ml-auto" :class="classes">
                <h3 class="m-form__section">{{ title }}</h3>
                <p v-if="description.length">{{ description }}</p>
            </div>
        </div>

        <slot></slot>

        <div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"></div>
    </div>
</template>

<script>
    export default {
        name: 'form-section',
        props: {
            title: { required: true, type: String },
            description: { required: false, type: String, default: '' },
            width: { required: false, type: Number, default: 10 }
        },
        computed: {
            classes: function () {
                return 'col-' + this.width;
            }
        }
    }
</script>
