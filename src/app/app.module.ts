import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { EnterAmountComponent } from './component/enter-amount/enter-amount.component';
import { EnterPinComponent } from './component/enter-pin/enter-pin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EnterAmountComponent,
    EnterPinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
