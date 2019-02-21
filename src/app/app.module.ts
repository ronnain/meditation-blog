import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
//import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailedPostComponent } from './detailed-post/detailed-post.component';
import { RecapPostComponent } from './recap-post/recap-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';

import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {path: 'new', component: NewPostComponent },
  {path: 'daily', component: DetailedPostComponent},
  {path: 'list', component: PostListComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: '', redirectTo: 'daily', pathMatch: 'full' },
  {path: '**', redirectTo: 'daily', pathMatch: 'full'},
  {path: 'not-found', redirectTo: 'daily', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailedPostComponent,
    RecapPostComponent,
    PostListComponent,
    NewPostComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    //FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
