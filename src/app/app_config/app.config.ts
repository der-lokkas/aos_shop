
import { InjectionToken } from '@angular/core';

export interface IAppConfig {
    api: any;
    currency_code:string;
}

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {

    api: {
      products: './assets/json/products.json',
    },
    currency_code:'EUR'
  };