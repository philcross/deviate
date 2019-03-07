<template>
    <div>
        <horizontal-form v-on:submit="$emit('submit')">
            <slot></slot>

            <form-actions>
                <brand-button :actioning="form.isSubmitting">Save</brand-button>
                <secondary-button><router-link to="/users">Cancel</router-link></secondary-button>
            </form-actions>
        </horizontal-form>
    </div>
</template>

<script>
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';
    import FormRow from '@components/forms/layouts/FormRow';
    import HorizontalForm from '@components/forms/HorizontalForm';

    import Form from '@modules/forms/Form';

    export default {
        name: 'core-details-form',
        components: {
            HorizontalForm,
            FormRow,
            SecondaryButton,
            BrandButton,
            FormActions,
        },
        props: {
            form: { required: true, type: Form }
        }
    }
</script>
