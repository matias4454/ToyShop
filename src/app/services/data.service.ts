import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private url = 'http://localhost:8081/';
  
  constructor(private client: HttpClient ) { }
  
  
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
  
  getToysAsync(category: string): Promise<Product[]>
  {
    return new Promise((resolve, reject) => 
    {
      this.client.get('http://localhost:8081/products').subscribe( 
      {
        next: (value) => 
        {
              let data: Array<{[key: string]: string}> = [];
              var result = new Array<Product>();
              data = JSON.parse(value.toString());
              data.forEach((e: {[key: string]: string}) => {
                   result.push(new Product(Number(e['id']), e['name'], e['description'], e['category']));
              });
              resolve(result);
        },
        error: (error) => reject(error)
      });

    });
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
