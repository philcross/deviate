<template>
    <accordion-item id="ability_group" :icon="group.icon" :title="group.name" :description="group.description">
        <actionable-descriptive-list>
            <ability-item v-for="ability in group.abilities.data" :key="ability.id" :ability="ability" :enabled="isEnabled(ability)" :readonly="readonly" v-on:toggle-ability="toggleAbility"></ability-item>
        </actionable-descriptive-list>
    </accordion-item>
</template>

<script>
    import _ from 'lodash';

    import AbilityItem from '@applications/usergroups/components/AbilityItem';

    import AccordionItem from '@components/lists/accordion/AccordionItem';
    import ActionableDescriptiveList from '@components/lists/basic/ActionableDescriptiveList';

    export default {
        name: 'ability-group',
        components: {
            ActionableDescriptiveList,
            AccordionItem,
            AbilityItem
        },
        props: {
            group: { required: true, type: Object },
            enabled: { required: false, type: Array, default: () => []},
            readonly: { required: false, type: Boolean, default: true }
        },
        methods: {
            toggleAbility: function (payload) {
                this.$emit('toggle-ability', {
                    ability: payload.ability
                });
            },
            isEnabled: function (ability) {
                return _.indexOf(this.enabled, ability.id) > -1;
            }
        }
    }
</script>
