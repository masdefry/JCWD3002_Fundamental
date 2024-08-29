/*
    Tampilkan Setiap Digit Phone Number dengan Parameter Input:
    const phoneNumber = 6281335719893

    Output di Terminal:
    6
    2
    8
    1
    3
    3
    5
    7
    1
    9
    8
    9
    3
*/

const phoneNumber = 6281335719893
const phoneNumberToString = phoneNumber.toString()

let start = 0
while(start < phoneNumberToString.length){
    console.log(phoneNumberToString[start])
    start++
}



/*
    Buatlah Program dengan Menggunakan Looping untuk Memvalidasi 
    Setiap Digit Phone Number

    Input   : '6281214186000'
    Output  : Phone Number is Valid

    Input   : '62813357abc198'
    Output  : Phone Number is Not Valid
*/

const input = '6281335719' // 0 - 13
let isValid = true
for(let i=0; i <= input.length-1; i++){
    if(isNaN(Number(input[i])) === true){ // Hanya untuk pengecekan huruf
        isValid = false
        break;
    }
}
if(isValid === true){
    console.log('Phone Number is Valid')
}else{
    console.log('Phone Number Invalid')
}



/*
    Buatlah Program dengan Menggunakan Looping untuk Menghitung Jumlah
    Huruf 'a' Ataupun 'A' dari Sebuah Paragraph

    Input   : 'Purwadhika Digital School'
    Output  : Jumlah A Sebanyak 3

    Input   : 'BSD'
    Output  : Jumlah A Sebanyak 0
*/

const text = 'Purwadhika Digital School'
let count = 0
for(let i=0; i <= text.length-1; i++){
   if(text[i] == 'a' || text[i] == 'A'){
    count++
   }
}

console.log(`Jumlah a or A Sebanyak ${count}`)
console.log('Jumlah A or a Sebanyak ' + count)




























/*
    Buatlah Program dengan Menggunakan Looping untuk Menghitung Jumlah
    Huruf Vokal dari Sebuah Paragraph

    Input   : 'Purwadhika'
    Output  : Jumlah Huruf Vokal Sebanyak 4
*/

/*
    Buatlah Program dengan Menggunakan Looping untuk Menentukan Suatu Kata
    Masuk Kategori Palindrome atau Tidak. 

    Notes: Palindrome adalah Kata yang dibalik Menyerupai Kata Aslinya

    Input   : 'malam'
    Output  : malam Adalah Palindrome

    Input   : 'kota'
    Output  : atok Bukan Palindrome

    Input   : 'Katak'
    Output  : Katak Adalah Palindrome
*/