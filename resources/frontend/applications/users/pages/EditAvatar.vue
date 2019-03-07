<template>
    <div>
        <feature-header title="Edit Avatar">
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
                    <brand-portlet title="Manage Avatar" icon="flaticon-confetti">
                        <horizontal-form v-on:submit="updateAvatar">
                            <form-row :form="avatarForm" name="avatar" label="Avatar" :columns="[2,7]">
                                <input class="form-control m-input m-input--air" type="file" name="avatar" id="file" ref="file" v-on:change="attachFileToForm()">
                            </form-row>

                            <form-actions offset="2">
                                <brand-button :actioning="avatarForm.isSubmitting">Update Avatar</brand-button>
                            </form-actions>
                        </horizontal-form>
                    </brand-portlet>

                    <danger-portlet title="Delete Avatar" icon="flaticon-delete-1">
                        <horizontal-form v-on:submit="deleteAvatar">
                            <form-column :width="7">
                                This action will permanently delete this users avatar from the system. Deleted avatars cannot be recovered. If you are sure you want to perform this action, click the delete button below.
                            </form-column>

                            <form-actions :offset="2">
                                <danger-button :actioning="deleteAvatarForm.isSubmitting">Delete Avatar</danger-button>
                            </form-actions>
                        </horizontal-form>
                    </danger-portlet>
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

    import FormRow from '@components/forms/layouts/FormRow';
    import FormColumn from '@components/forms/layouts/FormColumn';
    import HorizontalForm from '@components/forms/HorizontalForm';
    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import DangerPortlet from '@components/portlets/standard/DangerPortlet';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import FormActions from '@components/portlets/footers/FormActions';
    import DangerButton from '@components/buttons/submit/DangerButton';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';
    import HeadlessPortlet from '@components/portlets/headless/HeadlessPortlet';

    export default {
        name: 'edit-avatar',
        components: {
            DangerButton,
            FormColumn,
            FormRow,
            BrandButton,
            FormActions,
            HorizontalForm,
            BrandPortlet,
            DangerPortlet,
            ProfileOverview,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            HeadlessPortlet,
        },
        props: {
            id: { required: true }
        },
        data: function () {
            return {
                user: null,
                avatarForm: new Form({
                    avatar: null,
                }),
                deleteAvatarForm: new Form({}),
            }
        },
        methods: {
            loadUser: function () {
                window.axios.get('/users/' + this.id)
                    .then(response => {
                        this.user = response.data.data;

                        // To cache-bust, add the filename to the url querystring
                        this.user.avatar.url += '?' + this.user.avatar.filename;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            attachFileToForm: function () {
                this.avatarForm.manualSet('avatar', this.$refs.file.files[0]);
            },
            updateAvatar: function () {
                ErrorBus.clear();

                this.avatarForm.upload('/users/' + this.user.id + '/avatar')
                    .then(() => {
                        (new Toast).success('Details Update', `This users core details have been successfully updated.`);
                        this.loadUser();
                    })
                    .catch(error => {
                        ErrorBus.record(error);
                    })
                    .then(() => document.getElementById('file').value='');
            },
            deleteAvatar: function () {
                ErrorBus.clear();

                this.deleteAvatarForm.delete('/users/' + this.user.id + '/avatar')
                    .then(() => {
                        (new Toast).success('Avatar Deleted', 'This users avatar has been successfully deleted.');
                        this.loadUser();
                    })
                    .catch(error => {
                        ErrorBus.record(error);
                    });
            }
        },
        mounted: function () {
            this.loadUser();
        }
    }
</script>
