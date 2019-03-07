<template>
    <actionable-item :title="full_name" :description="member.email" :image="member.avatar.url">
        <danger-button icon="fa flaticon-delete-1" v-on:click="remove" v-if="!removing"></danger-button>
        <div v-else class="m-loader m-loader--lg" style="width: 30px; display: inline-block;"></div>
    </actionable-item>
</template>

<script>
    import ActionableItem from '@components/lists/basic/ActionableItem';
    import DangerButton from '@components/buttons/icon-only/DangerButton';

    export default {
        name: "member-item",
        components: {
            DangerButton,
            ActionableItem
        },
        props: {
            member: { required: true, type: Object }
        },
        data: function () {
            return {
                removing: false,
            }
        },
        computed: {
            removingClass: function () {
                return {
                    'removing': this.removing,
                }
            },
            userProfileUrl: function () {
                return `/users/${this.member.id}`;
            },
            full_name: function () {
                return this.member.name.forename + ' ' + this.member.name.surname;
            }
        },
        methods: {
            remove: function () {
                this.removing = true;

                this.$emit('remove-member');
            }
        }
    }
</script>

<style scoped>
    .removing {
        opacity: 0.5;
    }

    img.avatar {
        max-width: 20px;
        max-height: 20px;
    }

    tr > td {
        vertical-align: middle;
    }
</style>
