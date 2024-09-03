// >>>>> CLASS OBJECT <<<<<
// Template yang digunakan untuk Membuat Object dengan Key yang Sama

// Case. 
const arrProducts = [
    {
        name: 'Apel', 
        price: 10000, 
        stock: 10
    },
    {
        name: 'Jeruk', 
        prices: 15000, 
        stocks: 15
    },
    {
        name: 'Anggur',
        price: 20000, 
        stock: 20
    }
]

arrProducts.forEach(item => {
    console.log(item.name)
    console.log(item.price)
    console.log(item.stock)
})



/*
    class className{
        constructor(a){
            this.a = value
        }
    }
*/

class productFruits{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

const product1 = new productFruits('Apel', 10000, 10)
const product2 = new productFruits('Jeruk', 15000, 15)
console.log(product1)
console.log(product2)

const products = [
    new productFruits('Apel', 10000, 10), 
    new productFruits('Jeruk', 15000, 15)
]

console.log(products)



class User{
    #password = '';

    constructor(username, phoneNumber){
        this.username = username;
        this.phoneNumber = phoneNumber;
    }

    get showPassword(){
        return this.#password
    }

    set validatePassword(password){
        if(password.length < 6){
            console.log('Password Must Be 6 Characters or More')
        }else{
            this.#password = password
        }
    }

    set validateEmail(email){
        if(email.includes('@')){
            this.email = email
        }else{
            console.log('Email Invalid!')
        }
    }
}

const user1 = new User('ryan', '0812')
user1.validateEmail = 'ryan@gmail.com'
user1.validatePassword = 'abc123'
console.log(user1)



// Case.
// Di sebuah supermarket, terdapat beberapa product category. Mulai dari electronic, fashion dan snack. 
// Setiap product category memiliki property yang berbeda-beda, seperti product name, product stock, dll.
// 1. Jabarkan apa saja property yg dimiliki untuk masing-masing product category!
// ELECTRONIC   : Name, Price, Stock, Brand, Category, Color, ReleaseYear, Factory, Model
// FASHION      : Name, Price, Stock, Category, Gender, Color, Material, Factory, Size
// SNACK        : Name, Price, Stock, Brand, Flavour, ExpiryDate, Ingridients, Factory

// 2. Buatkan class berdasarkan product category
class Product{
    constructor(Name, Price, Stock, Factory){
        this.name = Name; 
        this.stock = Stock; 
        this.price = Price;
        this.factory = Factory;
    }
}

class ProductElectronic extends Product{
    constructor(Name, Price, Stock, Brand, Category, Color, ReleaseYear, Factory, Model){
        super(Name, Price, Stock, Factory)
        this.brand = Brand; 
        this.category = Category; 
        this.color = Color; 
        this.releaseYear = ReleaseYear;
        this.model = Model;
    }
}

class ProductFashion extends Product{
    constructor(Name, Price, Stock, Brand, Category, Color, Material, Gender, Sizes, Factory){
        super(Name, Price, Stock, Factory)
        this.brand = Brand; 
        this.category = Category; 
        this.color = Color; 
        this.gender = Gender; 
        this.sizes = Sizes; 
        this.material = Material
    }
}

class ProductSnack{
    constructor(Name, Price, Stock, Brand, Flavour, ExpiryDate, Ingridients, Factory){
        super(Name, Price, Stock, Factory)
        this.brand = Brand; 
        this.flavour = Flavour; 
        this.expiryDate = ExpiryDate; 
        this.ingridients = Ingridients; 
    }
}