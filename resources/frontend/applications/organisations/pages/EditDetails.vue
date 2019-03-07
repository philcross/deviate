<template>
    <brand-portlet title="Update Organisation Details">
        <horizontal-form v-if="organisation" v-on:submit="updateDetails">
            <form-row :form="form" name="name" label="Organisation Name" helper="Enter the name of your organisation" :columns="[3,6]">
                <input type="text" class="form-control m-input m-input--air" placeholder="Organisation Name" v-model="form.name">
            </form-row>

            <form-row :form="form" name="slug" label="Login Domain" helper="Enter the subdomain you'd like to use to log in. For example, if you use the subdomain 'citrium', you'd login at 'citrium.deviate.app'" :columns="[3,6]">
                <input type="text" class="form-control m-input m-input--air" placeholder="Login Domain" v-model="form.slug">
            </form-row>

            <form-actions>
                <brand-button :actioning="form.isSubmitting">Update Details</brand-button>
                <router-link to="/dashboard">
                    <secondary-button>Cancel</secondary-button>
                </router-link>
            </form-actions>
        </horizontal-form>
        <large-spinner v-else></large-spinner>
    </brand-portlet>
</template>

<script>

    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';

    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormRow from '@components/forms/layouts/FormRow';
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';
    import LargeSpinner from '@components/spinners/LargeSpinner';
    import BrandPortlet from '@components/portlets/standard/BrandPortlet';


    export default {
        name: 'edit-details',
        components: {
            BrandPortlet,
            LargeSpinner,
            HorizontalForm,
            FormRow,
            FormActions,
            BrandButton,
            SecondaryButton,
        },
        data: function () {
            return {
                organisation: null,
                form: new Form({
                    name: '',
                    slug: '',
                }),
            }
        },
        methods: {
            loadOrganisation: function () {
                window.axios.get('/organisation')
                    .then(response => {
                        this.organisation = response.data.data;
                        this.form = new Form({
                            name: this.organisation.name,
                            slug: this.organisation.slug,
                        });
                    })
                    .catch(error => console.log(error));
            },
            updateDetails: function () {
                this.form.put('/organisation')
                    .then(() => (new Toast).success('The organisations details have successfully been updated.'))
                    .catch(error => console.log(error));
            }
        },
        mounted: function () {
            this.loadOrganisation();
        }
    }
</script>
