const SearchUsergroups = () => import('./pages/Search');
const ShowUsergroup = () => import('./pages/Show');
const CreateUsergroup = () => import('./pages/Create');

export default [
    { path: '/usergroups', component: SearchUsergroups },
    { path: '/usergroups/create', component: CreateUsergroup },
    { path: '/usergroups/:id', component: ShowUsergroup, props: true },
];
