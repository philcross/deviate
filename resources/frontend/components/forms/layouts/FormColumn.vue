<template>
    <div class="form-group row">
        <div :class="columnWidth">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'form-column',
        props: {
            width: { required: false, type: Number, default: 12 }
        },
        computed: {
            columnWidth: function () {
                return 'col-md-' + this.width;
            }
        }
    }
</script>
