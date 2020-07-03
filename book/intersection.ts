// product type
type Product = {
    name: string, 
    price: number,
    description: string
} 

// order type
type Order = {
    orderId: string,
    amount: number,
    discount?: number 
}

// Alias Cart of Product intersect Order
type Cart = Product & Order;

// const cart: Cart = {}

// cart of type Cart
const cart: Cart = {
    name: "Mango",
    price: 400,
    orderId: "x123456",
    amount: 4,
    description: "big sweet, full of sugar !!!" 
}

// console out cart
console.log(cart)



// activity


// build a base type
type Motor = {
    color: string;
    doors: number;
    wheels: number;
    fourWheelDrive: boolean;
}
// build type with unique property
type Truck = {
    doubleCab: boolean;
    winch: boolean;
} 
// intersect types to create new type
type PickUpTruck = Motor & Truck;

// constructor functions tha build  a pick up truck
function TruckBuilder (truck: PickUpTruck): PickUpTruck {
    return truck
}

const pickUpTruck: PickUpTruck = {
    color: 'red',
    doors: 4,
    doubleCab: true,
    wheels: 4,
    fourWheelDrive: true,
    winch: true
}

console.log (
    TruckBuilder(pickUpTruck)
)
