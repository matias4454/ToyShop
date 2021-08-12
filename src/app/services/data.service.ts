import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getToys(category: string): Product[]
  {
        var items = new Array<Product>();
        
        for (let i = 0; i < 10; i++){ 
            let product: Product = new Product(i, 'Toy No. ' + i,
            'Small cars', '');
            product.setId(i);
            product.setName( 'Toy No. ' + i);
            product.setDescription('This is description of ' + product.getName());
            product.setCategory('Small cars');
            items.push(product);
        }
        return items;
    
  }
  getAccessories(category: string): Product[]
  {
        var items = new Array<Product>();
        
        for (let i = 0; i < 10; i++){ 
            let product: Product = new Product(i, 'Item No. ' + i,
            'RC accessories', '');
            product.setDescription('This is description of ' + product.getName());
            items.push(product);
        }
        return items;
  }
}
