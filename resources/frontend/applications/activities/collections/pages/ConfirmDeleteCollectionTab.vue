<template>
    <horizontal-form v-on:submit="deleteCollection">
        <form-column>
            <p>Are you sure you want to delete this activity collection? Deleting the collection will also delete all activities within the collection and unbook all users from activities.</p>
            <p>Payments will not automatically be refunded. <strong>This action cannot be undone.</strong> If you are sure this is what you want to do, click the confirmation button below.</p>
        </form-column>

        <form-actions>
            <danger-button :actioning="form.isSubmitting">Delete Collection</danger-button>
            <router-link :to="'/activity-collections/' + collection.id">
                <secondary-button>Cancel</secondary-button>
            </router-link>
        </form-actions>
    </horizontal-form>
</template>

<script>
    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';
    import Form from '@modules/forms/Form';

    import FormColumn from '@components/forms/layouts/FormColumn';
    import DangerButton from '@components/buttons/basic/DangerButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';
    import FormActions from '@components/portlets/footers/FormActions';
    import HorizontalForm from '@components/forms/HorizontalForm';

    export default {
        name: 'confirm-delete-collection-tab',
        props: {
            collection: { required: true },
        },
        data: function () {
            return {
                form: new Form
            }
        },
        components: {
            HorizontalForm,
            FormActions,
            SecondaryButton,
            DangerButton,
            FormColumn,
        },
        methods: {
            deleteCollection: function () {
                this.form.delete('/activity-collections/'+this.collection)
                    .then(response => {
                        (new Toast).success('You have successfully deleted the collection ');
                        this.$router.push('/activity-collections');
                    })
                    .catch(error => console.log(error));
            },
        }
    }
</script>
