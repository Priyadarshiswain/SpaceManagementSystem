import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PublisherComponent } from './publisher/publisher.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SubscriberComponent } from './subscriber/subscriber.component'

import { SmsService } from './services/sms.service'
import { PublishModel } from './models/publish-model';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PublisherComponent,
    FetchDataComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: PublisherComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [
    SmsService,
    PublishModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
