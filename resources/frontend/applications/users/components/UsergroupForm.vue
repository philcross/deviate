<template>
    <brand-portlet title="Edit Usergroups" icon="flaticon-users">
        <horizontal-form v-on:submit="$emit('update-usergroups')">
            <div class="col-md-12">
                <actionable-descriptive-list>
                    <actionable-item v-for="usergroup in usergroups" :key="usergroup.id" :title="usergroup.name" :description="usergroup.description">
                        <toggle-switch :checked-value="usergroup.id" :checked="isMemberOf(usergroup)" v-on:change="$emit('toggle-usergroup', { usergroup })"></toggle-switch>
                    </actionable-item>
                </actionable-descriptive-list>
            </div>

            <form-actions>
                <brand-button :actioning="form.isSubmitting">Update Usergroups</brand-button>
                <secondary-button v-on:click="window.location.href = '/users'">Cancel</secondary-button>
            </form-actions>
        </horizontal-form>
    </brand-portlet>
</template>

<script>
    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import HorizontalForm from '@components/forms/HorizontalForm';
    import ActionableDescriptiveList from '@components/lists/basic/ActionableDescriptiveList';
    import ActionableItem from '@components/lists/basic/ActionableItem';
    import ToggleSwitch from '@components/forms/elements/ToggleSwitch';
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';

    import Form from '@modules/forms/Form';

    export default {
        name: 'usergroup-form',
        components: {
            BrandPortlet,
            HorizontalForm,
            ActionableDescriptiveList,
            ActionableItem,
            ToggleSwitch,
            FormActions,
            BrandButton,
            SecondaryButton,
        },
        props: {
            form: { required: true, type: Form },
            usergroups: { required: false, type: Array, default: () => []}
        },
        methods: {
            isMemberOf: function (usergroup) {
                return this.form.usergroups.indexOf(usergroup.id) > -1;
            }
        }
    }
</script>
