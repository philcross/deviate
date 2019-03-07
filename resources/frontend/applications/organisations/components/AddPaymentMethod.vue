<template>
    <brand-portlet title="Add new payment method">
        <horizontal-form v-on:submit="createToken">
            <form-column>
                <div class="row">
                    <div class="col-md-6">
                        <p>To add a new payment method, simply enter the details on the right. Your card details will be passed directly to our payment provider, <a href="https://stripe.com" target="_blank">Stripe</a>, who will securely store the details.</p>
                        <p>You can delete a payment method at any time.</p>
                    </div>

                    <div class="col-md-6">
                        <card class="stripe-card form-control m-input m-input--air"
                              ref="stripe_card"
                              :class="{ complete }"
                              :stripe="stripeKey"
                              @change="complete = $event.complete"
                        />
                    </div>
                </div>
            </form-column>

            <form-actions>
                <brand-button :actioning="form.isSubmitting" :disabled="!complete" class="pull-right">Add Payment Card</brand-button>
            </form-actions>
        </horizontal-form>
    </brand-portlet>
</template>

<script>
    import { Card, createToken } from 'vue-stripe-elements-plus';

    import BrandPortlet from '@components/portlets/standard/BrandPortlet';
    import HorizontalForm from '@components/forms/HorizontalForm';
    import FormActions from '@components/portlets/footers/FormActions';
    import BrandButton from '@components/buttons/submit/BrandButton';
    import FormColumn from '@components/forms/layouts/FormColumn';

    import Form from '@modules/forms/Form';

    export default {
        name: 'add-payment-method',
        components: {
            FormColumn,
            BrandButton,
            FormActions,
            HorizontalForm,
            BrandPortlet,
            Card,
        },
        props: {
            form: { required: true, type: Form },
        },
        computed: {
            stripeKey: function () {
                return 'pk_test_xMcp3uTOLzlCVacFA2XAxeUd';
            }
        },
        data: function () {
            return {
                complete: false,
            }
        },
        methods: {
            clear: function () {
                this.$refs.stripe_card.clear();
            },
            createToken: function () {
                this.form.isSubmitting = true;

                createToken().then(data => {
                    this.$emit('token-generated', {
                        token: data.token.id,
                    });
                });
            }
        }
    }
</script>
