import { Routes } from '@angular/router';
import { VisionUsersComponent } from './vision-users/vision-users.component';

const Routing: Routes = [
  { path: 'vision-users', component: VisionUsersComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./myProject/control-panal/control-panal.module').then((m) => m.ControlPanalModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: 'dark-header' },
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    data: { layout: 'light-header' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
    data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'permissions',
    loadChildren: () =>
      import('../pages/myProject/Initialization/permission/permission.module').then((m) => m.PermissionModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('../pages/myProject/staff-management/staff-management.module').then((m) => m.StaffManagementModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'branches',
    loadChildren: () =>
      import('../pages/myProject/Initialization/Branches/branches/branches.module').then((m) => m.BranchesModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'cities',
    loadChildren: () =>
      import('../pages/myProject/Initialization/Cities/cities/cities.module').then((m) => m.CitiesModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'areas',
    loadChildren: () =>
      import('../pages/myProject/Initialization/Regions/regions/regions.module').then((m) => m.RegionsModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'reasons',
    loadChildren: () =>
      import('../pages/myProject/Initialization/Reasons/reasons/reasons.module').then((m) => m.ReasonsModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
