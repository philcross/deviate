<template>
    <div class="row">
        <div class="col-md-7">
            <member-list :members="members" v-on:remove-member="removeMember"></member-list>
        </div>

        <div class="col-md-5">
            <member-search :usergroup="usergroup" v-on:member-added="addMember"></member-search>
        </div>
    </div>
</template>

<script>
    import MemberList from '@applications/usergroups/components/MemberList';
    import MemberSearch from '@applications/usergroups/components/MemberSearch';

    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: 'edit-members',
        props: {
            usergroup: { required: true, type: Object }
        },
        components: {
            MemberSearch,
            MemberList,
        },
        data: function () {
            return {
                members: []
            }
        },
        methods: {
            removeMember: function (payload) {
                window.axios.delete('/usergroups/' + this.usergroup.id + '/members/' + payload.member.id)
                    .then(() => {
                        this.members = this.members.filter(obj => obj.id !== payload.member.id);
                        (new Toast).success(payload.member.name.forename + ' ' + payload.member.name.surname + ' has been removed from the usergroup.');
                    })
                    .catch(error => {
                        ErrorBus.record(error.response.data);
                    });
            },
            addMember: function (payload) {
                this.members.push(payload.user);
            }
        },
        mounted: function () {
            window.axios.get('/usergroups/' + this.usergroup.id + '/members')
                .then(response => {
                    this.members = response.data.data;
                });
        }
    }
</script>
