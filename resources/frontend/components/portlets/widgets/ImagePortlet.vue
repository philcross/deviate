<template>
    <div class="m-portlet m-portlet--bordered-semi m-portlet--rounded-force" :class="{ 'm-portlet--full-height': fullHeight } ">
        <div class="m-portlet__body">
            <div class="m-widget19">
                <div class="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" :style="backgroundImage">
                    <h3 class="m-widget19__title m--font-light">
                        {{ title }}
                    </h3>
                    <div class="m-widget19__shadow"></div>
                </div>
                <div class="m-widget19__content">
                    <div class="m-widget19__body">
                        <slot></slot>
                    </div>
                </div>
                <div class="m-widget19__action" v-if="withButton">
                    <slot name="button">
                        <router-link :to="buttonLink" class="btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom">{{ buttonText }}</router-link>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'image-portlet',
        props: {
            image: { required: true, type: String },
            title: { required: false, type: String, default: ''},
            fullHeight: { required: false, type: Boolean, default: true },
            withButton: { required: false, type: Boolean, default: false },
            buttonLink: { required: false, type: String, default: '' },
            buttonText: { required: false, type: String, default: '' },
        },
        computed: {
            backgroundImage: function () {
                return 'background-image: url(\'' + this.image + '\')';
            }
        }
    }
</script>

<style scoped>
    .m-portlet.m-portlet--bordered-semi .m-portlet-fit--top {
        height: 286px;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .m-widget19 .m-widget19__content {
        margin-top: 2rem;
    }
</style>
