// >>>>> FUNCTION <<<<<
// Pembungkus untuk Menampung Code Program
// Step-01: Create
// Step-02: Call



// Case. Menampilan Kata Hello World Sebanyak 10x

/*
    1. Declarative Function
    function functionName(){
        Line of Code
    }

    2. Function Expression
    const functionName = function(){
        Line of Code
    }

    3. Arrow Function
*/

// Function Declarative
greeting() // Hoisting
function greeting(){
    console.log('Hello, World!')
}

// Function Expression
const print = function (){
    console.log('Hello, User!')
}
print()

// Arrow Function
const output = () => {
    console.log('Hello, JCWD!')
}

output()



// >>>>> FUNCTION with PARAMETER & ARGUMENT <<<<< 
function greetingUser(bebas){ // name ---> PARAMETER
    console.log(bebas)
}

greetingUser('User Customer') // 'User Customer' ---> ARGUMENT
greetingUser('Admin')  // 'Admin' ---> ARGUMENT

function biodata(name, hobby, address = 'Indonesia'){
    console.log(`
            Nama Saya ${name}, 
            Hobi Saya ${hobby}, 
            Alamat Saya ${address}
        `)
}

biodata(
    'Aboy', 
    'Futsal', 
)



function printNumber(arr, arr2){
    console.log(arr)
    console.log(arr2)
}

printNumber([1, 2, 3, 4, 5])



function myFunc(a, b, ...manyMore){
    console.log(a)
    console.log(b)
    console.log(manyMore) // [false, undefined, null]
}

myFunc(1, 'Abc', false, undefined, null)



function a(){
    function b(){
        console.log('Function B')
    }

    function c(){
        console.log('Function C')
    }

    c()
}
a()



// >>>>> FUNCTION with RETURN & without RETURN <<<<<
// Function Mengerjakan Sesuatu
function Print(user){
    console.log(`Hello, ${user}`)
}

const output1 = Print('ryandefryan') // undefined
console.log(output1)

// Function Menghasilkan Sesuatu
function Cetak(user){
    return `Welcome, ${user}`
}

const output2 = Cetak('defryan') // `Welcome, ${user}`
console.log(output2)









// Case. Membuat 2 Function (Penjumlahan dan Pengurangan)
function Penjumlahan(num1, num2){
    let result = num1 + num2 
    return result
}

function Pengurangan(num1, num2){
    let result = num1 - num2 
    return result
}

function Output(result){
    console.log(result)
}

const resultPenjumlahan = Penjumlahan(3, 5)
Output(resultPenjumlahan)
Pengurangan(10, 3)