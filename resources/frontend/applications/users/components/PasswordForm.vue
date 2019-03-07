<template>
    <form-section title="Password" :description="description">
        <form-row :form="form" name="password" label="Password" helper="Enter a new password for this user" :columns="[2,6]">
            <input name="password" id="password" type="password" class="form-control m-input m-input--air" placeholder="New Password" v-model="form.password">
        </form-row>

        <form-row :form="form" name="password_confirmation" label="Confirm new password" helper="Confirm the new password for this user" :columns="[2,6]">
            <input name="password_confirmation" id="password_confirmation" type="password" class="form-control m-input m-input--air" placeholder="Confirm New Password" v-model="form.password_confirmation">
        </form-row>
    </form-section>
</template>

<script>
    import FormSection from '@components/forms/layouts/FormSection';
    import FormRow from '@components/forms/layouts/FormRow';

    import Form from '@modules/forms/Form';

    export default {
        name: 'password-form',
        components: {
            FormSection,
            FormRow,
        },
        props: {
            form: { required: true, type: Form },
            description: { required: false, type: String }
        }
    }
</script>

<style scoped>

</style>
