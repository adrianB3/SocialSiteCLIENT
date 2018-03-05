import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FeedComponent} from './feed/feed.component';
import {MessagesComponent} from './messages/messages.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './_gurads/auth.guard';
import {MemberDetailComponent} from './member-detail/member-detail.component';
import {MemberDetailResolver} from './_resolvers/member-detail.resolver';
import {MemberListResolver} from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {path: 'feed', component: FeedComponent, resolve: {users: MemberListResolver}},
      {path: 'feed/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
      {path: 'messages', component: MessagesComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },
  {path: '*', redirectTo: 'home', pathMatch: 'full'}
  ];
