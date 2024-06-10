let cart = [];
let total = parseInt(0);

function AddProduct(name, cost) {
    let product = {
        Name: name,
        Cost: cost
    };   
    cart.push(product);
    total += parseInt(cost);
    
    console.log(product.Name);
}

function DisplayTotal() {
    console.log("Receipt:");
    cart.forEach((p) => console.log(`${p.Name} $${p.Cost} each`));
    console.log("----------");
    console.log(`Your total: $${total}`);
}





// console.log("Your cart items:" + cart);
// console.log("Your total: $" + total);
