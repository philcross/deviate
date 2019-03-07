<template>
    <div>
        <feature-header :title="title">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/activity-collections/create">Create Collection</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <tabbed-portlet :is-dangerous="isDangerousPortlet" v-on:tab-changed="checkPortletTab" v-if="collection && activity">
                <portlet-tab name="Edit" icon="la la-pencil" :active="true">
                    <edit-details-tab :activity="activity" :collection="collection"></edit-details-tab>
                </portlet-tab>

                <portlet-tab name="Image" icon="la la-image">
                    <edit-image-tab :collection="collection" :activity="activity"></edit-image-tab>
                </portlet-tab>

                <portlet-tab name="Staff" icon="la la-users">
                    <edit-staff-tab :collection="collection" :activity="activity"></edit-staff-tab>
                </portlet-tab>

                <portlet-tab name="Delete" icon="la la-trash">

                </portlet-tab>
            </tabbed-portlet>
            <large-spinner v-else></large-spinner>
        </div>
    </div>
</template>

<script>
    import ErrorBus from '@modules/errors/ErrorBus';

    import EditDetailsTab from '@applications/activities/activities/pages/EditDetailsTab';
    import EditImageTab from '@applications/activities/activities/pages/EditImageTab';
    import EditStaffTab from '@applications/activities/activities/pages/EditStaffTab';

    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';
    import LargeSpinner from '@components/spinners/LargeSpinner';
    import TabbedPortlet from '@components/portlets/tabbed/TabbedPortlet';
    import PortletTab from '@components/portlets/tabbed/PortletTab';

    export default {
        name: 'edit-activity',
        props: {
            collectionId: { required: true },
            activityId: { required: true }
        },
        data: function () {
            return {
                collection: null,
                activity: null,
                isDangerousPortlet: false,
            }
        },
        components: {
            EditImageTab,
            EditDetailsTab,
            EditStaffTab,
            PortletTab,
            TabbedPortlet,
            LargeSpinner,
            ContextMenuItem,
            ContextMenu,
            FeatureHeader,
            BrandPortlet,
        },
        computed: {
            title: function () {
                return this.activity ? 'Edit Activity: ' + this.activity.name : 'Edit Activity';
            }
        },
        methods: {
            loadCollection: function () {
                window.axios.get('/activity-collections/'+this.collectionId)
                    .then(response => this.collection = response.data.data)
                    .catch(error => console.log(error));
            },
            loadActivity: function () {
                window.axios.get('/activity-collections/'+this.collectionId+'/activities/'+this.activityId)
                    .then(response => {
                        this.activity = response.data.data;
                    })
                    .catch(error => console.log(error));
            },
            checkPortletTab: function () {

            }
        },
        mounted: function () {
            this.loadCollection();
            this.loadActivity();
        }
    }
</script>
