import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfilePageComponent } from './pages/user-page/pages/profile-page/profile-page.component';
import { MapPageComponent } from './pages/user-page/pages/map-page/map-page.component';
import { FeedPageComponent } from './pages/user-page/pages/feed-page/feed-page.component';
import { EventsPageComponent } from './pages/user-page/pages/events-page/events-page.component';
import { OtherUserProfilePageComponent } from './pages/user-page/pages/other-user-profile-page/other-user-profile-page.component';
import { EventProfilePageComponent } from './pages/user-page/pages/event-profile-page/event-profile-page.component';

const routes: Routes = [
  {
    component: HomePageComponent,
    path: ''
  },
  {
    component: LoginPageComponent,
    path: 'login'
  },
  {
    component: AdminPageComponent,
    path: 'admin'
  },
  {
    component: UserPageComponent,
    path: 'user',
    children: [
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'events',
        component: EventsPageComponent,
      },
      {
        path: 'map',
        component: MapPageComponent
      },
      {
        path: 'feed',
        component: FeedPageComponent
      },
      {
        path: 'id',
        component: OtherUserProfilePageComponent
      },
      {
        path: 'events/id',
        component: EventProfilePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
