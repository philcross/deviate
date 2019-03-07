<template>
    <div class="m-portlet m-portlet--full-height">
        <div class="m-portlet__body">
            <div class="m-widget12">
                <div class="m-widget12__item">
                    <span class="m-widget12__text1">Booking Opens
                        <br>
                        <span>{{ bookingOpensAt }}</span>
                    </span>
                    <span class="m-widget12__text2">Booking Closes
                        <br>
                        <span>{{ bookingClosesAt }}</span>
                    </span>
                </div>
                <div class="m-widget12__item">
                    <span class="m-widget12__text1">Payment Opens
                        <br>
                        <span>{{ paymentOpensAt }}</span>
                    </span>
                    <span class="m-widget12__text2">Payment Closes
                        <br>
                        <span>{{ paymentClosesAt }}</span>
                    </span>
                </div>
                <div class="m-widget12__item">
                    <span class="m-widget12__text1">Activities Start
                        <br>
                        <span>{{ activitiesStartAt }}</span>
                    </span>
                    <span class="m-widget12__text2">Activities End
                        <br>
                        <span>{{ activitiesEndAt }}</span>
                    </span>
                </div>
                <hr />
                <div class="m-widget12__item">
                    <span class="m-widget12__text1">Total Activities
                        <br>
                        <span>{{ activities }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'collection-details',
        props: {
            collection: { required: true },
            activities: { required: false, type: Number, default: 0 },
        },
        computed: {
            bookingOpensAt: function () {
                return moment(this.collection.dates.booking.opens).format('dddd, MMMM Do');
            },
            bookingClosesAt: function () {
                return moment(this.collection.dates.booking.closes).format('dddd, MMMM Do');
            },
            paymentOpensAt: function () {
                return moment(this.collection.dates.payment.opens).format('dddd, MMMM Do');
            },
            paymentClosesAt: function () {
                return moment(this.collection.dates.payment.closes).format('dddd, MMMM Do');
            },
            activitiesStartAt: function () {
                return moment(this.collection.dates.activities.start).format('dddd, MMMM Do');
            },
            activitiesEndAt: function () {
                return moment(this.collection.dates.activities.end).format('dddd, MMMM Do');
            },
        }
    }
</script>

<style scoped>

</style>
