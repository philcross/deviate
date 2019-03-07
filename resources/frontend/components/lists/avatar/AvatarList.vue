<template>
    <div>
        <div class="m-list-pics m-list-pics--sm" v-if="hasMembers">
            <avatar-item v-for="member in display" :member="member" :key="member.id"></avatar-item>
            <span v-if="remaining">+ {{ remaining }} more</span>
        </div>
        <p v-if="!hasMembers">This usergroup has no members</p>
    </div>
</template>

<script>
    import AvatarItem from '@components/lists/avatar/AvatarItem';

    export default {
        name: 'avatar-list',
        props: {
            members: { required: false, default: () => [] },
            max: { required: false, type: Number, default: 6 },
        },
        data: function () {
            return {
                display_max: 6,
            }
        },
        computed: {
            display: function () {
                return this.members.slice(0, this.display_max);
            },
            remaining: function () {
                return this.members.length - this.display.length;
            },
            hasMembers: function () {
                return this.members
                    && this.members.constructor === Array
                    && this.members.length > 0;
            }
        },
        components: {
            AvatarItem,
        },
        mounted: function () {
            this.display_max = this.max;
        }
    }
</script>
