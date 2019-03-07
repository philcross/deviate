<template>
    <div>
        <feature-header title="Users">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/users/create">Create User</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <brand-portlet title="Search Users">
                <search-filters :search="search" v-on:load-users="loadUsers(1)" v-on:reset-filters="resetSearch"></search-filters>
            </brand-portlet>

            <headless-portlet title="Search Users">
                <search-results :users="users" :pagination="pagination" v-on:change-page="loadUsers($event.page)"></search-results>
            </headless-portlet>
        </div>
    </div>
</template>

<script>
    import SearchFilters from '@applications/users/components/SearchFilters';
    import SearchResults from '@applications/users/components/SearchResults';

    import HeadlessPortlet from '@components/portlets/headless/HeadlessPortlet';
    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';

    import ErrorBus from '@modules/errors/ErrorBus';
    import Form from '@modules/forms/Form';

    const DEFAULT_SEARCH_LIMIT = 10;

    export default {
        name: 'search',
        data: function () {
            return {
                users: null,
                search: new Form({
                    term: '',
                    limit: DEFAULT_SEARCH_LIMIT,
                    includeDeactivated: true,
                }),
                pagination: {
                    current: 1,
                    total: 1,
                }
            }
        },
        components: {
            HeadlessPortlet,
            BrandPortlet,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            SearchFilters,
            SearchResults,
        },
        methods: {
            loadUsers: function (page) {
                this.users = null;

                window.axios.get('/users?filters[term]='+ this.search.term + '&limit=' + this.search.limit + '&page=' + page)
                    .then(response => {
                        this.pagination.current = page;
                        this.pagination.total = response.data.meta.last_page;

                        this.users = response.data.data;
                    })
                    .catch(error => {
                        ErrorBus.record(error.response.data);
                    });
            },
            resetSearch: function () {
                this.search = new Form({
                    term: '',
                    limit: DEFAULT_SEARCH_LIMIT,
                    includeDeactivated: true,
                });

                this.loadUsers(1);
            }
        },
        mounted: function () {
            this.loadUsers(1);
        }
    }
</script>
