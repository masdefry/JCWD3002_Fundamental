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
        resolve(arrUser)
    })
}



async function Main(){
    try {
        let res = await DeleteUser('User05') // Resolve
        console.log(res)
        let res1 = await DeleteUser('User02') // Resolve
        console.log(res1)
        let res2 = await ShowUser() // Resolve
        console.log(res2)
    } catch (error) {
        console.log('.catch')
        console.log(error)
    }
}

Main()