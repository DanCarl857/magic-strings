import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MagicStringsModule } from 'magic-strings';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicStringsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
