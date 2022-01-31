import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PayComponent } from './component/pay/pay.component';
import { OffersComponent } from './component/offers/offers.component';
import { BotChatComponent } from './component/bot-chat/bot-chat.component';
import { AngularBotModule } from './services/Bot-Chat/angular-bot-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent,
    PayComponent,
    OffersComponent,
    BotChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularBotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
