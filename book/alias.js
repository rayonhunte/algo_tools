// product array
var products = [];
// add products to product array
function makeProduct(p) {
    products.push(p); // add product to end of array
    console.log(products);
}
// use a for loop to create 5 products
for (var index = 0; index < 5; index++) {
    var p = {
        name: 'Product' + '_' + ("" + index),
        count: index,
        price: 100,
        amount: 15
    }; //make product
    makeProduct(p);
}
console.log(products); //?
