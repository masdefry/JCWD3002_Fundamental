// Lakukan Get Data ke API Berikut Menggunakan Function Fetch ---> Stackoverflow
// https://jsonplaceholder.typicode.com/users
// Buatlah dengan Menggunakan Handle Error .then .catch dan try-catch

// fetch() ---> Function yang digunakan untuk nge-handle Promise
// let resGlobal
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//     console.log(res) // JSON
//     return res.json()
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

async function FetchData(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.coms/users')
        res = await res.json()
        return res
    } catch (error) {
        console.log(error)
    }
}

FetchData()