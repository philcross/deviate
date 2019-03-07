<template>
    <div>
        <div class="row" v-if="!isReadonly">
            <div class="col-md-12 text-right">
                <brand-button class="margin-bottom-10" v-on:click="updateAbilities" :actioning="isUpdating">Update Abilities</brand-button>
            </div>
        </div>

        <accordion-list id="ability_groups" :shaded="true">
            <ability-group v-for="group in systemAbilities" :key="group.id" :group="group" :enabled="usergroupAbilities" :readonly="isReadonly" v-on:toggle-ability="toggleAbility"></ability-group>
        </accordion-list>

        <div class="row" v-if="!isReadonly">
            <div class="col-md-12 text-right">
                <brand-button class="margin-bottom-10" v-on:click="updateAbilities" :actioning="isUpdating">Update Abilities</brand-button>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    import AbilityGroup from '@applications/usergroups/components/AbilityGroup';

    import BrandButton from '@components/buttons/basic/BrandButton';
    import AccordionList from '@components/lists/accordion/AccordionList';

    import Toast from '@modules/alerts/Toast';
    import ErrorBus from '@modules/errors/ErrorBus';

    export default {
        name: 'edit-abilities',
        components: {
            BrandButton,
            AccordionList,
            AbilityGroup
        },
        props: {
            usergroup: { required: true, type: Object },
        },
        data: function () {
            return {
                systemAbilities: [],
                usergroupAbilities: [],
                isUpdating: false,
            }
        },
        computed: {
            isReadonly: function () {
                return false;
            }
        },
        methods: {
            loadAbilities: function () {
                window.axios.get('/abilities')
                    .then((response) => {
                        this.systemAbilities = response.data.data;
                    });

                window.axios.get('/usergroups/' + this.usergroup.id + '/abilities')
                    .then((response) => {
                        for (let index in response.data.data) {
                            this.usergroupAbilities.push(response.data.data[index].id);
                        }
                    });
            },
            updateAbilities: function () {
                this.isUpdating = true;

                window.axios.put('/usergroups/' + this.usergroup.id + '/abilities', {
                    abilities: this.usergroupAbilities,
                })
                .then(() => {
                    (new Toast).success('Abilities Updated', `This abilities for this usergroup have been saved.`);
                })
                .catch(error => {
                    ErrorBus.record(error.response.data);
                })
                .then(() => this.isUpdating = false);
            },
            toggleAbility: function (payload) {
                if (_.indexOf(this.usergroupAbilities, payload.ability.id) > -1) {
                    this.usergroupAbilities = this.usergroupAbilities.filter(obj => obj !== payload.ability.id);
                } else {
                    this.usergroupAbilities.push(payload.ability.id);
                }
            }
        },
        created: function () {
            this.loadAbilities();
        }
    }
</script>

<style scoped>
    .margin-bottom-10 {
        margin-bottom: 10px;
    }
</style>
