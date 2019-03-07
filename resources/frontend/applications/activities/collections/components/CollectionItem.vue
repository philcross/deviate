<template>
    <div class="m-portlet m-portlet--bordered-semi m-portlet--rounded-force" :class="{ 'm-portlet--full-height': fullHeight } ">
        <div class="m-portlet__body">
            <div class="m-widget19">
                <div class="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides" :style="backgroundImage">
                    <h3 class="m-widget19__title m--font-light">
                        {{ collection.name }}
                    </h3>
                    <div class="m-widget19__shadow"></div>
                </div>
                <div class="m-widget19__content">
                    <div class="m-widget19__body" v-html="collection.description"></div>
                </div>
                <div class="m-widget19__action" v-if="withButton">
                    <router-link :to="'/activity-collections/' + collection.id" class="btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom">View Activities</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'collection-item',
        props: {
            collection: { required: true },
            withButton: { required: false, type: Boolean, default: true },
            fullHeight: { required: false, type: Boolean, default: true },
        },
        computed: {
            backgroundImage: function () {
                return 'background-image: url(\'' + this.collection.image + '\')';
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
