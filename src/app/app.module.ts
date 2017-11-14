import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bootstrap3GridModule } from "ng2-bootstrap3-grid";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Bootstrap3GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
