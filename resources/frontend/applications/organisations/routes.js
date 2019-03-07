const EditDetails = () => import('./pages/EditDetails');
const EditBillingDetails = () => import('./pages/EditBillingDetails');
const EditPlan = () => import('./pages/EditPlan');

export default [
    { path: '/organisation', component: EditDetails },
    { path: '/organisation/billing', component: EditBillingDetails },
    { path: '/organisation/plan', component: EditPlan }
];
