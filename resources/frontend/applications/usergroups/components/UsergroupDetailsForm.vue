<template>
    <horizontal-form v-on:submit="$emit('submit')">
        <form-row :form="form" name="name" label="Usergroup Name" helper="Enter a brief name for this usergroup" :columns="[3,6]">
            <input type="text" class="form-control m-input m-input--air" placeholder="Usergroup Name" v-model="form.name">
        </form-row>

        <form-row :form="form" name="description" label="Usergroup Description" helper="Enter a brief description of this usergroup" :columns="[3,6]">
            <textarea class="form-control m-input m-input--air" placeholder="Usergroup Description" rows="5" v-model="form.description"></textarea>
        </form-row>

        <form-actions>
            <brand-button :actioning="form.isSubmitting">{{ submitLabel }}</brand-button>
            <router-link :to="cancelUrl">
                <secondary-button>Cancel</secondary-button>
            </router-link>
        </form-actions>
    </horizontal-form>
</template>

<script>
    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormRow from '@components/forms/layouts/FormRow';
    import FormActions from '@components/portlets/footers/FormActions';

    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';

    import Form from '@modules/forms/Form';

    export default {
        name: "create-usergroup-form",
        props: {
            form: { required: true, type: Form },
            submitLabel: { required: false, type: String, default: 'Save' },
            cancelUrl: { required: false, type: String, default: '/usergroups' },
        },
        components: {
            HorizontalForm,
            FormRow,
            FormActions,
            BrandButton,
            SecondaryButton,
        }
    }
</script>

<style scoped>

</style>
