/*
    Buatlah Program dengan Menggunakan Looping untuk Menghitung Jumlah
    Huruf Vokal dari Sebuah Paragraph

    Input   : 'Purwadhika'
    Output  : Jumlah Huruf Vokal Sebanyak 4
*/
const text = 'Purwadhika'
let count = 0
for(let i=0; i <= text.length-1; i++){
    if(text[i].toLowerCase() === 'a' || text[i].toLowerCase() === 'i' || text[i].toLowerCase() === 'u' || text[i].toLowerCase() === 'e' || text[i].toLowerCase() === 'o'){
        count++
    }
}
console.log('Jumlah Huruf Vokal Sebanyak ' + count)
console.log(`Jumlah Huruf Vokal Sebanyak ${count}`)

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

// #01
// const input = 'Katak'
// let inputReverse = ''
// for(let i=input.length-1; i >= 0; i--){
//     inputReverse += input[i]
// }

// if(input.toLowerCase() == inputReverse.toLowerCase()){
//     console.log('Palindrome')
// }else{
//     console.log('Not Palindrome')
// }

// #02
const input = 'Katak'
const middle = input.length/2
let isPalindrome = true
for(let i=0; i < middle; i++){
    if(input[i] !== input[input.length-i-1]){
        isPalindrome = false 
        break;
    }
}

if(isPalindrome === true){
    console.log('Is Palindrome')
}else{
    console.log('Not Palindrome')
}

// >>>>> DAY-02 <<<<<
/*
    Odd or Even
*/
const number = 25

if(number % 2 === 0){
    console.log('Even Number')
}else{
    console.log('Odd Number')
}

/*
    Prime or Not 
*/
{
    const num = 10
    const mid = num/2
    let isPrime = true 
    for(let i=2; i < mid; i++){
        if(num % i === 0){
            isPrime = false
            break;
        }
    }

    if(isPrime === true){
        console.log(`${num} Adalah Bilangan Prima`)
    }else{
        console.log(`${num} Bukan Bilangan Prima`)
    }
}


/*
    Sum Number 1 to N
*/
{
    const number = 5
    let total = 0
    for(let i=1; i <= number; i++){
        total += i 
    }
    console.log(total)
}

/*
    Factorial
*/
{
    const number = 5
    let total = 1
    for(let i=1; i <= number; i++){
        total *= i 
    }
    console.log(total)
}

/*
    Print N First Fibonacci
*/
{
    let firstFibo = 1
    let secondFibo = 1

    for(let i=3; i <= 15; i++){
        var nextFibo = firstFibo + secondFibo // 0 + 1
        firstFibo = secondFibo;
        secondFibo = nextFibo;
    }

    console.log(nextFibo)
}

/*
    Currency
*/

const price = 100000
console.log(`Rp.${price.toLocaleString('id-ID')}`)

{
    const price = 100000000000000000
    const priceToString = price.toString()
    let formattedPrice = ''
    let count = 0
    for(let i=priceToString.length-1; i >= 0; i--){
        count++
        if(count === 3){
            formattedPrice += priceToString[i] + '.'
            count = 0
        }else{
            formattedPrice += priceToString[i]
        }
    }
    console.log(formattedPrice)
}

{
    const text = 'hello, world!'
    let outputText = ''

    for(let i=0; i <= text.length-1; i++){
        if(i === 0){
            outputText += text[i].toUpperCase()
        }else if(text[i-1] === ' '){
            outputText += text[i].toUpperCase()
        }else{
            outputText += text[i]
        }
    }

    console.log(outputText)
}