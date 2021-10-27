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
    this.toysList = [];
  }

  ngOnInit(): void {
    //let param = this.route.snapshot.paramMap.get('name');
    //console.log('Param value: ' + param);
    //window.alert('Param value: ' + param);
    this.dataSvc.getToysAsync('').then(data => 
    {
        this.toysList = data;
        this.msgService.sendMessage(this.getSelectedIndex());
    }).catch(reason => window.alert(JSON.stringify(reason)));
  }
  
  private selectedIndex: number;  
  private toysList: Product[];
  
  
  
    public getList(): Product[]    
    {
        return this.toysList;
    }
    
    public async getListAsync(): Promise<Product[]>
    {
        return await this.dataSvc.getToysAsync('');
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
