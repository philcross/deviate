<template>
    <div class="row">
        <div class="col-md-4">
            <card-list :cards="cards" v-on:delete-card="deleteCard"></card-list>
        </div>

        <div class="col-md-8">
            <add-payment-method :form="form" v-on:token-generated="storeCard" ref="card_form"></add-payment-method>
        </div>
    </div>
</template>

<script>
    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';

    import CardList from '@applications/organisations/components/CardList';
    import AddPaymentMethod from '@applications/organisations/components/AddPaymentMethod';

    export default {
        name: 'edit-details',
        components: {
            AddPaymentMethod,
            CardList,
        },
        data: function () {
            return {
                form: new Form({
                    token: '',
                }),
                cards: null,
            }
        },
        methods: {
            loadCards: function () {
                window.axios.get('/organisation/billing/cards')
                    .then(response => this.cards = response.data.data)
                    .catch(error => console.log(error));
            },
            deleteCard: function (payload) {
                window.axios.delete('/organisation/billing/cards/'+payload.card.id)
                    .then(() => {
                        this.cards = this.cards.filter(obj => obj.id !== payload.card.id);
                    })
                    .catch(error => console.log(error));
            },
            storeCard: function (payload) {
                this.form.isSubmitting = true;
                this.form.token = payload.token;

                this.form.post('/organisation/billing/cards')
                    .then(response => {
                        this.cards.push(response.data);
                        this.$refs.card_form.clear();

                        (new Toast).success('The payment card has been successfully added to your account.');
                    })
                    .catch(error => console.log(error));
            }
        },
        mounted: function () {
            this.loadCards();
        }
    }
</script>
