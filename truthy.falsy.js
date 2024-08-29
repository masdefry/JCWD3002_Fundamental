// >>>>> TRUTHY & FALSY <<<<<
// Nilai Non-Boolean yang Berubah Menjadi True or False Saat dikonversi Oleh Boolean
// FALSY    : 0, -0, 0n, '', null, undefined, NaN
// TRUTHY   : [], {}, Greater than 0, -1, -2, -3, Non-Empty String  

console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(0.1))
console.log(Boolean(0.00000000000000000000001))

const input = ''

if(input){ // Boolean('') ---> FALSE
    console.log('Input Valid')
}else{
    console.log('Input Must be Filled!')
}

if(input === ''){
    console.log('Input Harus Diisi')
}else{
    console.log('Input Valid')
}