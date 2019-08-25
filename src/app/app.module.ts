import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneNumberPipe } from './pipe/phone-number.pipe';
import { AmountPipe } from './pipe/amount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberPipe,
    AmountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
