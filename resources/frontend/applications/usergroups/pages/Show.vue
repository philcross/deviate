<template>
    <div>
        <feature-header title="Usergroups">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/usergroups/create">Create Usergroup</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content" v-if="usergroup">
            <tabbed-portlet>
                <portlet-tab name="Edit" icon="la la-pencil" :active="true">
                    <edit-core-details-tab :usergroup="usergroup"></edit-core-details-tab>
                </portlet-tab>

                <portlet-tab name="Members" icon="la la-users">
                    <edit-members-tab :usergroup="usergroup"></edit-members-tab>
                </portlet-tab>

                <portlet-tab name="Abilities" icon="la la-unlock-alt">
                    <edit-abilities-tab :usergroup="usergroup"></edit-abilities-tab>
                </portlet-tab>

                <portlet-tab name="Delete" icon="la la-trash">
                    <delete-usergroup-tab :usergroup="usergroup"></delete-usergroup-tab>
                </portlet-tab>
            </tabbed-portlet>
        </div>
    </div>
</template>

<script>
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';

    import EditCoreDetailsTab from '@applications/usergroups/pages/EditCoreDetailsTab';
    import EditMembersTab from '@applications/usergroups/pages/EditMembersTab';
    import EditAbilitiesTab from '@applications/usergroups/pages/EditAbilitiesTab';
    import DeleteUsergroupTab from '@applications/usergroups/pages/DeleteUsergroupTab';

    import PortletTab from '@components/portlets/tabbed/PortletTab';
    import TabbedPortlet from '@components/portlets/tabbed/TabbedPortlet';

    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: 'show-usergroup',
        props: {
            id: { required: true },
            auditLog: { required: false, type: Array, default: () => []},
            systemAbilities: { required: false, type: Array, default: () => [] },
            abilities: { required: false, type: Object, default: () => { return {}; } }
        },
        data: function () {
            return {
                usergroup: null,
            }
        },
        components: {
            PortletTab,
            TabbedPortlet,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            EditCoreDetailsTab,
            EditMembersTab,
            EditAbilitiesTab,
            DeleteUsergroupTab,
        },
        methods: {
            getUsergroup: function () {
                window.axios.get('/usergroups/' + this.id)
                    .then(response => {
                        this.usergroup = response.data.data;
                    })
                    .catch(error => {
                        ErrorBus.record(error.response.data);
                        this.$router.push('/usergroups')
                    });
            },
        },
        mounted: function () {
            this.getUsergroup();
        }
    }
</script>
