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
                    <div v-if="user">
                        <danger-portlet title="Deactivate User" icon="flaticon-warning-2" :dangerous="true" v-if="user.status === 'active'">
                            <horizontal-form v-on:submit="deactivateUser">
                                <form-column>
                                    <p>Deactivating a user will allow them to remain on the system for historical purposes, but will not allow them to log in or perform any actions. They will also be hidden by default on search lists.</p>
                                    <p>Users can be restored at a later date if they are deactivated. Deactivating a user is a prerequisite of being able to delete a user.</p>
                                    <p>If you are sure you want to deactivate this user, click the confirmation button below.</p>
                                </form-column>

                                <form-actions :offset="false">
                                    <danger-button :actioning="deactivateForm.isSubmitting">Deactivate User</danger-button>
                                </form-actions>
                            </horizontal-form>
                        </danger-portlet>

                        <success-portlet title="Restore User" icon="flaticon-delete-1" v-if="user.status === 'deactivated'">
                            <horizontal-form v-on:submit="restoreUser">
                                <form-column>
                                    <p>Restoring a user will allow them to log back into the system and perform normal tasks. Any previous data they had will be restored as well.</p>
                                    <p>If you are sure you want to restore the user, please click the confirmation button below.</p>
                                </form-column>

                                <form-actions :offset="false">
                                    <success-button :actioning="restoreForm.isSubmitting">Restore User</success-button>
                                </form-actions>
                            </horizontal-form>
                        </success-portlet>

                        <danger-portlet title="Delete User" icon="flaticon-delete-1" :dangerous="true" v-if="user.status === 'deactivated'">
                            <horizontal-form v-on:submit="deleteUser">
                                <form-column>
                                    <p>Deleting a user will remove all their data from the Deviate application, except any payment details. They will no longer be able to access the system, and will need a new account creating.</p>
                                    <p>This action is irreversible. Once deleted, they cannot be restored. If you are absolutely sure you want to <strong>delete</strong> this user, please click the confirmation button below.</p>
                                </form-column>

                                <form-actions :offset="false">
                                    <danger-button :actioning="deleteForm.isSubmitting">Permanently Delete User</danger-button>
                                </form-actions>
                            </horizontal-form>
                        </danger-portlet>
                    </div>
                    <large-spinner v-else></large-spinner>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfileOverview from '@applications/users/components/ProfileOverview';

    import Form from '@modules/forms/Form';
    import ErrorBus from '@modules/errors/ErrorBus';
    import Toast from '@modules/alerts/Toast';

    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormColumn from '@components/forms/layouts/FormColumn';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import SuccessButton from '@components/buttons/submit/SuccessButton';
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import DangerPortlet from '@components/portlets/standard/DangerPortlet';
    import SuccessPortlet from '@components/portlets/standard/SuccessPortlet';
    import DangerButton from '@components/buttons/submit/DangerButton';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';
    import LargeSpinner from '@components/spinners/LargeSpinner';

    export default {
        name: "delete-user",
        components: {
            BrandButton,
            SuccessButton,
            FormColumn,
            DangerButton,
            FormActions,
            HorizontalForm,
            BrandPortlet,
            DangerPortlet,
            SuccessPortlet,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            LargeSpinner,
            ProfileOverview,
        },
        props: {
            id: { required: true },
        },
        data: function () {
            return {
                user: null,
                deactivateForm: new Form,
                deleteForm: new Form,
                restoreForm: new Form,
            }
        },
        methods: {
            loadUser: function () {
                window.axios.get('/users/' + this.id)
                    .then(response => this.user = response.data.data)
                    .catch(error => console.log(error));
            },
            deactivateUser: function () {
                this.deactivateForm.patch('/users/' + this.user.id + '/deactivate')
                    .then(response => {
                        console.log(response);
                        (new Toast).success('User Deactivated', 'This user has successfully been deactivated');
                        this.user = response.data;
                    })
                    .catch(error => ErrorBus.record(error));
            },
            deleteUser: function () {
                this.deleteForm.delete('/users/' + this.user.id)
                    .then(() => {
                        (new Toast).success('User Deactivated', 'This user has successfully been deleted');
                        this.$router.push('/users');
                    })
                    .catch(error => ErrorBus.record(error));
            },
            restoreUser: function () {
                this.restoreForm.patch('/users/' + this.user.id + '/restore')
                    .then(response => {
                        (new Toast).success('User Restored', 'This user has successfully been restored.');
                        this.user = response.data;
                    })
                    .catch(error => ErrorBus.record(error));
            },
        },
        computed: {
            title: function () {
                if (this.user === null) {
                    return 'Deactivate / User';
                }

                if (this.user.status === 'active') {
                    return 'Deactivate ' + this.user.name.forename + ' ' + this.user.name.surname;
                } else if (this.user.status === 'deactivated') {
                    return 'Delete / Restore ' + this.user.name.forename + ' ' + this.user.name.surname;
                }
            }
        },
        mounted: function () {
            this.loadUser();
        }
    }
</script>
