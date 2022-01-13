import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CheckordersComponent } from './components/checkout/checkorders/checkorders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent, pathMatch: 'full'
  },
  {
    path: 'checkout/checkorders',
    component: CheckordersComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent 
  },
  {
    path: "**",
    component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
