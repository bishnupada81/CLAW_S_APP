import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { EnterAmountComponent } from './component/enter-amount/enter-amount.component';
import { EnterPinComponent } from './component/enter-pin/enter-pin.component';

const routes: Routes = [
  {path:'',        component:LoginPageComponent},
  {path:'amount',  component:EnterAmountComponent},
  {path:'pin',     component:EnterPinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
