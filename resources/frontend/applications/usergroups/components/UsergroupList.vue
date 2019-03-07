<template>
    <actionable-descriptive-list :loading="loading">
        <usergroup-item v-for="usergroup in usergroups" :usergroup="usergroup" :key="usergroup.id"></usergroup-item>
    </actionable-descriptive-list>
</template>

<script>
    import ActionableDescriptiveList from '@components/lists/basic/ActionableDescriptiveList';
    import UsergroupItem from "@applications/usergroups/components/UsergroupItem";

    export default {
        name: 'usergroup-list',
        props: {
            usergroups: { required: false, default: null }
        },
        components: {
            UsergroupItem,
            ActionableDescriptiveList,
        },
        computed: {
            loading: function () {
                return this.usergroups === null;
            },
        },
    }
</script>
