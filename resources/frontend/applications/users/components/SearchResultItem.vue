<template>
    <tr>
        <th><img :src="user.avatar.url" class="avatar-sm"></th>
        <td><router-link :to="profile" class="m-link m--font-bolder">{{ user.name.forename }} {{ user.name.surname }}</router-link></td>
        <td>{{ user.email }}</td>
        <td>{{ updated_at }}</td>
    </tr>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'search-result-item',
        props: {
            user: { required: true },
        },
        computed: {
            updated_at: function () {
                return moment(this.user.dates.updated_at).format('dddd, MMMM Do YYYY, HH:mm');
            },
            profile: function () {
                return '/users/' + this.user.id;
            }
        }
    }
</script>

<style scoped>
    td {
        vertical-align: middle;
    }

    .avatar-sm {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }
</style>
