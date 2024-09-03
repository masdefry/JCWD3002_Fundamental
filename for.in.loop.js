// >>>>> FOR IN LOOP <<<<<
const products = {
    name: 'Laptop', 
    price: 10000, 
    stocks: 10
}

for(let key in products){
    console.log(key) // Mendapatkan Key nya Saja
    console.log(products[key]) // Mendapatkan Value nya Saja
}

console.log(Object.entries(products))