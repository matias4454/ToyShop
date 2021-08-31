import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
    
  }

}
