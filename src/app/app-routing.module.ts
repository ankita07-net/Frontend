import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
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



const routes: Routes = [
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'product', component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'product/edit/:id', component:ProductEditComponent},
  {path:'product/detail/:id', component:ProductDetailComponent},
  {path:'product/add', component:ProductAddComponent},
  {path:'profile',component:ProfileComponent},
  {path:'category',component:CategoryComponent},
  {path:'address',component:AddressComponent},
  {path:'product',component:ProductComponent},
  {path:'payment',component:PaymentComponent},
  {path:'order',component:OrderComponent},
  {path:'category/add',component:CategoryAddComponent},
  {path:'category/edit/:id',component:CategoryEditComponent},
  {path:'categorytoproduct/:id',component:CategorytoProductComponent},
  {path:'admin',component:AdminComponent},
  {path:'', pathMatch:'full',component:HeaderComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
