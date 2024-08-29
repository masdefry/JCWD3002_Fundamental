// >>>>> LOGICAL OPERATOR <<<<<
// Operator Pembanding dari 2 Buah Kondisi atau Lebih
// OR ||, AND &&, NOT !

// OR : Ketika salah 1 kondisi bernilai true, hasil akhir akan true
console.log(1 === 1 || 2 === 2) // TRUE || TRUE ---> TRUE
console.log(1 === '1' || 3 == '3') // FALSE || TRUE ---> TRUE
console.log(false || 'abc' === 'ABC' || 123 == '123') // false || false || true ---> true
console.log(false || 123 === '123') // false || false ---> false

// AND : Ketika salah 1 kondisi bernilai false, hasil akhir akan false
console.log('111' === '111' && 200 < 1000) // true && true ---> true
console.log('111' == 111 && false) // true && false ---> false 

// NOT : Negasi
console.log(!('111' === '111') && !(200 < 1000)) // !true: false && !true: false ---> false