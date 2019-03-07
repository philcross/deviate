<template>
    <div>
        <table class="table m-table m-table--head-separator-primary" v-if="activities !== null">
            <thead>
                <tr>
                    <th>Activity</th>
                    <th>Starts</th>
                    <th>Ends</th>
                    <th>Price</th>
                    <th>Places Left</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="activity in activities" :key="activity.id" is="ActivityListItem" :activity="activity"></tr>
            </tbody>
        </table>
        <large-spinner v-else></large-spinner>
    </div>
</template>

<script>
    import LargeSpinner from '@components/spinners/LargeSpinner';

    import ActivityListItem from '@applications/activities/collections/components/ActivityListItem';

    export default {
        name: 'activity-list',
        components: {
            LargeSpinner,
            ActivityListItem,
        },
        props: {
            activities: { required: false, default: null }
        }
    }
</script>
