<template>
    <div>
        <feature-header title="Usergroups">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/usergroups/create">Create Usergroup</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <headless-portlet>
                <usergroup-list :usergroups="usergroups"></usergroup-list>
            </headless-portlet>
        </div>
    </div>
</template>

<script>
    import UsergroupList from '@applications/usergroups/components/UsergroupList';

    import HeadlessPortlet from '@components/portlets/headless/HeadlessPortlet';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';

    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: 'search',
        data: function () {
            return {
                usergroups: null,
            }
        },
        components: {
            HeadlessPortlet,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            UsergroupList,
        },
        methods: {
            loadUsergroups: function () {
                window.axios.get('/usergroups')
                    .then(response => {
                        this.usergroups = response.data.data;
                    })
                    .catch(error => {
                        //ErrorBus.record(error.response.data);
                    });
            }
        },
        mounted: function () {
            this.loadUsergroups();
        }
    }
</script>
