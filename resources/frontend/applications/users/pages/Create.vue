<template>
    <div>
        <div class="m-content">
            <brand-portlet title="Create User">
                <core-details-form :form="form" v-on:submit="createUser">
                    <personal-details-form :form="form"></personal-details-form>
                    <password-form :form="form"></password-form>
                </core-details-form>
            </brand-portlet>
        </div>
    </div>
</template>

<script>
    import BrandPortlet from '@components/portlets/standard/BrandPortlet';

    import CoreDetailsForm from '@applications/users/components/CoreDetailsForm';
    import PersonalDetailsForm from '@applications/users/components/PersonalDetailsForm';
    import PasswordForm from '@applications/users/components/PasswordForm';

    import ErrorBus from '@modules/errors/ErrorBus';
    import Form from '@modules/forms/Form';

    export default {
        name: 'search',
        data: function () {
            return {
                form: new Form({
                    forename: '',
                    surname: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                })
            }
        },
        components: {
            CoreDetailsForm,
            BrandPortlet,
            PersonalDetailsForm,
            PasswordForm,
        },
        methods: {
            createUser: function () {
                this.form.post('/users')
                    .then(response => {
                        this.$router.push('/users/'+response.data.id);
                    });
            }
        }
    }
</script>
