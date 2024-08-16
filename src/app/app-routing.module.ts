import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

import { UsersComponent } from './pages/users/users.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';

import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';

import { LoginComponent } from './common/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProductsssComponent } from './pages/productsss/productsss.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'product', component: ProductsssComponent },
      { path: 'admin', component: AdminComponent },

      { path: 'user', component: UsersComponent },

      { path: 'enquiry', component: EnquiryComponent },

      { path: 'viewproduct/:Project_id', component: ViewproductComponent },
      { path: '**', redirectTo: 'Dashboard' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }