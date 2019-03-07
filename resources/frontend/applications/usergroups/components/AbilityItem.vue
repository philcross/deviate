<template>
    <actionable-item :title="ability.name" :description="ability.description">
        <toggle-switch :checked-value="ability.id" :checked="enabled" v-on:change="$emit('toggle-ability', { ability })" :readonly="readonly"></toggle-switch>
    </actionable-item>
</template>

<script>
    import ToggleSwitch from '@components/forms/elements/ToggleSwitch';
    import ActionableItem from '@components/lists/basic/ActionableItem';

    export default {
        components: {
            ToggleSwitch,
            ActionableItem
        },
        name: "ability-item",
        props: {
            ability: { required: true, type: Object },
            enabled: { required: false, type: Boolean, default: false},
            readonly: { required: false, type: Boolean, default: true }
        }
    }
</script>
