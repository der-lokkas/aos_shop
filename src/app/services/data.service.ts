
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { TaxService } from '../services/tax.service';

@Injectable()
export class DataService {
 
    //Pay Pal
    public responseSource = new BehaviorSubject<any>([]);
    response = this.responseSource.asObservable();
    
    constructor(private _productsService: ProductsService, private _taxService: TaxService){
    }

    //Response from Paypal
    changeData(data){
        this.responseSource.next(data);
    }

    public products = [];
    localTax:number = 10;
    dutyTax:number = 5;
    private productSource = new BehaviorSubject<[]>([]);
    product = this.productSource.asObservable();

    public getData() {
        this._productsService.getProductAPI()
          .subscribe( response => {
            
            if(response.products){
              
              response.products.forEach(e => {
    
                let taxPrice = this._taxService.calculateTax(e.category, e.price, this.localTax, this.dutyTax, e.imported);
                
                if(taxPrice){
                  e.price = e.price + (Math.ceil(taxPrice*20)/20);
                  e.tax = (Math.ceil(taxPrice*20)/20);
                }
                else
                  e.tax = 0;

                })
                this.productSource.next((response as any).products);

              }

            },
            error => console.log('Error Products Service - HTTP GET Service', error, error.message)
            )
            
    }

}