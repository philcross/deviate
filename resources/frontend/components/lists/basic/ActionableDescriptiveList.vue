<template>
    <div>
        <loading-spinner v-if="loading"></loading-spinner>
        <div class="m-widget4 m-widget4--progress" v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import LoadingSpinner from '@components/spinners/LoadingSpinner';

    export default {
        name: 'actionable-descriptive-list',
        components: {
            LoadingSpinner
        },
        props: {
            loading: { required: false, type: Boolean, default: false},
        }
    }
</script>
