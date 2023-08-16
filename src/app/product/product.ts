export class Product {

    constructor (
        code: string = '',
        name: string = '',
        description: string = '',
        image: string = '',
        price: number = 1,
        category: string = '',
        quantity: number = 1,
        inventoryStatus: string = '',
        rating: number = 0
    ) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
        this.inventoryStatus = inventoryStatus;
        this.rating = rating;
    }

    id: number;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;

}