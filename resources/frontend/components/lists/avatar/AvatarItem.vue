<template>
    <a :href="url">
        <img :src="avatar" title="">
    </a>
</template>

<script>
    export default {
        name: 'avatar-item',
        props: {
            member: { required: true, type: Object }
        },
        data: function () {
            return {
                avatar: '',
            }
        },
        computed: {
            url: function () {
                return `/users/${this.member.id}`;
            }
        },
        mounted: function () {
            this.avatar = this.member.avatar.url;
        }
    }
</script>
