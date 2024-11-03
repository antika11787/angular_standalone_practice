import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './guard/auth.guard';
import { childAuthGuard } from './guard/child-auth.guard';
import { deacAuthGuard } from './guard/deac-auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about/:submenu/:id',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    // lazy loading
    // instead of "component: ContactComponent,"
    loadComponent: () =>
      import('./common/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [authGuard],
    // if i want to block all the child routes
    canActivateChild: [childAuthGuard],
    // if i want to confirm navigation after form fillup
    canDeactivate: [deacAuthGuard],
    children: [
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: AddComponent,
      },
    ],
  },
  {
    path: '**',
    component: StatusComponent,
  },
];
