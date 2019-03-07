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
                    <usergroup-form :form="form" :usergroups="usergroups" v-on:toggle-usergroup="toggleUsergroup" v-on:update-usergroups="updateUsergroups()"></usergroup-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    import ProfileOverview from '@applications/users/components/ProfileOverview';
    import UsergroupForm from '@applications/users/components/UsergroupForm';

    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';

    import ErrorBus from '@modules/errors/ErrorBus';
    import Toast from '@modules/alerts/Toast';
    import Form from '@modules/forms/Form';

    export default {
        name: "update-usergroups",
        components: {
            UsergroupForm,
            ProfileOverview,
            FeatureHeader,
            ContextMenuItem,
            ContextMenu,
        },
        props: {
            id: { required: true },
        },
        data: function () {
            return {
                usergroups: [],
                user: null,
                form: new Form({
                    usergroups: []
                }),
            }
        },
        computed: {
            title: function () {
                return this.user === null
                    ? 'Edit Usergroups'
                    : 'Edit Usergroups for ' + this.user.name.forename + ' ' + this.user.name.surname;
            }
        },
        methods: {
            loadUser: function () {
                window.axios.get('/users/' + this.id + '/usergroups')
                    .then(response => {
                        this.form.usergroups = response.data.data.map(function (usergroup) {
                            return usergroup.id;
                        });
                    })
                    .catch(error => console.log(error));

                window.axios.get('/users/' + this.id)
                    .then(response => {
                        this.user = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            loadUsergroups: function () {
                window.axios.get('/usergroups')
                    .then(response => {
                        this.usergroups = response.data.data;
                    })
                    .catch(error => console.log(error));
            },
            updateUsergroups: function () {
                this.form.put('/users/'+this.user.id+'/usergroups')
                    .then(() => (new Toast).success('Usergroups Updated', `This usergroups for this user have been updated.`))
                    .catch(error => console.log(error));
            },
            toggleUsergroup: function (payload) {
                if (_.indexOf(this.form.usergroups, payload.usergroup.id) > -1) {
                    this.form.usergroups = this.form.usergroups.filter(obj => obj !== payload.usergroup.id);
                } else {
                    this.form.usergroups.push(payload.usergroup.id);
                }
            },
        },
        created: function () {
            this.loadUser();
            this.loadUsergroups();
        }
    }
</script>
