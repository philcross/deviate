<template>
    <div>
        <div>
            <feature-header :title="title">
                <context-menu>
                    <context-menu-item icon="flaticon-plus" url="/activity-collections/create">Create Collection</context-menu-item>
                    <context-menu-item icon="flaticon-plus" :url="'/activity-collections/' + id + '/activities/create'" v-if="collection">Create Activity</context-menu-item>
                </context-menu>
            </feature-header>

            <div class="m-content" v-if="collection">
                <tabbed-portlet :is-dangerous="isDangerousPortlet" v-on:tab-changed="checkPortletTab">
                    <portlet-tab name="Edit" icon="la la-pencil" :active="true">
                        <edit-details-tab :collection="collection"></edit-details-tab>
                    </portlet-tab>

                    <portlet-tab name="Image" icon="la la-image">
                        <edit-image-tab :collection="collection"></edit-image-tab>
                    </portlet-tab>

                    <portlet-tab name="Delete" icon="la la-trash">
                        <confirm-delete-collection-tab :collection="collection"></confirm-delete-collection-tab>
                    </portlet-tab>
                </tabbed-portlet>
            </div>
        </div>
    </div>
</template>

<script>
    import EditDetailsTab from "@applications/activities/collections/pages/EditDetailsTab";
    import EditImageTab from '@applications/activities/collections/pages/EditImageTab';
    import ConfirmDeleteCollectionTab from '@applications/activities/collections/pages/ConfirmDeleteCollectionTab';

    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';
    import LargeSpinner from '@components/spinners/LargeSpinner';
    import TabbedPortlet from '@components/portlets/tabbed/TabbedPortlet';
    import PortletTab from '@components/portlets/tabbed/PortletTab';

    export default {
        name: 'edit-collection',
        props: {
            id: { required: true },
        },
        data: function () {
            return {
                collection: null,
                isDangerousPortlet: false,
            }
        },
        components: {
            EditImageTab,
            ConfirmDeleteCollectionTab,
            EditDetailsTab,
            PortletTab,
            TabbedPortlet,
            LargeSpinner,
            ContextMenuItem,
            ContextMenu,
            FeatureHeader,
        },
        computed: {
            title: function () {
                return this.collection === null ? 'Edit Collection' : 'Edit Collection: ' + this.collection.name;
            }
        },
        methods: {
            loadCollection: function () {
                window.axios.get('/activity-collections/'+this.id)
                    .then(response => {
                        this.collection = response.data.data;
                    })
                    .catch(error => console.log(error));
            },
            checkPortletTab: function (payload) {
                this.isDangerousPortlet = payload.selectedTab.name === 'Delete';
            }
        },
        mounted: function () {
            this.loadCollection();
        }
    }
</script>
