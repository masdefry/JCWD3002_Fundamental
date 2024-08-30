// >>>>> ARRAY <<<<<
// Tipe Data yang Dapat Menampung Tipe-Tipe Data Lainnya

/*
    const arr = [1, 2, 3, 4, 5]
*/

// Case. Punya List Data Student JCWD-3002 

const student1 = 'Yusuf'
const student2 = 'Boby'
const student3 = 'Daffa'

const students = ['Yusuf', 'Boby', 'Daffa']
const bebas = [1, 'Str', true, false, undefined, null, [1, 2, 3]]

// CRUD(Create, Read, Update & Delete)
// Read
const programPurwadhika = ['JCWD', 'JCDS', 'JCDM']
console.log(programPurwadhika[0])
console.log(programPurwadhika[2])

// Update
programPurwadhika[2] = 'JCVD'
console.log(programPurwadhika)

// Delete
delete programPurwadhika[0]
console.log(programPurwadhika)
console.log(programPurwadhika[0])



// >>>>> METHOD <<<<<
// 1. Push: Menambahkan Data di Index Paling Akhir
const arrNumbers = [1, 2, 3]
arrNumbers.push(4)
arrNumbers.push('Bebas')
console.log(arrNumbers)

// 2. Unshift: Menambahkan Data di Index Paling Awal
const arrAlphabets = ['a', 'b', 'c']
arrAlphabets.unshift('z')
arrAlphabets.unshift('y')
console.log(arrAlphabets)

// 3. Pop: Menghapus Data di Index Paling Akhir
const fruits = ['Apel', 'Jeruk', 'Pepaya']
fruits.pop()
fruits.pop()
fruits.pop()
fruits.pop()
console.log(fruits)

// 4. Shift: Menghapus Data di Index Paling Awal
const foods = ['Nasi Uduk', 'Nasi Liwet', 'Nasi Lemak']
foods.shift()
console.log(foods)

// 5. Slice
const studentsJCWD = ['Hafiz', 'Sharon', 'Obi']
const newSlice = studentsJCWD.slice(0, 2)
console.log(newSlice)
console.log(studentsJCWD)

// 7. Join
console.log(studentsJCWD.join(', '))

// 8. Length
const items = ['Kaos', 'Celana', 'Kaos Kaki']
console.log(items.length)

// 9. Index Of: Mencari Index Suatu Data
console.log(items.indexOf('Kaos Kaki'))

// 6. Splice
// Menghapus Data   : arr.splice(startIndexKe, totalDataToDelete)
// Menambah Data    : arr.splice(startIndexKe, 0, 'Value-01', 'Value-02', 'dst')
const laptop = ['Asus', 'Lenovo', 'Macbook']
laptop.splice(0, 2)
console.log(laptop)

const drinks = ['Es Teh', 'Thai Tea', 'Kopi']
drinks.splice(3, 0, 'Green Tea', 'Nutrisari')
console.log(drinks)

const bimbel = ['GO', 'Primagama', 'SSC', 'NF']
bimbel.splice(0, 2, 'Purwadhika')
console.log(bimbel)