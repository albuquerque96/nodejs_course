const EventEmmiter = require("node:events")

const emmiter = new EventEmmiter({})

emmiter.on("order-pizza",(size,topping)=>{
    console.log(`Order received! baking a ${size} pizza with ${topping}`)
})
emmiter.on("order-pizza",(size)=>{
    console.log("Serving complementary drink");
})

console.log("do work before event ocurs in the system!");
emmiter.emit("order-pizza","large","mushrooms")