import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CitiesEndpoint } from './services/cities/cities-endpoint.service';
import { CitiesService } from './services/cities/cities.service';
import { CitiesListComponent } from './components/cities/cities-list.component';
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BaseService,
    CitiesEndpoint,
    CitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
