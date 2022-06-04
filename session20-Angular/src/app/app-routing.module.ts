import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './guards/can-activate.guard';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"gallery" , component:GalleryComponent},
  {path:"login" , component:LoginComponent , canActivate:[CanActivateGuard]},
  {path:"posts" , children:[
    {path:"" , component:PostsComponent },
    {path:"single-post" , component:PostsComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
