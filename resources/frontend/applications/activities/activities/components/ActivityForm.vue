<template>
    <horizontal-form v-on:submit="$emit('submit')">
        <form-section title="Core Details">
            <form-row :form="form" name="name" label="Activity Name" helper="Enter a name for this activity" :columns="[3,6]">
                <input type="text" class="form-control m-input m-input--air" placeholder="Activity Name" v-model="form.name">
            </form-row>

            <form-row :form="form" name="description" label="Activity Description" helper="Enter a description for this activity" :columns="[3,6]">
                <textarea class="form-control m-input m-input--air" placeholder="Activity Description" rows="5" v-model="form.description"></textarea>
            </form-row>

            <form-row :form="form" name="places" label="Activity Places" helper="Enter the number of available spaces for this activity" :columns="[3,6]">
                <input type="number" class="form-control m-input m-input--air" placeholder="Activity Places" v-model="form.places">
            </form-row>

            <form-row :form="form" name="price" label="Activity Price" helper="Enter the price for this activity" :columns="[3,6]">
                <div class="input-group m-input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="la la-gbp"></i></span>
                    </div>
                    <input type="number" class="form-control m-input" placeholder="0" v-model="form.price">
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </form-row>
        </form-section>

        <form-section title="Key Dates">
            <form-row :form="form" :name="['starts_at', 'ends_at']" label="Activity Dates" helper="Select the date that activities start and end for this activity." :columns="[3,6]">
                <range-input>
                    <datetime v-model="form.starts_at" input-class="form-control m-input m-input--air" slot="from" use12-hour :hour-step="1" :minute-step="15" :min-datetime="minDatetime" :max-datetime="maxDatetime"></datetime>
                    <datetime v-model="form.ends_at" input-class="form-control m-input m-input--air" slot="to" use12-hour :hour-step="1" :minute-step="15" :min-datetime="minDatetime" :max-datetime="maxDatetime"></datetime>
                </range-input>
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
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import SecondaryButton from '@components/buttons/basic/SecondaryButton';
    import TextInput from "../../../../components/forms/layouts/with-icon/TextInput";

    export default {
        name: 'activity-form',
        components: {
            TextInput,
            SecondaryButton,
            BrandButton,
            FormActions,
            RangeInput,
            FormRow,
            FormSection,
            HorizontalForm
        },
        props: {
            collection: { required: true },
            form: { required: true, type: Form },
            submitLabel: { required: false, type: String, default: 'Save Changes' },
            cancelUrl: { required: false, type: String, default: '/activity-collections' }
        },
        computed: {
            minDatetime: function () {
                return this.collection ? this.collection.dates.activities.start : '';
            },
            maxDatetime: function () {
                return this.collection ? this.collection.dates.activities.end : '';
            }
        }
    }
</script>
