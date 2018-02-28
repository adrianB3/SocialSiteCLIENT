import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './_services/auth.service';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {AlertifyService} from './_services/alertify.service';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {AuthGuard} from './_gurads/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    FeedComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
