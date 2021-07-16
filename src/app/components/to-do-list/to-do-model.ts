import {ToDoItem} from './to-do-item'

export class ToDoModel
{
    Items: ToDoItem[];
    
    constructor()
    {
        this.Items = [
            new ToDoItem('Check equipment', 1, false),
            new ToDoItem('Repair gate to warehouse', 1, false),
            new ToDoItem('Crate new order for dolls', 1, false)
            ];
    }
    
    
}