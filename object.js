// >>>>> OBJECT <<<<< 
// Case. const products = [['Apel', 10000, 10]]

// CRUD (Create, Read, Update & Delete)
// Create 
const products = {
    key: 'value', 
    name: 'Apel', 
    price: 10000, 
    stock: 10
}

products.expired = '2024-01-01'

// Read
console.log(products.name)
console.log(products['name'])

// Update 
products.stock = 20
console.log(products)

// Delete 
delete products.stock 
console.log(products)



const emptyObj = {}
emptyObj.name = 'Pepaya'
emptyObj['price'] = 15000
console.log(emptyObj)



// Array of Object
const arrProducts = [
    {
        name: 'Apel', 
        price: 10000, 
        stock: 10
    },
    {
        name: 'Jeruk', 
        price: 15000, 
        stock: 15
    },
    {
        name: 'Anggur',
        price: 20000, 
        stock: 20
    }
]

arrProducts.forEach((item, index) => {
    console.log(item.name)
    console.log(item.price)
    console.log(item.stock)
})

console.log(arrProducts[2].name)



// METHOD
// Function yang dibungkus ke dalam Object
const user = {
    greeting(name){
        console.log(`Hello, ${name}!`)
    }
}
user.greeting('Defryan')



const userData = {
    name: 'David', 
    greeting(){
        console.log(`Hello, ${this.name}`)
    },
    greetingArrow: () => {
        console.log(`Hello, ${this.name}`)
    }
}

userData.greeting()
userData.greetingArrow()



// OPTIONAL CHAINING 
// Safe Way to Access Nested Obj Properties
// Sering digunakan di Frontend (untuk Conditional Rendering UI)

const userCustomer = {}
console.log(userCustomer?.username)
console.log(userCustomer?.username?.firstName)



// DESTRUCTURING ASSIGMENT OBJECT
// Memasukan Setiap Property ke dalam Masing-Masing Variable 
const campusBSD = {
    address: 'GOP-09', 
    city: 'Tangsel', 
    province: 'Banten', 
    programs: {
        programsOffline: ['JCWD', 'JCDM'], 
        programsOnline: ['JCUIUX', 'JCWD', 'JCDM']
    }
}

const {city, province, address} = campusBSD
const {programsOnline, programsOffline} = campusBSD.programs
console.log(city)
console.log(province)
console.log(address)
console.log(programsOffline, programsOnline)




// SPREAD OPERATOR (...)
// Copy by Value
const fruits = {
    name: 'Apel', 
    color: 'Red'
}

const newFruits = {...fruits} 
newFruits.name = 'Pepaya'
console.log(fruits)
console.log(newFruits)