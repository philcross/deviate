<template>
    <tr>
        <td><router-link :to="url" class="m-link m--font-bolder">{{ activity.name }}</router-link></td>
        <td>{{ startsAt }}</td>
        <td>{{ endsAt }}</td>
        <td>{{ activity.price.formatted }}</td>
        <td>{{ activity.places }}</td>
    </tr>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'activity-list-item',
        props: {
            activity: { required: true }
        },
        computed: {
            url: function () {
                return '/activity-collections/' + this.activity.collection_id + '/activities/' + this.activity.id;
            },
            startsAt: function () {
                return moment(this.activity.dates.starts_at).format('dddd, MMMM Do');
            },
            endsAt: function () {
                return moment(this.activity.dates.ends_at).format('dddd, MMMM Do');
            }
        }
    }
</script>
