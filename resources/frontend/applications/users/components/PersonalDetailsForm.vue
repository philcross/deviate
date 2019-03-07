<template>
    <form-section title="Personal Details" :description="description">
        <form-row :form="form" name="forename" label="Forename" helper="Enter this users forename" :columns="[2,6]">
            <input name="forename" id="forename" type="text" class="form-control m-input m-input--air" placeholder="Forename" v-model="form.forename">
        </form-row>

        <form-row :form="form" name="surname" label="Surname" helper="Enter this users surname" :columns="[2,6]">
            <input name="surname" id="surname" type="text" class="form-control m-input m-input--air" placeholder="Surname" v-model="form.surname">
        </form-row>

        <form-row :form="form" name="email" label="Email Address" helper="Enter this users email address. They will log in with this." :columns="[2,6]">
            <input name="forename" id="email" type="email" class="form-control m-input m-input--air" placeholder="Email Address" v-model="form.email">
        </form-row>
    </form-section>
</template>

<script>
    import FormSection from '@components/forms/layouts/FormSection';
    import FormRow from '@components/forms/layouts/FormRow';

    import Form from '@modules/forms/Form';

    export default {
        name: 'personal-details-form',
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
