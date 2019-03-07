<template>
    <actionable-descriptive-list>
        <user-item v-for="user in users" :user="user" :key="user.id" v-on:remove-staff="$emit('remove-user', { user })"></user-item>
        <div v-if="users.length == 0">
            <p>There aren't any users in this activity yet!</p>
        </div>
    </actionable-descriptive-list>
</template>

<script>
    import UserItem from '@applications/activities/activities/components/UserItem';

    import ActionableDescriptiveList from '@components/lists/basic/ActionableDescriptiveList';

    export default {
        name: "user-list",
        props: {
            users: { required: true, type: Array },
        },
        components: {
            ActionableDescriptiveList,
            UserItem
        },
    }
</script>
