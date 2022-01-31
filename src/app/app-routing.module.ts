import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { OffersComponent } from './component/offers/offers.component';
import { PayComponent } from './component/pay/pay.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'layout',component:LayoutComponent,
    children:[
      {
        path:'home',component:HomeComponent
      },{
        path:'offers',component:OffersComponent
      },
      {
        path:'cart',component:CartComponent,
        children:[
          {
            path:'payment',component:PaymentComponent,
            children:[
              {
                path:'pay',component:PayComponent
              }
            ]
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
