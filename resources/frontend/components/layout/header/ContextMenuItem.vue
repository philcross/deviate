<template>
    <li class="m-nav__item">
        <router-link :to="url" class="m-nav__link" v-if="url">
            <i class="m-nav__link-icon" :class="icon"></i>
            <span class="m-nav__link-text">
                <slot></slot>
            </span>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "context-menu-item",
        props: {
            url: { required: false, type: String, default: null },
            icon: { required: true, type: String }
        }
    }
</script>
