const ListActivityCollections = () => import('./collections/pages/ListCollections');
const CreateActivityCollection = () => import('./collections/pages/CreateCollection');
const ShowActivityCollection = () => import('./collections/pages/ShowCollection');
const EditActivityCollection = () => import('./collections/pages/EditCollection');

const CreateActivity = () => import('./activities/pages/CreateActivity');
const ShowActivity = () => import('./activities/pages/ShowActivity');
const EditActivity = () => import('./activities/pages/EditActivity');

export default [
    { path: '/activity-collections/:id/activities/create', component: CreateActivity, props: true },
    { path: '/activity-collections/:collectionId/activities/:activityId/edit', component: EditActivity, props: true },
    { path: '/activity-collections/:collectionId/activities/:activityId', component: ShowActivity, props: true },

    { path: '/activity-collections', component: ListActivityCollections },
    { path: '/activity-collections/create', component: CreateActivityCollection },
    { path: '/activity-collections/:id/edit', component: EditActivityCollection, props: true },
    { path: '/activity-collections/:id', component: ShowActivityCollection, props: true },
];
