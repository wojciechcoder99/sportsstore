import { Product } from "../model/Product";

export class Cart {
    private lines: CartLine[] = [];
    private itemCount: number = 0;
    private cartPrice: number = 0;

    addToCart(product: Product): void {
        let line = this.lines.find(line => line.product.id === product.id);
        if (line != undefined) {
            line.quantity += 1;
        }
        else {
            this.lines.push(new CartLine(product, 1));
        }
        this.recalculate();
    }

    updateCart(product: Product, quantity: number): void {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantity = quantity;
        }
        this.recalculate();
    }

    removeLine(id: number): void {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear(): void {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.itemCount += line.quantity;
            this.cartPrice += (line.quantity + line.product.price);
        });
    }
}

class CartLine {
    constructor(public product: Product, public quantity: number) { }

    get lineTotal() {
        return this.product.price * this.quantity;
    }
}


