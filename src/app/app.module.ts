import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

// Config
import { APP_CONFIG, AppConfig } from './app_config/app.config';
import { NgxPayPalModule } from 'ngx-paypal';
import { CheckordersComponent } from './components/checkout/checkorders/checkorders.component';

import { CartService } from './services/cart.service';
import { DataService } from './services/data.service';
import { ProductsService } from './services/products.service';
import { FilterPipe } from './services/filter.service';
import { TaxService } from './services/tax.service';
import { StripeComponent } from './components/checkout/stripe/stripe.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    CartComponent,
    PaymentComponent,
    CheckordersComponent,
    NavComponent,
    FilterPipe,
    ProductDetailsComponent,
    StripeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPayPalModule,
    AppRoutingModule,
    NgbModule 
  ],
  providers: [
    ProductsService, 
    CartService,
    DataService,
    TaxService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
