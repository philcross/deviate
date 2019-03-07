<template>
    <div>
        <feature-header title="Create Activity">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/activity-collections/create">Create Collection</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <brand-portlet title="Create new Activity" v-if="collection">
                <activity-form :form="form" :collection="collection" :cancel-url="cancelUrl" v-on:submit="createActivity" submit-label="Create Activity"></activity-form>
            </brand-portlet>
            <large-spinner v-else></large-spinner>
        </div>
    </div>
</template>

<script>
    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';
    import Form from '@modules/forms/Form';

    import ActivityForm from '@applications/activities/activities/components/ActivityForm';

    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';
    import LargeSpinner from '@components/spinners/LargeSpinner';

    export default {
        name: 'create-activity',
        props: {
            id: { required: true },
        },
        data: function () {
            return {
                collection: null,
                form: new Form({
                    name: '',
                    description: '',
                    places: '',
                    price: '',
                    starts_at: '',
                    ends_at: ''
                })
            }
        },
        components: {
            ActivityForm,
            LargeSpinner,
            ContextMenuItem,
            ContextMenu,
            FeatureHeader,
            BrandPortlet,
        },
        computed: {
            cancelUrl: function () {
                return '/activity-collections/' + this.id;
            },
        },
        methods: {
            loadCollection: function () {
                window.axios.get('/activity-collections/'+this.id)
                    .then(response => this.collection = response.data.data)
                    .catch(error => console.log(error));
            },
            createActivity: function () {
                this.form.post('/activity-collections/'+this.id+'/activities')
                    .then(response => {
                        (new Toast).success('This activity has been successfully created.');
                        this.$router.push('/activity-collections/' + this.id + '/activities/' + response.data.id);
                    })
                    .catch(error => console.log(error));
            },
        },
        mounted: function () {
            this.loadCollection();
        }
    }
</script>
