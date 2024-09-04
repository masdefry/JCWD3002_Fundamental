// Calculate Student
class Student{
    constructor(name, email, age, score){
        this.name = name; 
        this.email = email; 
        this.age = age; 
        this.score = score
    }

    convertAge(){
        return new Date().getFullYear() - new Date(this.age).getFullYear()
    }
}

const students = [
    new Student('Defryan', 'defryan@gmail.com', '2000-01-01', 90),
    new Student('Aviawan', 'aviawan@menkominfo.com', '2000-01-01', 100), 
    new Student('Yusuf', 'yusuf@yahoo.com', '2000-01-01', 95)
]

function CalculateStudentData(arrStudents){
    const arrScore = []
    const arrAge = []
    
    arrStudents.forEach(item => {
        arrScore.push(item.score)
        arrAge.push(item.convertAge())
    })

    return {
        score: {
            min: Math.min(...arrScore), 
            max: Math.max(...arrScore),
            avg: arrScore.reduce((acc, currentValue) => acc + currentValue)/arrScore.length
        },
        age: {
            min: Math.min(...arrAge), 
            max: Math.max(...arrAge),
            avg: arrAge.reduce((acc, currentValue) => acc + currentValue)/arrAge.length
        }
    }
}

console.log(CalculateStudentData(students))



// Transaction
class Products{
    constructor(name, price){
        this.name = name; 
        this.price = price;
    }
}

const products = [
    new Products('Sepatu', 150000), 
    new Products('Kaos', 100000), 
    new Products('Celana', 100000)
]

class Transaction{
    total = 0;
    carts = [];

    addToCart(selectedProduct, qty){
        let findItem = false
        let indexFindItem
        if(this.carts.length === 0){
            this.carts.push({...selectedProduct, qty})
        }else{
            this.carts.forEach((item, index) => {
                if(item.name === selectedProduct.name){
                    findItem = true
                    indexFindItem = index
                }
            })  

            if(findItem === true){ // Apabila Item yang dicari ADA
                this.carts[indexFindItem].qty += qty
            }else if(findItem === false){ // Apabila Item yang dicari TIDAK ADA
                this.carts.push({...selectedProduct, qty})
            }
        }
    } 

    showCarts(){
        console.log(this.carts)
    }
}

const newTransaction = new Transaction()
newTransaction.addToCart(products[0], 1)
newTransaction.addToCart(products[1], 1)
newTransaction.addToCart(products[0], 1)
newTransaction.addToCart(products[1], 1)
newTransaction.addToCart(products[2], 1)
newTransaction.addToCart(products[2], 1)
newTransaction.addToCart(products[2], 1)
// console.log(newTransaction.carts)
newTransaction.showCarts()


















// const arrProducts = [
//     {
//         name: 'Sepatu', 
//         price: 1000000
//     }, 
//     {
//         name: 'Kaos', 
//         price: 50000
//     }
// ]

// // const carts = []



// // ERROR-01: Tidak Mau Me-Looping, Karena carts Itu Kosong
// carts.forEach(item => {
//     carts.push(arrProducts[0])
// })

// // SOLVE
// if(carts.length === 0){
//     carts.push(arrProducts[0])
// }else{
//     // Lakukan Looping
// }

// // ERROR-02: Kita Mau Menambahkan Sepatu ke Dalam Carts. Tetapi di Dalam Carts Itu Sudah Ada Produk Sepatu dan Kaos
// const carts = [
//     {
//         name: 'Sepatu', 
//         price: 1000000,
//         qty: 2
//     }, 
//     {
//         name: 'Kaos', 
//         price: 50000, 
//         qty: 1
//     }, 
//     {
//         name: 'Sepatu', 
//         price: 1000000, 
//         qty: 1
//     }
// ]

// if(carts.length === 0){
//     carts.push(arrProducts[0])
// }else{
//     // Lakukan Looping
//     carts.forEach(item => {
//         if(item.name === arrProducts[0].name){
//             item.qty += 1
//         }else{
//             carts.push(arrProducts[0])
//         }
//     })
// }