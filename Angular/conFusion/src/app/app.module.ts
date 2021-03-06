import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';


import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {DishdetailComponent} from './dishdetail/dishdetail.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

import {DishService} from './services/dish/dish.service';
import {PromotionService} from './services/promotion/promotion.service';
import {LeaderService} from './services/leader/leader.service';
import {FeedbackService} from './services/feedback/feedback.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {baseURL} from './shared/baseurl';
import {ProcessHTTPMsgService} from './services/process-httpmsg/process-httpmsg.service';
import {RestangularModule, Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/restConfig';
import {HighlightDirective} from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot((RestangularConfigFactory))
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    FeedbackService,
    {provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
