<template>
    <div>
        <div v-if="users">
            <pagination-list :current="pagination.current" :last="pagination.total" v-on:change-page="$emit('change-page', { page: $event.page})"></pagination-list>

            <table class="table table-hover m-table m-table--head-separator-primary">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr is="searchResultItem" v-for="user in users" :user="user" :key="user.id"></tr>
                </tbody>
            </table>

            <pagination-list :current="pagination.current" :last="pagination.total" v-on:change-page="$emit('change-page', { page: $event.page })"></pagination-list>
        </div>
        <large-spinner v-else></large-spinner>
    </div>
</template>

<script>
    import PaginationList from '@components/lists/pagination/PaginationList';
    import LargeSpinner from '@components/spinners/LargeSpinner';

    import SearchResultItem from '@applications/users/components/SearchResultItem';

    export default {
        name: 'search-results',
        components: {
            PaginationList,
            LargeSpinner,
            SearchResultItem,
        },
        props: {
            users: { required: false, default: null },
            pagination: { required: true },
        }
    }
</script>

<style scoped>
    table > thead > tr > th:first-child,
    table > tbody > tr > td:first-child {
        width: 40px;
    }
</style>
