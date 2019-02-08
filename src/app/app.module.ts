import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChuckNorrisFactComponent } from './chuck-norris-fact/chuck-norris-fact.component';
import { FactsService } from './facts.service';

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisFactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
