<template>
    <div>
        <div v-if="organisation !== null">
            <div class="row">
                <plan-item :plan="plan"
                           :selected="organisation.plan.id === plan.id"
                           v-on:select-plan="confirmPlanChange(plan)"
                           v-for="plan in plans"
                           :key="plan.id"
                ></plan-item>
            </div>
        </div>
        <large-spinner v-else></large-spinner>
    </div>
</template>

<script>
    import PlanItem from '@applications/organisations/components/PlanItem';

    import MonthlyPlan from '@applications/organisations/data/monthly_plan';
    import AnnualPlan from '@applications/organisations/data/annual_plan';
    import NetworkPlan from '@applications/organisations/data/annual_network_plan';

    import Form from '@modules/forms/Form';
    import Toast from '@modules/alerts/Toast';
    import LargeSpinner from '@components/spinners/LargeSpinner';

    //import Swal from 'sweetalert2'
    import Swal from 'sweetalert2/dist/sweetalert2.js'

    export default {
        name: 'edit-plan',
        components: {
            LargeSpinner,
            PlanItem
        },
        data: function () {
            return {
                organisation: null,
                plans: [
                    MonthlyPlan,
                    AnnualPlan,
                    NetworkPlan,
                ],
                form: new Form({
                    plan_id: ''
                }),
            }
        },
        methods: {
            loadOrganisation: function () {
                window.axios.get('/organisation')
                    .then(response => {
                        this.organisation = response.data.data;

                        this.form = new Form({
                            plan_id: this.organisation.plan.id,
                        });
                    })
                    .catch(error => console.log(error));
            },
            selectPlan: function (plan) {
                this.form.plan_id = plan.id;

                this.form.put('/organisation/plans')
                    .then(() => (new Toast).success('You have successfully subscribed to ' + plan.name))
                    .catch(error => console.log(error));
            },
            confirmPlanChange: function (plan) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "Are you sure you want to change your plan to " + plan.name,
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-brand',
                    cancelButtonClass: 'btn btn-secondary',
                    confirmButtonText: 'Yes, change plan',
                    cancelButtonText: 'Cancel',
                }).then((result) => {
                    if (result.value) {
                        this.selectPlan(plan);
                    }
                })
            }
        },
        mounted: function () {
            this.loadOrganisation();
        }
    }
</script>
