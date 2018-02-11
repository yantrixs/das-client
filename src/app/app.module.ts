import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DasService } from './service/das.service';
import { APP_ROUTES } from './app.routing';
import { AppNavComponent } from './app-nav/app-nav.component';
import { ShipComponent } from './ship/ship.component';
import { ServiceInterceptor } from './service/service.Interceptor';
import { ShipwreckComponent } from './shipwreck/shipwreck.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './service/common.service';
import { NumberOnlyDirective } from './shipwreck/number.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    ShipComponent,
    NumberOnlyDirective,
    ShipwreckComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule
  ],
  providers: [DasService, CommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
