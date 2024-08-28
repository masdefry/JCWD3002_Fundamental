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

    Input   : 6281214186000
    Output  : Phone Number is Valid

    Input   : 62813357198abc
    Output  : Phone Number is Not Valid
*/