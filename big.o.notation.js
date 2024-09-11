// O(1), Constant Time
// Berapapun Input yang Diberi, Maka Waktu Pemrosesan Akan Tetap Sama
const students = ['Avi', 'Obi', 'Sharon'] // 1000 Data
students[0] 
students[2]

// Mendapatkan Harga Hotel Termurah/Termahal (Data Hotelnya Sudah di Sort di BE)

// O(N), Linear Time
// Waktu Pemrosesannya Bergantung Pada Jumlah Datanya
const fruits = ['Banana', 'Mango', 'Orange', 'Papaya', 'Naga']
// Search: 'Banana'

fruits.forEach(item => {
    item === 'Banana'
})

// O(log n), Logarithm N: Ex. Binary Search 

// O(n^2), Quadratic Time
// Proses Linear, didalam Linear: Ex. Nested Loop
// Total Input: 5 ---> 25
fruits.forEach(item => { // O(n)
    fruits.forEach(item => { // O(n)
        item === 'Banana'
    })
})


// O(n^n), n square n
// Jumlah Input Datanya dikuadratkan dengan Jumlah Input Datanya
// Total Input 10: 10 ---> 1000000