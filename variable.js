console.log('JCWD-3002')
console.log('>>>>>>') // console.log digunakan untuk menampilkan di terminal

/*
MULTI LINE COMMENT
Baris 01
Baris 02
Baris 03
*/

// >>>>> VARIABLE <<<<<
// Digunakan untuk menyimpan data

// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')
// console.log('Hello, Dunia')


/*
    How to Declare Variable?
    var variableName = value
*/
var greeting = 'Hello'
console.log(greeting)

/*
    Variable Naming Rules:
    1. Variable harus diawali dengan huruf atau special karakter (_, $)
    var 1name
    var name
    var $name
    var _name

    2. Variable harus memiliki nama yang jelas (tidak boleh ambigu)
    var namaStadion = 'Soekarno'

    3. Format penulisan varible snake_case / camelCase / PascalCase
    var stadium_name = 'Gelora Bung Karno' // Format penulisan snake_case
    var stadiumName = 'Gelora Bung Karno' // Format penulisan camelCase
    var StadiumName = 'Gelora Bung Karno' // Format penulisan PascalCase

    4. Penamaan variable tidak boleh sama dengan syntax JS
    var console.log

    5. Case sensitive: var namaHewan dengan var NamaHewan itu berbeda
    var namaHewan = 'Kucing'
    var NamaHewan = 'Anying'
    console.log(namaHewan)
*/

/*
    Variable Syntax:
    VAR x LET x CONST

    VAR
    - Penamaan variable nya boleh sama
    - Valuenya boleh diubah/diupdate
    - Tidak mengenal block scope

    LET
    - Penamaan variable nya tidak boleh sama
    - Valuenya boleh diubah/diupdate
    - Mengenal block scope

    CONST
    - Penamaan variable nya tidak boleh sama
    - Valuenya TIDAK BOLEH DIUBAH/DIUPDATE
    - Mengenal block scope
*/

// var namaBuah = 'Apel'
// var namaBuah = 'Jeruk'
// console.log(namaBuah)

// const namaMakanan = 'Pizza'
// const namaMakanan = 'Kentang'

var point = 100
point = 1000
point = 0
console.log(point)

let score = 1000
score = 100
console.log(score)

const discount = 10
// discount = 50





// GLOBAL SCOPE
// LOCAL SCOPE: Apapun yang dibungkus dengan kurung kurwal {}


let studentName = 'Yuda'
{
    console.log(studentName)
}

{
    let StudentName = 'Bobby'
    {
        let StudentName = 'Avi'
        console.log(StudentName)
    }
}
