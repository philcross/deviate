<template>
    <div class="m-portlet__foot m-portlet__foot--fit">
        <div class="m-form__actions m-form__actions--solid">
            <div class="row">
                <div :class="'col-md-' + offset" v-if="offset"></div>
                <div :class="'col-md-' + (12-offset)">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'form-actions',
        props: {
            offset: { required: false, default: 3 }
        }
    }
</script>

<style scoped>
    .m-portlet__body .m-portlet__foot {
        margin-left: -2.2rem;
        margin-right: -2.2rem;
        margin-bottom: -2.2rem;
    }
</style>
