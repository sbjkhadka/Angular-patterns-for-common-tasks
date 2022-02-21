import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Product } from '../in-memory-data-service/product.interface';
import { ProductsService } from '../in-memory-data-service/products.service';

@Component({
  selector: 'app-rxjs-combine-latest',
  templateUrl: './rxjs-combine-latest.component.html',
  styleUrls: ['./rxjs-combine-latest.component.scss']
})
export class RxjsCombineLatestComponent implements OnInit {

  products: Product[];
  productsOnDisplay: Product[];
  currentRating$ = new BehaviorSubject("0");
  currentPrice$ = new BehaviorSubject('all');
  currentCategory$ = new BehaviorSubject('all')
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(value => {
      this.products = value;
      this.productsOnDisplay = value;
    });
    combineLatest([this.currentRating$, this.currentPrice$, this.currentCategory$])
      .subscribe(([rating, price, category]: any) => {
        const rate = Number(rating);

        const priceMin = price !== 'all' ? price.split('_')[0] : 0;
        const priceMax = price !== 'all' ? price.split('_')[1] : 1000;

        this.productsOnDisplay = this.products?.filter(product => {
          if (category === 'all') {
            return (product.rating.rate >= rate
              && (product.price >= Number(priceMin) && product.price <= Number(priceMax)));
          } else {
            return (product.rating.rate >= rate
              && (product.price >= Number(priceMin) && product.price <= Number(priceMax))
              && (product.category === category));
          }
        });
      });
  }
}
