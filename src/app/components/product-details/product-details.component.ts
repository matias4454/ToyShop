import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/Product';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    private subscription: Subscription;
    private selectedIndex: number;  


  constructor(private dataSvc: DataService, private msgService: MessageService) 
  {
    this.selectedIndex = -1;
      this.subscription = msgService.onMessage().subscribe(msg =>
      {
        this.selectedIndex = msg;
         
      });
  }

  ngOnInit(): void {

  }
  

  
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
        this.selectedIndex = ix;
    }
    
    public getSelectedProducts() : Product[]
    {        
        return this.getList().filter(p => p.getId() == this.selectedIndex);
    }

}
