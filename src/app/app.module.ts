import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { PhotoService, PeopleService } from './service/json-data.service';
import { PageOneComponent } from './components/page-one/page-one.component';
import { DevNavComponent } from './shared/dev-nav/dev-nav.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { Section } from './shared/section.directive';
import { USE_VALUE } from '@angular/core/src/di/injector';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    DevNavComponent,
    PageTwoComponent,
    Section
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [
    PhotoService,
    PeopleService,
    Window, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
