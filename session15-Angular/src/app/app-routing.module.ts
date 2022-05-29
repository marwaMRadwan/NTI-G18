import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import {ContactComponent } from './pages/contact/contact.component'
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"about"  , component:AboutComponent},
  {path: "contact" , component:ContactComponent},
  {path:"posts" , component:PostsComponent},
  {path : "products" , component:ProductsComponent},
  {path : "users" , component:UsersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
