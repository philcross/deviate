<template>
    <div>
        <feature-header title="Create Activity Collection">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/activity-collections/create">Create Collection</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <brand-portlet title="Create new Activity Collection">
                <collection-form :form="form" :cancel-url="cancelUrl" v-on:submit="createCollection" submit-label="Create Collection"></collection-form>
            </brand-portlet>
        </div>
    </div>
</template>

<script>
    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';
    import Form from '@modules/forms/Form';

    import CollectionForm from '@applications/activities/collections/components/CollectionForm';

    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';

    export default {
        name: 'create-collection',
        data: function () {
            return {
                form: new Form({
                    name: '',
                    description: '',
                    booking_opens_at: '',
                    booking_closes_at: '',
                    payment_opens_at: '',
                    payment_closes_at: '',
                    activities_start_at: '',
                    activities_end_at: '',
                    is_hidden: false,
                })
            }
        },
        components: {
            ContextMenuItem,
            ContextMenu,
            FeatureHeader,
            CollectionForm,
            BrandPortlet,
        },
        computed: {
            cancelUrl: function () {
                return '/activity-collections';
            },
        },
        methods: {
            createCollection: function () {
                this.form.post('/activity-collections')
                    .then(response => {
                        (new Toast).success('This collection has been successfully created.');
                        this.$router.push('/activity-collections/' + response.data.data.id);
                    })
                    .catch(error => console.log(error));
            },
        }
    }
</script>
