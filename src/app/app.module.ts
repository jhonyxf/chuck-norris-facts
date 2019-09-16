import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChuckNorrisFactComponent } from './chuck-norris-fact/chuck-norris-fact.component';

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisFactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
