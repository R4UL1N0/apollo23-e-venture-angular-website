import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNavComponent } from './components/custom-nav/custom-nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfilePageComponent } from './pages/user-page/pages/profile-page/profile-page.component';
import { MapPageComponent } from './pages/user-page/pages/map-page/map-page.component';
import { TresureIconComponent } from './components/tresure-icon/tresure-icon.component';
import { CommonModule } from '@angular/common';
import { RangePipe } from './utils/range.pipe';
import { FeedPageComponent } from './pages/user-page/pages/feed-page/feed-page.component';
import { EventsPageComponent } from './pages/user-page/pages/events-page/events-page.component';
import { ProgressContentComponent } from './pages/user-page/pages/profile-page/content/progress-content/progress-content.component';
import { QuizzesContentComponent } from './pages/user-page/pages/profile-page/content/quizzes-content/quizzes-content.component';
import { FriendsContentComponent } from './pages/user-page/pages/profile-page/content/friends-content/friends-content.component';
import { InteractionsContentComponent } from './pages/user-page/pages/profile-page/content/interactions-content/interactions-content.component';
import { EventsContentComponent } from './pages/user-page/pages/profile-page/content/events-content/events-content.component';
import { EventProfilePageComponent } from './pages/user-page/pages/event-profile-page/event-profile-page.component';
import { OtherUserProfilePageComponent } from './pages/user-page/pages/other-user-profile-page/other-user-profile-page.component';
import { EventUnitComponent } from './pages/user-page/components/event-unit/event-unit.component';
import { UserUnitComponent } from './pages/user-page/components/user-unit/user-unit.component';
import { PageOptionsListComponent } from './pages/user-page/components/page-options-list/page-options-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomNavComponent,
    HomePageComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    EventsPageComponent,
    ProfilePageComponent,
    MapPageComponent,
    TresureIconComponent,
    RangePipe,
    FeedPageComponent,
    ProgressContentComponent,
    QuizzesContentComponent,
    FriendsContentComponent,
    InteractionsContentComponent,
    EventsContentComponent,
    EventProfilePageComponent,
    OtherUserProfilePageComponent,
    EventUnitComponent,
    UserUnitComponent,
    PageOptionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
