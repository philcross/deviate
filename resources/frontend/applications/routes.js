import ActivityRoutes from './activities/routes';
import UserRoutes from './users/routes';
import UsergroupRoutes from './usergroups/routes';
import OrganisationRoutes from './organisations/routes';

let routes = [];

export default routes.concat(
    ActivityRoutes,
    UserRoutes,
    UsergroupRoutes,
    OrganisationRoutes,
);
