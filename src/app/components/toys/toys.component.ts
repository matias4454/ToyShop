import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataSvc: DataService ) 
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
        this.selectedIndex = ix;
    }
    
    public getSelectedProducts() : Product[]
    {
        //let prod : Product[] = this.getList().filter(p => p.getId() == this.selectedIndex);
        return this.getList().filter(p => p.getId() == this.selectedIndex);
       
        /*if(prod.length > 0) 
        {
            return prod[0];
            
        }else return new Product(-1, "", "", "");  */
    
      
    }

}
