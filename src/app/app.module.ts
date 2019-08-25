import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonePipe } from './pipe/phone.pipe';
import { AmountPipe } from './pipe/amount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonePipe,
    AmountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
