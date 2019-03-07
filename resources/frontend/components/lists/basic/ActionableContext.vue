<template>
    <div class="m-widget4__progress-wrapper">
        <span class="m-widget17__progress-number">{{ title }}</span>
        <span class="m-widget17__progress-label">
            <slot name="labels"></slot>
        </span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'actionable-context',
        props: {
            title: { required: true, type: String },
        }
    }
</script>
