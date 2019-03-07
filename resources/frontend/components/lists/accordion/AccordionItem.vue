<template>
    <div class="m-accordion__item">
        <div class="m-accordion__item-head collapsed" role="tab" :id="headId" data-toggle="collapse" :href="'#' + bodyId" aria-expanded="false">
            <span class="m-accordion__item-icon" v-if="icon">
                <i :class="icon"></i>
            </span>
            <span class="m-accordion__item-title">{{ title }} &nbsp; <small v-if="description.length">{{ description }}</small></span>
            <span class="m-accordion__item-mode"></span>
        </div>
        <div class="m-accordion__item-body collapse" :id="bodyId" role="tabpanel" :data-parent="'#' + id">
            <div class="m-accordion__item-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import IdGenerator from '@modules/helpers/IdGenerator';

    export default {
        name: "accordion-item",
        props: {
            id: { required: true },
            icon: { required: false, type: String, default: null },
            title: { required: true, type: String },
            description: { required: false, type: String, default: '' }
        },
        computed: {
            headId: function () {
                return IdGenerator();
            },
            bodyId: function () {
                return IdGenerator()
            }
        }
    }
</script>
