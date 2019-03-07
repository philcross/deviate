<template>
    <actionable-item :image="user.avatar.url" :title="full_name" :description="user.email" :class="resultClass">
        <template>
            <brand-button icon="fa flaticon-user-add" v-on:click="add" v-if="!isAdding"></brand-button>
            <span v-else class="m-loader m-loader--lg"></span>
        </template>
    </actionable-item>
</template>

<script>
    import ActionableItem from '@components/lists/basic/ActionableItem';
    import BrandButton from '@components/buttons/icon-only/BrandButton';

    export default {
        components: {
            BrandButton,
            ActionableItem
        },
        name: "user-search-item",
        props: {
            user: { required: true, type: Object },
        },
        data: function () {
            return {
                isAdding: false,
            }
        },
        computed: {
            resultClass: function () {
                return {
                    'result': true,
                    'adding': this.isAdding,
                }
            },
            full_name: function () {
                return this.user.name.forename + ' ' + this.user.name.surname;
            }
        },
        methods: {
            add: function () {
                this.isAdding = true;
                this.$emit('add-user');
            }
        }
    }
</script>

<style scoped>
    .result .m-loader {
        vertical-align: middle;
        margin-right: 15px;
    }

    .result.adding {
        opacity: 0.5;
    }
</style>
