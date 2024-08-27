// >>>>> COMPARISON OPERATOR <<<<<
// Operator Pembanding: >, >=, <, <=, ==, ===, !==
// Comparison Operator Akan Menghasilkan Nilai Boolean (True or False)

const number1 = 100
const number2 = 1000
console.log(number1 > number2) // 100 > 1000? False
console.log(number1 < number2) // 100 < 1000? True

console.log(100 >= 100) // True
console.log('abc' < 'abc') // Dicoba2 Sendiri

// ==   : Comparasi Valuenya Saja
console.log(100 == '100') // TRUE
console.log('1000' == 1000) // TRUE

// ===  : Comparasi Value beserta Tipe Datanya
console.log(100 === '100') // FALSE
console.log('1000' === 1000) // FALSE

console.log(10 !== 100) // TRUE
console.log(10 !== 10) // FALSE
