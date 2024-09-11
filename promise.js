const arrUser = ['User01', 'User02', 'User03']

function DeleteUser(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let idxUser = arrUser.indexOf(username) // -1

            if(idxUser !== -1){
                arrUser.splice(idxUser, 1)
                resolve('Delete Success')
            }else{
                reject('Delete Failed!')
            }
        }, 5000)
    })
}



function ShowUser(){
    return new Promise((resolve, reject) => {
        console.log('Promise Show User Executed!')
        resolve(arrUser)
    })
}

// PROMISE CHAINING ---> Async Await
DeleteUser('User05')
.then((res) => {
    console.log(res)
    return DeleteUser('User02')
})
.then((res) => {
    console.log(res)
    return ShowUser()
})
.then((res) => {
    console.log(res)
})
.catch((error) => {
    console.log(error)
})

// DeleteUser('User01').then((res) => {
//     console.log('Ini Masuk .then')
//     console.log(res)
// }).catch(error => {
//     console.log('Ini Masuk .catch')
//     console.log(error)
// }).finally(() => {
//     console.log('Always Run')
// })