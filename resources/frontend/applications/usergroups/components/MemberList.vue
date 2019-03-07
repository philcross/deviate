<template>
    <actionable-descriptive-list>
        <member-item v-for="member in members" :member="member" :key="member.id" v-on:remove-member="$emit('remove-member', { member })"></member-item>
        <div v-if="members.length == 0">
            <p>There aren't any members in this usergroup yet!</p>
        </div>
    </actionable-descriptive-list>
</template>

<script>
    import MemberItem from '@applications/usergroups/components/MemberItem';
    import ActionableDescriptiveList from '@components/lists/basic/ActionableDescriptiveList';

    export default {
        name: "member-list",
        props: {
            members: { required: true, type: Array },
        },
        components: {
            ActionableDescriptiveList,
            MemberItem
        },
    }
</script>
