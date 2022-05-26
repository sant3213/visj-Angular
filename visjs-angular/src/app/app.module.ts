import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Graph2dComponent } from './graph2d/graph2d.component';

@NgModule({
  declarations: [
    AppComponent,
    Graph2dComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
