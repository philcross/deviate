<template>
    <div class="m-widget4__item">
        <div class="m-widget4__img m-widget4__img--logo" v-if="image">
            <img :src="image" alt="">
        </div>
        <div class="m-widget4__info">
            <span class="m-widget4__title">
                <router-link :to="url" v-if="url">{{ title }}</router-link>
                <span v-else>{{ title }}</span>
            </span>
            <br>
            <span class="m-widget4__sub">{{ description }}</span>
        </div>
        <div class="m-widget4__progress">
            <slot name="context"></slot>
        </div>
        <div class="m-widget4__ext">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'actionable-item',
        props: {
            title: { required: true, type: String },
            description: { required: true, type: String },
            image: { required: false },
            url: { required: false, default: false }
        }
    }
</script>

<style scoped>
    .m-widget4__item {
        width: 100%;
    }
</style>
