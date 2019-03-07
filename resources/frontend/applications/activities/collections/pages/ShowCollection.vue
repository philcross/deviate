<template>
    <div>
        <feature-header :title="title">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/activity-collections/create">Create Collection</context-menu-item>
                <context-menu-item icon="flaticon-edit-1" :url="'/activity-collections/'+id+'/edit'" v-if="collection">Edit Collection</context-menu-item>
                <context-menu-item icon="flaticon-plus" :url="'/activity-collections/'+id+'/activities/create'" v-if="collection">Create Activity</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <div v-if="collection">
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <image-portlet :image="collection.image" :title="collection.name" :with-button="false">
                            <div v-html="collection.description"></div>
                        </image-portlet>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <collection-details :collection="collection" :activities="32"></collection-details>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="m-portlet m-portlet--full-height">
                            <div class="m-portlet__body">
                                <activity-list :activities="activities" v-if="activities"></activity-list>
                                <large-spinner v-else></large-spinner>
                            </div>
                        </div>
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
    import LargeSpinner from '@components/spinners/LargeSpinner';

    import ErrorBus from '@modules/errors/ErrorBus';

    import CollectionDetails from '@applications/activities/collections/components/CollectionDetails';
    import ActivityList from '@applications/activities/collections/components/ActivityList';
    import ImagePortlet from '@components/portlets/widgets/ImagePortlet';

    export default {
        name: 'show-collection',
        props: {
            id: { required: true },
        },
        data: function () {
            return {
                collection: null,
                activities: null,
            }
        },
        components: {
            ImagePortlet,
            ActivityList,
            CollectionDetails,
            LargeSpinner,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            PaginationList,
        },
        computed: {
            title: function () {
                return this.collection === null ? '' : this.collection.name;
            }
        },
        methods: {
            loadCollection: function () {
                window.axios.get('/activity-collections/'+this.id)
                    .then(response => this.collection = response.data.data)
                    .catch(error => console.log(error));
            },
            loadActivities: function () {
                window.axios.get('/activity-collections/'+this.id+'/activities')
                    .then(response => this.activities = response.data.data)
                    .catch(error => console.log(error));
            }
        },
        mounted: function () {
            this.loadCollection();
            this.loadActivities();
        }
    }
</script>
