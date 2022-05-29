import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    PostsComponent,
    AboutComponent,
    PostCardComponent,
    ProductsComponent,
    UserFormComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
