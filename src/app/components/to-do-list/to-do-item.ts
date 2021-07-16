export class ToDoItem
{
    description: String;
    priority: number;
    isDone: boolean;
    
    constructor(desc: string, pr: number, done: boolean)
    {
        this.description = desc;
        this.priority = pr;
        this.isDone = done;
    }
    
    
}