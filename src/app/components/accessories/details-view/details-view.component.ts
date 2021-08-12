import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Product } from '../../../models/Product';


@Component({
  selector: 'app-acc-details',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
    
    @Input() selectedProduct = new Product(-1, '', '', '');
    @Output() btnBackClick = new EventEmitter<number>();


  constructor() 
  { }

  ngOnInit(): void {

  }
  
     public btnBackOnClick(ix : number) 
    {
        this.btnBackClick.emit(ix);
    }

}
