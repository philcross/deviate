<template>
    <div class="col-xl-4 col-sm-6">
        <div class="m-portlet m-portlet--head-overlay m-portlet--full-height  m-portlet--rounded-force">
            <div class="m-portlet__body">
                <div class="m-widget27 m-portlet-fit--sides">
                    <div class="m-widget27__pic">
                        <img src="/assets/app/media/img/bg/bg-3.jpg" alt="">
                        <h3 class="m-widget27__title m--font-light">
                            <span>
                                <span>{{ plan.title }}</span><br>
                                {{ plan.price }}
                            </span>
                        </h3>
                        <div class="m-widget27__btn">
                            <button type="button" class="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--bolder" v-on:click="$emit('select-plan')">
                                    <span v-if="selected">
                                        <i class="la la-check"></i>
                                        <span>Selected</span>
                                    </span>
                                <span v-else>Select Plan</span>
                            </button>
                        </div>
                    </div>
                    <div class="m-widget27__container">
                        <div class="m-list-search">
                            <div class="m-list-search__results">
                                <div class="m-list-search__result-item" v-for="(feature, id) in plan.features" :key="id">
                                    <h1>
                                        <span class="m-list-search__result-item-icon">
                                            <i class="m--font-brand" :class="feature.icon"></i>
                                        </span>
                                        <span class="m-list-search__result-item-text">{{ feature.title }}</span>
                                    </h1>
                                    <div class="m-list--search__result-item-description">{{ feature.description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'plan-item',
        props: {
            plan: { required: true },
            selected: { required: false, type: Boolean, default: false }
        }
    }
</script>

<style scope>
    .m-widget27 .m-widget27__container {
        margin: 0px;
    }

    .m-list-search {
        padding: 15px;
    }

    .m-widget27 .m-widget27__pic>img {
        height: 100%;
    }

    .m-list-search .m-list-search__results .m-list-search__result-item {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .m-list-search .m-list-search__results .m-list-search__result-item:not(:last-child) {
        border-bottom: 1px solid #f3f3f3;
    }

    .m-list-search .m-list-search__results .m-list-search__result-item .m-list-search__result-item-text {
        font-size: 1.2rem;
    }

    .m-list--search__result-item-description {
        padding-left: 32px;
    }

    .m-widget27 .m-widget27__pic .m-widget27__title>span {
        line-height: 3.7rem;
    }

    .m-widget27 .m-widget27__pic .m-widget27__title>span>span {
        color: #decdf3;
    }

    .m-widget27 .m-widget27__pic .m-widget27__title {
        width: 90%;
    }
</style>
