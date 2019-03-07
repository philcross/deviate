<template>
    <dark-portlet :title="card.brand" :icon="cardIcon" :class="cardClass">
        <ul class="m-portlet__nav" slot="tools" v-if="isDeleting">
            <li class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
                <a href="#" class="m-portlet__nav-link m-portlet__nav-link--icon m-dropdown__toggle">
                    <i class="la la-ellipsis-v"></i>
                </a>
                <div class="m-dropdown__wrapper" style="z-index: 101;">
                    <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" style="left: auto; right: 16px;"></span>
                    <div class="m-dropdown__inner">
                        <div class="m-dropdown__body">
                            <div class="m-dropdown__content">
                                <ul class="m-nav">
                                    <li class="m-nav__item">
                                        <a href="#" class="m-nav__link" v-on:click.prevent="deleteCard">
                                            <i class="m-nav__link-icon flaticon-share"></i>
                                            <span class="m-nav__link-text text-danger">Delete</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div class="row">
            <div class="col-md-12" style="margin-bottom: 10px;">
                <h6 class="m--font-primary">Card Number</h6>
                <span style="letter-spacing: 2px; font-size: 17px; font-weight: 400;">
                    XXXX XXXX XXXX {{ card.last_4 }}
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <h6 class="m--font-primary">Exp Month</h6>
                <span>{{ card.exp_month }}</span>
            </div>

            <div class="col-md-6">
                <h6 class="m--font-primary">Exp Year</h6>
                <span>{{ card.exp_year }}</span>
            </div>
        </div>
    </dark-portlet>
</template>

<script>
    import DarkPortlet from '@components/portlets/standard/DarkPortlet';

    export default {
        name: 'payment-card',
        components: {
            DarkPortlet
        },
        props: {
            card: { required: true },
        },
        data: function () {
            return {
                isDeleting: false,
            }
        },
        computed: {
            cardClass: function () {
                return {
                    'card-deleting': this.isDeleting,
                };
            },
            cardIcon: function () {
                return {
                    'fab fa-cc-visa': this.card.brand === 'Visa',
                    'fab fa-cc-stripe': this.card.brand !== 'Visa',
                };
            },
        },
        methods: {
            deleteCard: function () {
                this.isDeleting = true;

                this.$emit('delete-card');
            }
        }
    }
</script>

<style scoped>
    .card-deleting {
        opacity: 0.5;
    }
</style>
