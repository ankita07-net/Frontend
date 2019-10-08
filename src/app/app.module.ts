import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { RegisterService } from './register.service';
import { LoginService } from './login.service';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CartService } from './cart.service';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { OrderComponent } from './order/order.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategorytoProductComponent } from './category/categoryto-product/categoryto-product.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProfileComponent,
    CategoryComponent,
    AddressComponent,
    PaymentComponent,
    OrderComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategorytoProductComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RegisterService,LoginService,CartService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
