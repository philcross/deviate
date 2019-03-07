<template>
    <horizontal-form v-on:submit="$emit('submit')">
        <form-section title="Core Details">
            <form-row :form="form" name="name" label="Collection Name" helper="Enter a name for this collection" :columns="[3,6]">
                <input type="text" class="form-control m-input m-input--air" placeholder="Collection Name" v-model="form.name">
            </form-row>

            <form-row :form="form" name="description" label="Collection Description" helper="Enter a description for this collection" :columns="[3,6]">
                <textarea class="form-control m-input m-input--air" placeholder="Collection Description" rows="5" v-model="form.description"></textarea>
            </form-row>
        </form-section>

        <form-section title="Key Dates">
            <form-row :form="form" :name="['booking_opens_at', 'booking_closes_at']" label="Booking Dates" helper="Select the date that booking opens and closes for this collection." :columns="[3,6]">
                <range-input>
                    <datetime v-model="form.booking_opens_at" input-class="form-control m-input m-input--air" slot="from"></datetime>
                    <datetime v-model="form.booking_closes_at" input-class="form-control m-input m-input--air" slot="to"></datetime>
                </range-input>
            </form-row>
            <form-row :form="form" :name="['payment_opens_at', 'payment_closes_at']" label="Payment Dates" helper="Select the date that payment opens and closes for this collection." :columns="[3,6]">
                <range-input>
                    <datetime v-model="form.payment_opens_at" input-class="form-control m-input m-input--air" slot="from"></datetime>
                    <datetime v-model="form.payment_closes_at" input-class="form-control m-input m-input--air" slot="to"></datetime>
                </range-input>
            </form-row>
            <form-row :form="form" :name="['activities_start_at', 'activities_end_at']" label="Activity Dates" helper="Select the date that activities start and end for this collection." :columns="[3,6]">
                <range-input>
                    <datetime v-model="form.activities_start_at" input-class="form-control m-input m-input--air" slot="from"></datetime>
                    <datetime v-model="form.activities_end_at" input-class="form-control m-input m-input--air" slot="to"></datetime>
                </range-input>
            </form-row>
        </form-section>

        <form-section title="Options">
            <form-row :form="form" name="is_hidden" label="Hide Collection" helper="Choose whether to hide this collection from users." :columns="[3,6]">
                <toggle-switch v-on:change="changeOption('is_hidden', $event)" :checked="form.is_hidden"></toggle-switch>
            </form-row>
        </form-section>

        <form-actions>
            <brand-button :actioning="form.isSubmitting">{{ submitLabel }}</brand-button>
            <router-link :to="cancelUrl">
                <secondary-button>Cancel</secondary-button>
            </router-link>
        </form-actions>
    </horizontal-form>
</template>

<script>
    import Form from '@modules/forms/Form';

    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormSection from '@components/forms/layouts/FormSection';
    import FormRow from '@components/forms/layouts/FormRow';
    import RangeInput from '@components/forms/layouts/with-icon/RangeInput';
    import ToggleSwitch from '@components/forms/elements/ToggleSwitch';
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';

    export default {
        name: 'collection-form',
        components: {
            SecondaryButton,
            BrandButton,
            FormActions,
            ToggleSwitch,
            RangeInput,
            FormRow,
            FormSection,
            HorizontalForm
        },
        props: {
            form: { required: true, type: Form },
            submitLabel: { required: false, type: String, default: 'Save Changes' },
            cancelUrl: { required: false, type: String, default: '/activity-collections'}
        },
        methods: {
            changeOption: function (option, event) {
                this.form[option] = event.target.checked;
            }
        }
    }
</script>
