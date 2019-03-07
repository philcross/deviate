<template>
    <div>
        <feature-header title="Activity Collections">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/activity-collections/create">Create Collection</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <div v-if="collections">
                <div class="row">
                    <div class="col-md-12 pull-right">
                        <pagination-list :current="pagination.current" :last="pagination.total" v-on:change-page="changePage"></pagination-list>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-4 col-md-6 col-xs-12" v-for="collection in collections" :key="collection.id">
                        <image-portlet :image="collection.image" :title="collection.name" :with-button="true" :button-link="'/activity-collections/'+collection.id" button-text="View Activities">
                            <div v-html="collection.description"></div>
                        </image-portlet>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 pull-right">
                        <pagination-list :current="pagination.current" :last="pagination.total" v-on:change-page="changePage"></pagination-list>
                    </div>
                </div>
            </div>
            <large-spinner v-else></large-spinner>
        </div>
    </div>
</template>

<script>
    import PaginationList from '@components/lists/pagination/PaginationList';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';

    import ErrorBus from '@modules/errors/ErrorBus';

    import LargeSpinner from '@components/spinners/LargeSpinner';
    import ImagePortlet from '@components/portlets/widgets/ImagePortlet';

    export default {
        name: 'list-collections',
        data: function () {
            return {
                collections: null,
                pagination: {
                    current: 1,
                    total: 1,
                }
            }
        },
        components: {
            ImagePortlet,
            LargeSpinner,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            PaginationList,
        },
        methods: {
            loadCollections: function (page) {
                page = page ? page : 1;

                window.axios.get('/activity-collections?page=' + page)
                    .then(response => {
                        this.pagination.current = page;
                        this.pagination.total = response.data.meta.last_page;

                        this.collections = response.data.data;
                    })
                    .catch(error => {
                        //ErrorBus.record(error.response.data);
                    });
            },
            changePage: function (payload) {
                this.collections = null;

                this.loadCollections(payload.page);
            }
        },
        mounted: function () {
            this.loadCollections();
        }
    }
</script>
