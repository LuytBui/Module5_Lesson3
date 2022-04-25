import { Component, OnInit } from '@angular/core';
import {Product} from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedId = -1;
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      price: 111
    },  {
      id: 3,
      name: 'Samsung',
      price: 222
    },  {
      id: 4,
      name: 'Xiaomi',
      price: 333
    },  {
      id: 8,
      name: 'Bphone',
      price: 444
    },
  ];

  selectLine(id){
    this.selectedId = id;
  }
  constructor() { }

  ngOnInit() {
  }

}
