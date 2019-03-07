<template>
    <div>
        <feature-header :title="title">
            <context-menu>
                <context-menu-item icon="flaticon-plus" url="/activity-collections/create">Create Collection</context-menu-item>
                <context-menu-item icon="flaticon-edit-1" :url="'/activity-collections/'+collectionId+'/edit'" v-if="collection">Edit Collection</context-menu-item>
                <context-menu-item icon="flaticon-plus" :url="'/activity-collections/'+collectionId+'/activities/create'" v-if="collection">Create Activity</context-menu-item>
                <context-menu-item icon="flaticon-edit-1" :url="'/activity-collections/'+collectionId+'/activities/'+activityId+'/edit'" v-if="collection && activity">Edit Activity</context-menu-item>
            </context-menu>
        </feature-header>

        <div class="m-content">
            <div v-if="collection && activity">
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <image-portlet :image="activity.image" :title="activity.name" :with-button="false" :full-height="false">
                            <slot>
                                <button type="button" class="btn btn-brand btn-block" style="margin-bottom: 15px;">Book Activity</button>

                                <div v-html="activity.description"></div>
                            </slot>
                        </image-portlet>
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <div class="m-portlet ">
                            <div class="m-portlet__body m-portlet__body--no-padding">
                                <div class="row m-row--no-padding m-row--col-separator-xl">
                                    <div class="col-lg-12">
                                        <div class="m-widget1">
                                            <div class="m-widget1__item">
                                                <div class="row m-row--no-padding align-items-center">
                                                    <div class="col">
                                                        <h3 class="m-widget1__title">Places Left</h3>
                                                        <span class="m-widget1__desc">Total number of places left for this activity</span>
                                                    </div>
                                                    <div class="col m--align-right">
                                                        <span class="m-widget1__number m--font-brand">{{ activity.places }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="m-widget1__item">
                                                <div class="row m-row--no-padding align-items-center">
                                                    <div class="col">
                                                        <h3 class="m-widget1__title">Price</h3>
                                                        <span class="m-widget1__desc">The total cost for this activity</span>
                                                    </div>
                                                    <div class="col m--align-right">
                                                        <span class="m-widget1__number m--font-brand">{{ activity.price.formatted }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="m-widget1__item">
                                                <div class="row m-row--no-padding align-items-center">
                                                    <div class="col">
                                                        <h3 class="m-widget1__title">Starts At</h3>
                                                        <span class="m-widget1__desc">Date and time this activity starts</span>
                                                    </div>
                                                    <div class="col m--align-right">
                                                        <span class="m-widget1__number m--font-brand">{{ startsAt }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="m-widget1__item">
                                                <div class="row m-row--no-padding align-items-center">
                                                    <div class="col">
                                                        <h3 class="m-widget1__title">Ends At</h3>
                                                        <span class="m-widget1__desc">Date and tme this activity ends</span>
                                                    </div>
                                                    <div class="col m--align-right">
                                                        <span class="m-widget1__number m--font-brand">{{ endsAt }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="m-portlet">
                            <div class="m-portlet__head">
                                <div class="m-portlet__head-caption">
                                    <div class="m-portlet__head-title">
                                        <h3 class="m-portlet__head-text">
                                            Activity Files
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="m-portlet__body">
                                <div class="m-widget4">
                                    <div class="m-widget4__item">
                                        <div class="m-widget4__img m-widget4__img--icon">
                                            <img src="/assets/app/media/img/files/doc.svg" alt="">
                                        </div>
                                        <div class="m-widget4__info">
                                            <span class="m-widget4__text">
                                                Metronic Documentation
                                            </span>
                                        </div>
                                        <div class="m-widget4__ext">
                                            <a href="#" class="m-widget4__icon">
                                                <i class="la la-download"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="m-widget4__item">
                                        <div class="m-widget4__img m-widget4__img--icon">
                                            <img src="/assets/app/media/img/files/jpg.svg" alt="">
                                        </div>
                                        <div class="m-widget4__info">
                                            <span class="m-widget4__text">
                                                Make JPEG Great Again
                                            </span>
                                        </div>
                                        <div class="m-widget4__ext">
                                            <a href="#" class="m-widget4__icon">
                                                <i class="la la-download"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="m-widget4__item">
                                        <div class="m-widget4__img m-widget4__img--icon">
                                            <img src="/assets/app/media/img/files/pdf.svg" alt="">
                                        </div>
                                        <div class="m-widget4__info">
                                            <span class="m-widget4__text">
                                                Full Deeveloper Manual For 4.7
                                            </span>
                                        </div>
                                        <div class="m-widget4__ext">
                                            <a href="#" class="m-widget4__icon">
                                                <i class="la la-download"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <large-spinner v-else></large-spinner>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    import PaginationList from '@components/lists/pagination/PaginationList';
    import FeatureHeader from '@components/layout/header/FeatureHeader';
    import ContextMenu from '@components/layout/header/ContextMenu';
    import ContextMenuItem from '@components/layout/header/ContextMenuItem';
    import LargeSpinner from '@components/spinners/LargeSpinner';

    import ErrorBus from '@modules/errors/ErrorBus';

    import CollectionDetails from '@applications/activities/collections/components/CollectionDetails';
    import ActivityList from '@applications/activities/collections/components/ActivityList';
    import ImagePortlet from '@components/portlets/widgets/ImagePortlet';

    export default {
        name: 'show-collection',
        props: {
            collectionId: { required: true },
            activityId: { required: true },
        },
        data: function () {
            return {
                collection: null,
                activity: null,
            }
        },
        components: {
            ImagePortlet,
            ActivityList,
            CollectionDetails,
            LargeSpinner,
            FeatureHeader,
            ContextMenu,
            ContextMenuItem,
            PaginationList,
        },
        computed: {
            title: function () {
                return this.collection === null ? '' : this.collection.name;
            },
            startsAt: function () {
                return moment(this.activity.dates.starts_at).format('dddd, MMMM Do');
            },
            endsAt: function () {
                return moment(this.activity.dates.ends_at).format('dddd, MMMM Do');
            }
        },
        methods: {
            loadCollection: function () {
                window.axios.get('/activity-collections/'+this.collectionId)
                    .then(response => {
                        this.collection = response.data.data;
                    })
                    .catch(error => console.log(error));
            },
            loadActivity: function () {
                window.axios.get('/activity-collections/'+this.collectionId+'/activities/'+this.activityId)
                    .then(response => this.activity = response.data.data)
                    .catch(error => console.log(error));
            }
        },
        mounted: function () {
            this.loadCollection();
            this.loadActivity();
        }
    }
</script>
