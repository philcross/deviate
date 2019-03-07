<template>
    <div class="m-portlet m-portlet--tabs m-portlet--head-solid-bg" :class="portletClass">
        <div class="m-portlet__head">
            <div class="m-portlet__head-tools">
                <ul class="nav nav-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                    <li v-for="tab in tabs" class="nav-item m-tabs__item">
                        <a href="#" class="nav-link m-tabs__link" :class="{ 'active': tab.isActive }" v-on:click.prevent="selectTab(tab)" role="tab">
                            <i :class="tab.icon"></i> {{ tab.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="m-portlet__body">
            <div class="tab-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabbed-portlet',
        props: {
            isDangerous: { required: false, type: Boolean, default: false },
        },
        data: function () {
            return {
                tabs: [],
            }
        },
        methods: {
            selectTab: function (selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.href === selectedTab.href);
                });

                this.$emit('tab-changed', { selectedTab });
            }
        },
        computed: {
            portletClass: function () {
                return {
                    'm-portlet--brand': !this.isDangerous,
                    'm-portlet--danger': this.isDangerous,
                };
            }
        },
        mounted: function () {
            this.tabs = this.$children;
        },
    }
</script>
