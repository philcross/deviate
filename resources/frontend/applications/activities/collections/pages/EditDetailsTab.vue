<template>
    <collection-form :form="form" :cancel-url="cancelUrl" v-on:submit="updateCollection" submit-label="Update Collection"></collection-form>
</template>

<script>
    import CollectionForm from '@applications/activities/collections/components/CollectionForm';

    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';

    export default {
        name: 'edit-details-tab',
        props: {
            collection: { required: true },
        },
        components: {
            CollectionForm,
        },
        computed: {
            cancelUrl: function () {
                return '/activity-collections/' + this.collection.id;
            },
            form: function () {
                return new Form({
                    name: this.collection.name,
                    description: this.collection.description,
                    booking_opens_at: this.collection.dates.booking.opens,
                    booking_closes_at: this.collection.dates.booking.closes,
                    payment_opens_at: this.collection.dates.payment.opens,
                    payment_closes_at: this.collection.dates.payment.closes,
                    activities_start_at: this.collection.dates.activities.start,
                    activities_end_at: this.collection.dates.activities.end,
                    is_hidden: this.collection.is_hidden,
                });
            }
        },
        methods: {
            updateCollection: function () {
                this.form.put('/activity-collections/'+this.collection.id)
                    .then(response => {
                        (new Toast).success('This collection has been successfully updated.');
                        this.$router.push('/activity-collections/' + this.collection.id);
                    })
                    .catch(error => console.log(error));
            },
        }
    }
</script>

<style scoped>

</style>
