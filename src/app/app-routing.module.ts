import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { BrandComponent } from './pages/brand/brand.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';
import { CartsComponent } from './pages/carts/carts.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { LoginComponent } from './common/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'product', component: ProductComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'user', component: UsersComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'enquiry', component: EnquiryComponent },
      { path: 'coupons', component: CouponsComponent },
      { path: 'cart', component: CartsComponent },
      { path: 'viewproduct/:id', component: ViewproductComponent },
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