const EventEmmiter = require("node:events");
class PizzaShop extends EventEmmiter{
    constructor(){
        super();
        this.orderNumber = 0;
    }
    order (size,toppings){
        this.orderNumber ++;
        this.emit("order",size,toppings)
    }
    displayOrderNumber(){
        console.log(`Current oder nmber: ${this.orderNumber}`);
    }
}

module.exports = PizzaShop;