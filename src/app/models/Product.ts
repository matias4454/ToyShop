export class Product
{
    private Id: number;
    private Name: string
    private Description: string
    private Category: string
    private isSelected: boolean
    
    constructor(id: number, name: string, desc: string, cat: string)
    {
        this.Id = id;
        this.Name = name;
        this.Description = desc;
        this.Category = cat;
        this.isSelected = false;
    }

    public getId(): number
    {
        return this.Id;
    } 
    public setId(id: number)
    {        
        this.Id = id;
    } 
    public getName(): string
    {
        return this.Name; 
    } 
    public setName(name: string)
    {
        this.Name = name; 
    } 
    public getDescription(): string
    {
        return this.Description;
    }    

    public setDescription(desc: string)
    {
        this.Description = desc;
    }    
    public getCategory(): string
    {
        return this.Category; 
    } 
    public setCategory(cat: string)
    {
        this.Category = cat; 
    } 
    
    public getList(): Product[]    
    {
        var items = new Array<Product>();
        
        for (let i = 0; i < 10; i++){ 
            let product: Product = new Product(i, 'Toy No. ' + i,
            'Small cars', '');
            product.setId(i);
            product.setName( 'Toy No. ' + i);
            product.setDescription('This is description of ' + product.getName());
            product.setCategory('Small cars');
            items.push(product);
        }
        return items;
    }
}
