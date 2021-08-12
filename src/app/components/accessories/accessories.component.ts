import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../../services/data.service'
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  
  selectedIndex: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) 
  {
    this.selectedIndex = -1;
    }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('name');
    //console.log('Param value: ' + param);
    //window.alert('Param value: ' + param);
  }
    public getSelectedIndex() : number
    {
        return this.selectedIndex;
    }
    
    public setSelectedIndex(ix : number) 
    {
        this.selectedIndex = ix;
    }
  
  getList() : Product[]
  {
    return this.dataService.getAccessories('');
  } 
  getSelectedProduct(): Product
  {
    if(this.selectedIndex > -1)
    {
      return this.getList().filter(p => p.getId() == this.selectedIndex)[0];
    }else return new Product(-1, '', '', '');
  }

}
