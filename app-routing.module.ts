import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobComponent } from './mob/mob.component';
import { OtpComponent } from './otp/otp.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
{
  path:'mob',
  component: MobComponent
},

{
  path:'otp',
  component: OtpComponent
},

{
  path:'prod',
  component: ProductComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
