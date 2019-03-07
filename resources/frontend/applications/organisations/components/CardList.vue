<template>
    <div>
        <div class="row" v-if="cardsLoaded">
            <div class="col-md-12" v-if="cards.length">
                <payment-card :card="card" v-for="card in cards" :key="card.id" v-on:delete-card="$emit('delete-card', { card })"></payment-card>
            </div>
            <div class="col-md-12" v-else>
                <informational-alert :dismissible="false" icon="fab fa-cc-stripe">
                    No payment methods have been registered for your organisation.
                </informational-alert>
            </div>
        </div>
        <large-spinner v-else></large-spinner>
    </div>
</template>

<script>
    import PaymentCard from '@applications/organisations/components/PaymentCard';

    import LargeSpinner from '@components/spinners/LargeSpinner';
    import InformationalAlert from "../../../components/alerts/InformationalAlert";


    export default {
        name: 'card-list',
        components: {
            InformationalAlert,
            PaymentCard,
            LargeSpinner
        },
        props: {
            cards: { required: true }
        },
        computed: {
            cardsLoaded: function () {
                return this.cards !== null;
            }
        }
    }
</script>
