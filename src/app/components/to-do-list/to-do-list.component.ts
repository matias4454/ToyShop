import { Component, OnInit } from '@angular/core';
import {ToDoItem} from './to-do-item'
import {ToDoModel} from './to-do-model'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  model: ToDoModel;

  constructor() {
    this.model = new ToDoModel();
    }

  ngOnInit(): void {
  }
  
  getItems(): ToDoItem[]{
    return this.model.Items;
  }
  getName()
  {
    return 'John';
  }
  
  addNew(desc: string)
  {
    this.model.Items.push(new ToDoItem(desc, 1, false));
    /*var description = (<HTMLInputElement>document.getElementById("txt_Input")).value;
    this.model.Items.push(new ToDoItem(description, 1, false));
    (<HTMLInputElement>document.getElementById("txt_Input")).value = "";*/
  }
  delItem(index: number)
  {
    var newModel = this.model.Items
    .filter(p => this.model.Items.indexOf(p) != index );
    this.model.Items = newModel;
    
  }

}


