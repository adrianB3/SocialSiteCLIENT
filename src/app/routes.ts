import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FeedComponent} from './feed/feed.component';
import {MessagesComponent} from './messages/messages.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './_gurads/auth.guard';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: 'feed', component: FeedComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ];
