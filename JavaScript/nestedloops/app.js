const sizes = ["S", "M", "L"];
const colors = ["Red", "Blue"];


function productlister () {

    const productavailable = []
    for ( let  size of sizes) {

        for ( let color of colors) {

         productavailable.push( { size, color})

           
    } }
     
     
    return productavailable

   
}

const product = productlister()

function removelast(item) {

    let remaining = item.pop()

    return remaining
}

console.log(removelast(product))
console.log(product)
console.log(removelast(product))
console.log(product)
console.log(removelast(product))
console.log(product)
console.log(removelast(product))
