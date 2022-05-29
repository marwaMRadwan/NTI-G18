import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import {ContactComponent } from './pages/contact/contact.component'
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"about"  , component:AboutComponent},
  {path: "contact" , component:ContactComponent},
  {path:"posts" , component:PostsComponent},
  {path : "products" , component:ProductsComponent},
  {path : "users" , component:UsersListComponent},
  {path:"blogs" , children:[
    // /blogs
    {path : "" , component : BlogsComponent},
    // blogs/4
    {path : ":userId" , component : SingleBlogComponent}
  ] 
},

  // {path:"blogs" , component:BlogsComponent},
  // {path:"blogs/:id" , component:SingleBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
