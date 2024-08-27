// >>>>> METHOD <<<<< 
// Function Bawaan dari JS untuk Memanipulasi Data

// String Method
// 1. Slice
const text = 'Hello Purwadhika'
console.log(text.slice(0, 5))

// 2. Substring
console.log(text.substring(0, 5))

// 3. Replace 
const paragraph = 'Hello, Hello, World!'
let newParagraph = paragraph.replace(/Hello/g, 'Hi')
console.log(newParagraph)

// 4. toUpperCase & toLowerCase
const name = 'RYAN'
console.log(name.toLowerCase())

// 5. Split : Merubah String menjadi Array
const greeting = 'Hello, World !'
console.log(greeting.split(' '))

// 6. indexOf
const alphabets = 'abcdefg'
console.log(alphabets.indexOf('b'))

// 7. length
const txt = 'Ini'
console.log(txt.length)

// 8. Concat
const txt01  = 'Hello'
const txt02 = 'World'
console.log(txt01.concat(txt02).split('').join(''))



// Number Method
// 1. toString
const phoneNumber = 6281
console.log(phoneNumber.toString())

// 2. Number : STRICT
const platNomor = '1234 B' 
console.log(Number(platNomor)) // NaN

// 3. parseInt
console.log(parseInt(platNomor)) 



// Exercise:
// Hide Phone Number
// Ex.  const phoneNumber = 628137729568
//      Expected Output : 628137729***
const phoneNumberNew = 6281377295689
const phoneNumberNewToString = phoneNumberNew.toString()
const phoneNumberNewResult = phoneNumberNew.slice(0, phoneNumberNew.length-3) + '***'
console.log(phoneNumberNewResult)