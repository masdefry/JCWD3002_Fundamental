// >>>>> CALLBACK <<<<< 
// Function yang dijadikan Argument oleh Function Lain

// Case. Buatkan 2 Buah Function. Function yang Pertama Melakukan Operasi Penjumlahan. 
//       Function yang Kedua Menampilkan Hasil Operasi Function yang Pertama

// Without CB
function Sum(num1, num2){
    return num1 + num2 
}

function Display(result){
    console.log(result)
}

let sumResult = Sum(1, 5) // Sum(1, 5) Akan Me-return 6 -> 6 disimpan ke Variable sumResult
Display(sumResult)

// With CB
// Indirect CB
{
    function Sum(num1, num2, cb){ // cb: Digunakan untuk Menampung Function Display
        let result = num1 + num2 // 1 + 5 = 6
        return cb(result) // Display(result)
    }

    function Display(result){
        console.log(result)
    }

    Sum(1, 5, Display) // #1
}

// Direct CB
{
    function Sum(num1, num2, cb){ // cb: Digunakan untuk Menampung Function Display
        let result = num1 + num2 // 1 + 5 = 6
        return cb(result)
    }

    

    Sum(1, 5, function (result){
        console.log(result)
    }) // #1

    Sum(5, 5, (result) => {
        console.log(result)
    })
}



// Exercise. Convert this Function tobe CB Function
function ValidateUsername(username, cb){
    if(username.length > 6) return cb({ isValid: true, username: username }) 

    return cb({ isValid: false })
}



ValidateUsername('ryan', function (result){
    console.log(result)
})





// Case. Delete Data(5') ---> Show Data(3')
// Without CB
// const arrUser = ['User01', 'User02', 'User03']

// function DeleteUser(username){
//     setTimeout(() => {
//         let idxUser = arrUser.indexOf(username)
//         arrUser.splice(idxUser, 1)
//         console.log('Delete Success')
//     }, 5000)
// }

// function ShowUser(){
//     setTimeout(() => {
//         console.log(arrUser)
//     }, 3000)
// }

// DeleteUser('User01') // 5'
// ShowUser() // 3'



// With CB
const arrUser = ['User01', 'User02', 'User03']

function DeleteUser(username, cb){
    setTimeout(() => {
        let idxUser = arrUser.indexOf(username)
        arrUser.splice(idxUser, 1)
        console.log('Delete Success')
        cb()
    }, 5000)
}

// CALLBACK HELL ---> PROMISE
DeleteUser('User01', function(){
        DeleteUser('User02', function (){
            setTimeout(() => {
                console.log(arrUser)
            }, 3000)
        }
    )}
) 