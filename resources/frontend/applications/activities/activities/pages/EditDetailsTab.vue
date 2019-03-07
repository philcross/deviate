<template>
    <activity-form :form="form"
                   :collection="collection"
                   :cancel-url="cancelUrl"
                   v-on:submit="updateActivity"
                   submit-label="Update Activity">
    </activity-form>
</template>

<script>
    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';

    import ActivityForm from '@applications/activities/activities/components/ActivityForm';

    export default {
        name: 'edit-details-tab',
        components: {
            ActivityForm,
        },
        props: {
            collection: { required: true },
            activity: { required: true },
        },
        data: function () {
            return {
                form: new Form({
                    name: this.activity.name,
                    description: this.activity.description,
                    places: this.activity.places,
                    price: Number(this.activity.price.raw/100),
                    starts_at: this.activity.dates.starts_at,
                    ends_at: this.activity.dates.ends_at
                }),
            }
        },
        computed: {
            cancelUrl: function () {
                return '/activity-collections/'+this.collection.id+'/activities/'+this.activity.id;
            }
        },
        methods: {
            updateActivity: function () {
                this.form.put('/activity-collections/'+this.collection.id+'/activities/'+this.activity.id)
                    .then(() => (new Toast).success('This activity has been updated.'))
                    .catch(error => console.log(error));
            },
        }
    }
</script>
