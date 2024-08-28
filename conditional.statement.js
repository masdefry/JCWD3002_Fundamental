// >>>>> CONDITIONAL STATEMENT <<<<<
// Pengkondisian, Digunakan Untuk Menentukan Scope Code Mana yang Akan di Eksekusi

// 1. If
/*
    Syntax:
    if(condition){
        Line of Code
    }
*/

const score = 70

if(score > 70){ // TIDAK TERPENUHU / FALSE
    console.log('Anda Lulus')
}

if(30 === 30){ // TRUE
    console.log('Run')
}

// 2. If-Else (Else Bisa Dikatakan Sebagai Default Output)
/*
    Syntax:
    if(condition){
        Line of Code
    }else{
        Line of Code
    }
*/

const studentExam = 80

if(studentExam > 80){ // 80 > 80? FALSE
    console.log('PASSED!')
}else{
    console.log('NOT PASSED!')
}

// 3. If-Else If-Else (Conditional Chaining)
// > 80 : A
// >= 70 : B
// >= 60 : C
// < 60  : D
// const studentExamScore = 81

// if(studentExamScore > 80){
//     console.log('Grade A')
// }else if(studentExamScore >= 70){
//     console.log('Grade B')
// }else if(studentExamScore >= 60){
//     console.log('Grade C')
// }else{
//     console.log('Grade D')
// }



const nilaiSiswa = 90
if(nilaiSiswa > 90){ // FALSE
    console.log('Lulus Baik')
}

if(nilaiSiswa > 70){ // TRUE
    console.log('Lulus')
}

if(nilaiSiswa > 60){ // TRUE
    console.log('Tidak Lulus')
}else{
    console.log('Undefined')
}


// 4. Ternary Operator
// const studentExamScore = 81

// if(studentExamScore > 80){
//     console.log('Grade A')
// }else if(studentExamScore >= 70){
//     console.log('Grade B')
// }else if(studentExamScore >= 60){
//     console.log('Grade C')
// }else{
//     console.log('Grade D')
// }

// /*
//     Syntax:
//     condition? TRUE : FALSE
// */

// studentExamScore > 80? 
// console.log('Grade A') : 
// studentExamScore >= 70? 
// console.log('Grade B') : 
// studentExamScore >= 60? 
// console.log('Grade C') : 
// console.log('Grade D')



/*
    Score >= 85 : LULUS
    Score >= 70  : LULUS BERSYARAT
    Score < 70  : REMEDIAL
*/
const nilai = 100

if(nilai >= 85){
    console.log('LULUS')
}else if(nilai >= 70){
    console.log('LULUS BERSYARAT')
}else{
    console.log('REMEDIAL')
}

nilai >= 85? console.log('LULUS') : nilai >= 70?  console.log('LULUS BERSYARAT') : console.log('REMEDIAL')