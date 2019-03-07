<template>
    <div class="form-group m-form__group row" :class="{ 'has-danger': hasValidationError }">
        <label :class="labelColumnWidth" class="col-form-label">{{ label }}</label>

        <div :class="elementColumnWidth">
            <slot v-if="!readonly"></slot>
            <p v-else class="form-control-static">{{ form[name] }}</p>
            <div v-if="hasValidationError" v-for="error in getValidationErrors" class="form-control-feedback" v-text="error"></div>
            <span class="m-form__help" v-if="!readonly && hasHelper">{{ helper }}</span>
        </div>
    </div>
</template>

<script>
    import Form from '@modules/forms/Form';

    export default {
        name: 'form-row',
        props: {
            form: { required: true, type: Form },
            name: { required: true },
            label: { required: true, type: String },
            columns: { required: false, type: Array, default: () => [3, 9] },
            readonly: { required: false, type: Boolean, default: false },
            helper: { required: false, type: String },
        },
        computed: {
            elementNames: function () {
                return (typeof this.name === 'string') ? [this.name] : this.name;
            },
            labelColumnWidth: function () {
                return `col-md-${this.columns[0]}`;
            },
            elementColumnWidth: function () {
                return `col-md-${this.columns[1]}`;
            },
            hasValidationError: function () {
                for (let x in this.elementNames) {
                    if (this.form.validationErrors.has(this.elementNames[x])) {
                        return true;
                    }
                }

                return false;
            },
            getValidationErrors: function () {
                let errors = [];

                for (let x in this.elementNames) {
                    errors = errors.concat(this.form.validationErrors.get(this.elementNames[x]));
                }

                return errors;
            },
            hasHelper: function () {
                return this.helper && this.helper.length > 0;
            }
        }
    }
</script>
