// >>>>> LOOPING <<<<<
// Perulangan
// Parameter: 
//      1. Start
//      2. Condition to End Loop
//      3. Exit Way

// 1. While
/*
    Syntax:
        while(condition){
            Line of Code
        }
*/
const text = 'Hello, Dunia!'
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)

let start = 1 // 1 ---> 2 ---> 3 ---> 4 ... 999 ---> 1000 ---> 1001
while(start <= 1000){ // 1 <= 1000? TRUE | 2 <= 1000? TRUE | 3 <= 1000? TRUE | 999 <= 1000? TRUE | 1000 <= 1000? TRUE | 1001 <= 1000? FALSE
    console.log(text) // 1x ---> 2x ---> 3x ---> ... ---> 999x ---> 1000x
    start++ // EXIT WAY!
}

const txt = 'Hello, World!' // index = 0 - 12 ---> txt.length = 13
let startLoop = 0 // 0 -> 1 -> 2 -> 3 -> 4
while(startLoop <= txt.length-1){ // 0 <= 12? TRUE -> 1 <= 12? TRUE -> 2 <= 12? TRUE -> 3 <= 12? TRUE
    console.log(txt[startLoop]) // H -> e -> l -> l
    startLoop++
}

// 2. Do While
/*
    Syntax:
    do{
        Line of Code
    }while(condition)
*/
let s = 1 // 1 -> 2 -> 3 -> 4
do{
    console.log(s) // 1 ---> 2 ---> 3
    s++
}while(s <= 3) // 2 <= 3? TRUE | 3 <= 3? TRUE | 4 <= 3? FALSE


let i = 10 // 10 -> 11
do{
    console.log(i) // 10
    i++
}while(i < 5) // 11 < 5? FALSE



// 3. For Loop
/*
    Syntax:
    for(start; condition; exit way){
        Line of Code
    }
*/
for(let start=1; start <= 5; start++){ // i=1 -> i=2 -> i=3
    console.log(start) // 1 -> 2 -> 3
}



// >>>>> CONTINUE & BREAK <<<<< 
// Continue : Untuk Men-skip 1x Looping
// Break    : Untuk Menghentikan Looping

// Ex. Saya ingin melakukan looping dari angka 1-5. Setiap kali loop, 
//     tampilkan seluruh angka kecuali angka 3

for(let i=1; i<=5; i++){ // 1 <= 5? TRUE | 2 <= 5? TRUE | 3 <= 5? TRUE
    if(i == 3) continue; // 1 == 3? FALSE | 2 == 3? FALSE | 3 == 3? TRUE
    console.log(i) // 1 | 2
}

for(let i=1; i<=5; i++){ // 1 <= 5? TRUE | 2 <= 5? TRUE | 3 <= 5? TRUE
    if(i == 3) break; // 1 == 3? FALSE | 2 == 3? FALSE | 3 == 3? TRUE
    console.log(i) // 1 -> 2
}