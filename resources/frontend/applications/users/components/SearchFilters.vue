<template>
    <horizontal-form v-on:submit="$emit('load-users')">
        <div class="row">
            <div class="col-md-6">
                <form-row :form="search" name="term" label="Search Term" helper="The search term can contain names (or partial names), or email addresses (or partial email addresses)">
                    <input type="text" class="form-control m-input" placeholder="Search Term" v-model="search.term">
                </form-row>
            </div>
            <div class="col-md-6">
                <form-row :form="search" name="limit" label="Results Per Page" :columns="[4, 8]" help="How many results would you like per page">
                    <select name="limit" class="form-control" v-model="search.limit">
                        <option value="1">1</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </form-row>
                <form-row :form="search" name="includeDeactivated" label="Include Deactivated Users" :columns="[4, 8]">
                    <toggle-switch :checked-value="1" :checked="search.includeDeactivated" v-on:change="search.includeDeactivated = Number($event.target.checked)"></toggle-switch>
                </form-row>
            </div>
        </div>

        <form-actions>
            <brand-button>Search</brand-button>
            <secondary-button v-on:click="$emit('reset-filters')">Reset</secondary-button>
        </form-actions>
    </horizontal-form>
</template>

<script>
    import Form from '@modules/forms/Form';

    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';
    import FormActions from '@components/portlets/footers/FormActions';
    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormRow from '@components/forms/layouts/FormRow';
    import ToggleSwitch from '@components/forms/elements/ToggleSwitch';

    export default {
        name: 'search-filters',
        props: {
            search: { required: true, type: Form }
        },
        components: {
            SecondaryButton,
            BrandButton,
            FormActions,
            HorizontalForm,
            FormRow,
            ToggleSwitch,
        }
    }
</script>
