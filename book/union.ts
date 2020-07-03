// basic union type
type Age =  number | string;

// 
function myAge(age: Age): Age {
    if (typeof age === "number") {
        return `my age is ${age} and this a number`
    } else {
        return `my age is ${age} and this a string`
    }
}

console.log(myAge(45))

console.log(myAge('45'))


type Product = {
    name: string,
    price: number,
    amount: number,
}


type Post = {
    header: string,
    method: string,
    product: Product
}


type Put = {
    header: string,
    method: string,
    product: Product,
    productId: number

}

type SomeRequest =  Post | Put


const products: Product[] = []


function ProcessRequest(request: SomeRequest ) {
    if ("productId" in request) {
        products.forEach(
            (p: Product, i: number) => {
               products[request.productId] = {
                   ...request.product
               }
            }
        )        
    }
    else {
        products.push(request.product)
    }
}




const apple: Product = {
    name: 'apple',
    price: 12345,
    amount: 10
} 
const mango: Product = {
    name: 'mango',
    price: 66666,
    amount: 15
}
const postAppleRequest: Post = {
    header: 'zzzzz',
    method: 'new',
    product: apple,
}

const putMangoRequest: Put = {
    header:'ggggg',
    method: 'update',
    product: mango,
    productId: 2
}


ProcessRequest(postAppleRequest)

ProcessRequest(putMangoRequest)

console.log(products)


type LandPack = {
    height: number,
    weight: number,
    type: 'land',
    label?: string
}

type AirPack = {
    height: number,
    weight: number,
    type : 'air',
    label?: string
}

type ComboPack = LandPack | AirPack

class Shipping {
    Process(pack: ComboPack) {
        // check package type
        if(pack.type === 'land') {
            return this.ToLand(pack)
        } else {
            return this.ToAir(pack)
        }
    }
    ToAir(pack: AirPack): AirPack {
        pack.label = 'air cargo'
        return pack
    }
    ToLand(pack: LandPack): LandPack {
        pack.label = 'land cargo'
        return pack
    }
}

const airPack: AirPack = {
    height: 5,
    weight: 10,
    type: 'air',
}

const landPack: LandPack = {
    height: 5,
    weight: 10,
    type: 'land',
}

const shipping = new Shipping;

console.log(
    shipping.Process(airPack)
)

console.log(
    shipping.Process(landPack)
)


