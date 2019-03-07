<template>
    <confirm-delete-form :form="deleteForm" v-on:delete-usergroup="deleteUsergroup"></confirm-delete-form>
</template>

<script>
    import ConfirmDeleteForm from '@applications/usergroups/components/ConfirmDeleteForm';

    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: 'edit-core-details-tab',
        components: {
            ConfirmDeleteForm,
        },
        props: {
            usergroup: { required: true, type: Object },
        },
        data: function () {
            return {
                deleteForm: new Form({}),
            }
        },
        methods: {
            deleteUsergroup: function () {
                this.deleteForm.delete('/usergroups/' + this.usergroup.id)
                    .then(() => {
                        (new Toast).success(this.usergroup.name + ' has been successfully deleted.');
                        this.$router.push('/usergroups');
                    })
                    .catch((error) => ErrorBus.record(error, 'page'));
            },
        }
    }
</script>
