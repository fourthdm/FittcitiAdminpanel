import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { UsersComponent } from './pages/users/users.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule, provideToastr } from 'ngx-toastr';

import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';


import { LightgalleryModule } from 'lightgallery/angular';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { LoginComponent } from './common/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './pages/admin/admin.component';
import { ProductsssComponent } from './pages/productsss/productsss.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    SidebarComponent,
    FooterComponent,
    EnquiryComponent,
    ViewproductComponent,
    LoginComponent,
    AdminComponent,
    ProductsssComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    LightgalleryModule,
    CarouselModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
