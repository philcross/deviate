<template>
    <div>
        <feature-header title="Create Usergroup">
            <context-menu>
                <context-menu-item icon="flaticon-search-1" url="/usergroups">Search Usergroups</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <brand-portlet title="Create new Usergroup" icon="flaticon-plus">
                <usergroup-details-form :form="form" v-on:submit="createUsergroup"></usergroup-details-form>
            </brand-portlet>
        </div>
    </div>
</template>

<script>
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';

    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import UsergroupDetailsForm from '@applications/usergroups/components/UsergroupDetailsForm';

    import Form from '@modules/forms/Form';
    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: "create",
        components: {
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            BrandPortlet,
            UsergroupDetailsForm,
        },
        data: function () {
            return {
                form: new Form({
                    name: '',
                    description: '',
                }),
            }
        },
        methods: {
            createUsergroup: function () {
                this.form.post('/usergroups')
                    .then(() => {
                        //
                    })
                    .catch((error) => {
                        ErrorBus.record(error.data.data, 'page')
                    })
                    .then(() => this.$router.push('/usergroups'));
            }
        }
    }
</script>
