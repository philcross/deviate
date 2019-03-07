<template>
    <usergroup-details-form :form="updateDetailsForm" submit-label="Update Details" v-on:submit="updateUsergroup"></usergroup-details-form>
</template>

<script>
    import UsergroupDetailsForm from '@applications/usergroups/components/UsergroupDetailsForm';

    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: 'edit-core-details-tab',
        components: {
            UsergroupDetailsForm,
        },
        props: {
            usergroup: { required: true, type: Object },
        },
        data: function () {
            return {
                updateDetailsForm: new Form({
                    name: this.usergroup.name,
                    description: this.usergroup.description,
                })
            }
        },
        methods: {
            updateUsergroup: function () {
                this.updateDetailsForm.put('/usergroups/' + this.usergroup.id)
                    .then(() => (new Toast).success('The usergroup has been successfully updated.'))
                    .catch((error) => ErrorBus.record(error, 'page'));
            },
        }
    }
</script>
