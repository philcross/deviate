<template>
    <actionable-item :title="name" :description="description" :url="url">
        <actionable-context title="Members" slot="context">
            <wide-badge v-for="(tag, index) in tags" :type="tag.type" :key="index" slot="labels">{{ tag.text }}</wide-badge>

            <avatar-list :members="members"></avatar-list>
        </actionable-context>
    </actionable-item>
</template>

<script>
    import WideBadge from '@components/badges/WideBadge';
    import AvatarList from '@components/lists/avatar/AvatarList';
    import ActionableItem from '@components/lists/basic/ActionableItem';
    import ActionableContext from '@components/lists/basic/ActionableContext';

    export default {
        name: "usergroup-item",
        props: {
            usergroup: { required: true, type: Object },
        },
        data: function () {
            return {
                id: '',
                name: '',
                description: '',
                members: null,
                tags: [],
            }
        },
        computed: {
            url: function () {
                return `/usergroups/${this.id}`;
            }
        },
        components: {
            WideBadge,
            AvatarList,
            ActionableItem,
            ActionableContext,
        },
        mounted: function () {
            this.id = this.usergroup.id;
            this.name = this.usergroup.name;
            this.description = this.usergroup.description;
            this.tags = this.usergroup.tags;
            this.members = this.usergroup.members.data;
        }
    }
</script>
