<template>
    <horizontal-form v-on:submit="$emit('delete-usergroup')">
        <form-column>
            <strong class="text-danger">Are you sure?</strong> Are you sure you want to delete this usergroup? After being deleted, all users will be removed from the usergroup and will loose all abilities associated with it.
        </form-column>

        <form-actions>
            <danger-button :actioning="form.isSubmitting">Confirm Delete</danger-button>
        </form-actions>
    </horizontal-form>
</template>

<script>
    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormActions from '@components/portlets/footers/FormActions';
    import DangerButton from '@components/buttons/submit/DangerButton';
    import FormColumn from '@components/forms/layouts/FormColumn';

    import Form from '@modules/forms/Form';

    export default {
        name: "confirm-delete-form",
        components: {
            FormColumn,
            HorizontalForm,
            DangerButton,
            FormActions
        },
        props: {
            form: { required: true, type: Form },
        }
    }
</script>
