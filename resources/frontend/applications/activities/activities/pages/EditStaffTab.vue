<template>
    <div class="row">
        <div class="col-md-7">
            <user-list :users="users" v-on:remove-user="removeUser"></user-list>
        </div>

        <div class="col-md-5">
            <staff-search :collection="collection" :activity="activity" v-on:user-added="addUser"></staff-search>
        </div>
    </div>
</template>

<script>
    import UserList from '@applications/activities/activities/components/UserList';
    import StaffSearch from '@applications/activities/activities/components/StaffSearch';

    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: 'edit-staff-tab',
        props: {
            collection: { required: true },
            activity: { required: true }
        },
        components: {
            StaffSearch,
            UserList,
        },
        data: function () {
            return {
                users: []
            }
        },
        methods: {
            removeUser: function (payload) {
                window.axios.delete('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff/' + payload.user.id)
                    .then(() => {
                        this.users = this.users.filter(obj => obj.id !== payload.user.id);
                        (new Toast).success(payload.user.name.forename + ' ' + payload.user.name.surname + ' has been removed from the activity.');
                    })
                    .catch(error => {
                        ErrorBus.record(error.response.data);
                    });
            },
            addUser: function (payload) {
                this.users.push(payload.user);
            }
        },
        mounted: function () {
            window.axios.get('/activity-collections/' + this.collection.id + '/activities/' + this.activity.id + '/staff')
                .then(response => this.users = response.data.data);
        }
    }
</script>
