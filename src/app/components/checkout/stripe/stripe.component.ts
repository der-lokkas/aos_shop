import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Observable } from 'rxjs';

declare var Stripe:any;

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  confirmation:any;
  priceTaxed:string = '0';
  totalTax:number = 0.7;
  price: number = 0;
  quantity: number = 0;
  @Output() responseStripe = new EventEmitter();
  

  constructor(private _cartService:CartService) { }

  ngOnInit() {
    this._cartService.getTotalAmount().subscribe(res => this.price = res); 

    this._cartService.getTotalQty().subscribe(res => this.quantity = res); 
  }

  openCheckout() {
    this.priceTaxed = (this.price + this.totalTax).toFixed(2); 

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_MC01iUPUbx0Wvq0LnYTMMq0N',
      locale: 'auto',
      
      token: (response: any)=> {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        if (response) {
          this.responseStripe.emit(response);
        }
      }
    });

    handler.open({
      name: 'AOS',
      description: this.quantity + 'products',
      amount: ((this.price + this.totalTax)) * 100
    });

  }

}
