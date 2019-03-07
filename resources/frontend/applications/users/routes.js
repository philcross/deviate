const SearchUsers = () => import('./pages/Search');
const CreateUser = () => import('./pages/Create');
const CoreDetails = () => import('./pages/CoreDetails');
const EditAvatar = () => import('./pages/EditAvatar');
const DeleteUser = () => import('./pages/DeleteUser');
const EditUsergroups = () => import('./pages/EditUsergroups');

export default [
    { path: '/users', component: SearchUsers },
    { path: '/users/create', component: CreateUser },
    { path: '/users/:id/avatar', component: EditAvatar, props: true },
    { path: '/users/:id/deactivate', component: DeleteUser, props: true },
    { path: '/users/:id/usergroups', component: EditUsergroups, props: true },
    { path: '/users/:id', component: CoreDetails, props: true },
];
