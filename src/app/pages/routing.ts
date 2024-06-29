import { RecivepermissionModule } from './myProject/Account_management/recivepermission/recivepermission.module';
import { DeliveryPaymentModule } from './myProject/Account_management/delivery-payment/delivery-payment.module';
import { CustomerManagementModule } from './myProject/customer-management/customer-management.module';
import { ManagementOfDelegatesModule } from './myProject/management-of-delegates/management-of-delegates.module';
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
    path: 'deliveries',
    loadChildren: () =>
      import('../pages/myProject/management-of-delegates/management-of-delegates.module').then((m) => m.ManagementOfDelegatesModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('../pages/myProject/customer-management/customer-management.module').then((m) => m.CustomerManagementModule),
    data: { layout: 'light-sidebar' },
  },
  
  {
    path: 'flyerrequests',
    loadChildren: () =>
      import('../pages/myProject/Clients-requestes/flyer-requests/flyer-requests.module').then((m) => m.FlyerRequestsModule),
    data: { layout: 'light-sidebar' },
  },
  
  {
    path: 'paymentrequests',
    loadChildren: () =>
      import('../pages/myProject/Clients-requestes/payment-requests/payment-requests.module').then((m) => m.PaymentRequestsModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'branches',
    loadChildren: () =>
      import('../pages/myProject/Initialization/Branches/branches/branches.module').then((m) => m.BranchesModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'clientinvoices',
    loadChildren: () =>
      import('../pages/myProject/Account_management/customer-invoices/customer-invoices.module').then((m) => m.CustomerInvoicesModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'clientspayment',
    loadChildren: () =>
      import('../pages/myProject/Account_management/customer-payment/customer-payment.module').then((m) => m.CustomerPaymentModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'treasuryacc',
    loadChildren: () =>
      import('../pages/myProject/Account_management/accounts-data/accounts-data.module').then((m) => m.AccountsDataModule),
    data: { layout: 'light-sidebar' },
  },
  
  {
    path: 'paymentpermission',
    loadChildren: () =>
      import('../pages/myProject/Account_management/paymentpermission/paymentpermission.module').then((m) => m.PaymentpermissionModule),
    data: { layout: 'light-sidebar' },
  }
  ,
  {
    path: 'recivepermission',
    loadChildren: () =>
      import('../pages/myProject/Account_management/recivepermission/recivepermission.module').then((m) => m.RecivepermissionModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'deliverypayment',
    loadChildren: () =>
      import('../pages/myProject/Account_management/delivery-payment/delivery-payment.module').then((m) => m.DeliveryPaymentModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'cities',
    loadChildren: () =>
      import('../pages/myProject/Initialization/Cities/cities/cities.module').then((m) => m.CitiesModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'exchangeacc',
    loadChildren: () =>
      import('../pages/myProject/Account_management/exchangeacc/exchangeacc.module').then((m) => m.ExchangeaccModule),
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
