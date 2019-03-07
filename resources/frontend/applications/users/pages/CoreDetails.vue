<template>
    <div>
        <feature-header :title="title">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/users/create">Create User</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <div class="row">
                <div class="col-xl-3 col-lg-4">
                    <profile-overview :user="user"></profile-overview>
                </div>
                <div class="col-xl-9 col-lg-8">
                    <headless-portlet>
                        <core-details-form :form="updateForm" v-on:submit="updateUser" v-if="user">
                            <personal-details-form :form="updateForm"></personal-details-form>
                            <password-form :form="updateForm" description="If you would like to update the users password, complete this section. If you do not want to change this users password, leave this section empty."></password-form>
                        </core-details-form>

                        <large-spinner v-else></large-spinner>
                    </headless-portlet>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CoreDetailsForm from '@applications/users/components/CoreDetailsForm';
    import ProfileOverview from '@applications/users/components/ProfileOverview';
    import PersonalDetailsForm from '@applications/users/components/PersonalDetailsForm';
    import PasswordForm from '@applications/users/components/PasswordForm';

    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';
    import LargeSpinner from '@components/spinners/LargeSpinner';
    import HeadlessPortlet from '@components/portlets/headless/HeadlessPortlet';

    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';

    export default {
        name: 'core-details',
        components: {
            HeadlessPortlet,
            CoreDetailsForm,
            ProfileOverview,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            LargeSpinner,
            PersonalDetailsForm,
            PasswordForm,
        },
        props: {
            id: { required: true },
        },
        data: function () {
            return {
                user: null,
                updateForm: new Form({
                    isLoaded: false,
                    forename: '',
                    surname: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                })
            }
        },
        computed: {
            title: function () {
                if (this.user === null) {
                    return 'User Profile';
                } else {
                    return 'User Profile: ' + this.user.name.forename +  ' ' + this.user.name.surname;
                }
            }
        },
        methods: {
            loadUser: function () {
                window.axios.get('/users/' + this.id)
                    .then(response => {
                        this.user = response.data.data;

                        this.updateForm = new Form({
                            isLoaded: true,
                            forename: this.user.name.forename,
                            surname: this.user.name.surname,
                            email: this.user.email,
                            password: '',
                            password_confirmation: '',
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            updateUser: function () {
                this.updateForm.put('/users/' + this.id)
                    .then(() => (new Toast).success('Core details have been successfully updated.'))
                    .catch(error => console.log(error));
            }
        },
        created: function () {
            this.loadUser();
        }
    }
</script>
