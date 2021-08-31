import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/Product';
import { MessageService } from '../../services/message.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataSvc: DataService, private msgService: MessageService, private cart: Cart ) 
  {
    this.selectedIndex = -1;
  }

  ngOnInit(): void {
    //let param = this.route.snapshot.paramMap.get('name');
    //console.log('Param value: ' + param);
    //window.alert('Param value: ' + param);
  }
  
  private selectedIndex: number;  
  
    public getList(): Product[]    
    {
        return this.dataSvc.getToys('');
    }
    
    public getSelectedIndex() : number
    {
        return this.selectedIndex;
    }
    
    public setSelectedIndex(ix : number) 
    {
        this.msgService.sendMessage(ix);
        this.selectedIndex = ix;
    }
    
    public getSelectedProducts() : Product[]
    {
        return this.getList().filter(p => p.getId() == this.selectedIndex);
    }
    
    public addToCart(p: Product)
    {
        this.cart.addLine(p);
    }

}
