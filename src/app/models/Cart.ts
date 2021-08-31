import {Injectable} from "@angular/core";
import {Product} from "./Product";

@Injectable({
  providedIn: 'root'
})
export class Cart
{
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    
    addLine(item: Product, quantity: number = 1)
    {
        let line = this.lines.find(l => l.item.getId() == item.getId());
        if(line)
        {
            line.quantity += quantity;
        }else this.lines.push(new CartLine(item, quantity));
        this.itemCount = 0;
        this.lines.forEach(l => this.itemCount += l.quantity)
        
        
    }
}

export class CartLine
{
    constructor(public item: Product, public quantity: number)
    {}
}