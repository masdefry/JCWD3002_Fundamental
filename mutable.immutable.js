// >>>>> MUTABLE vs IMMUTABLE <<<<<
// Mutable  : Variable yang Valuenya Bisa Diubah Ketika di Copy (Non-Primitive)
// Immutable: Variable yang Valuenya Tidak Dapat Diubah Ketika di Copy (Primitive)

// Immutable: Copy by Value
let name = 'Yusuf'
let newName = name 
newName = 'Bobby'
console.log(name)
console.log(newName)

// Mutable: Copy by Reference
let arrStudents = ['Yusuf', 'Bobby', 'Avi']
let newArrStudents = arrStudents
newArrStudents[1] = 'Obi'
console.log(arrStudents)
console.log(newArrStudents)

// Spread Operator: ... ---> Immutable: Copy by Value
let arrFruits = ['Mango', 'Apple']
let newArrFruits = [...arrFruits]
newArrFruits[0] = 'Pepaya'
console.log(arrFruits)
console.log(newArrFruits)