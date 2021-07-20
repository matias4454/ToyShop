import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/Product';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataSvc: DataService, private msgService: MessageService ) 
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

}
