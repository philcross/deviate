<template>
    <div class="preloadClass">
        <large-spinner></large-spinner>
    </div>
</template>

<script>
    import LargeSpinner from '@components/spinners/LargeSpinner';

    export default {
        name: "loading-spinner",
        props: {
            align: { required: false, type: String, default: 'center' },
        },
        components: {
            LargeSpinner,
        },
        computed: {
            preloadClass: function () {
                return {
                    'preload-left': this.align === 'left',
                    'preload-center': this.align === 'center',
                    'preload-right': this.align === 'right',
                }
            }
        }
    }
</script>

<style scoped>
    .preload-left {
        text-align: left;
    }

    .preload-center {
        text-align: center;
    }

    .preload-right {
        text-align: right;
    }
</style>
