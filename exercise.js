// 01. Function to Check Two Property of Object Are Equal
// Ex. { a: 1 } & { a: 100 } ---> FALSE
//     { a: 1 } & { a: 1 } ---> TRUE

// 02. Function to Get Intersection of Two Object
// Ex. { a: 1, b: 2 } & { a: 1, c: 3 } ---> { a: 1 }
function IntersectionObj(obj1, obj2){
    let newObj = {}

    for(let key in obj1){
        if(obj1[key] === obj2[key]){
            newObj[key] = obj1[key ]
        }
    }

    console.log(newObj)
}

let obj1 = {
    a: 1, 
    c: 2
}
let obj2 = {
    c: 3,
    a: 1
}
IntersectionObj(
    obj1, obj2
)

// 03. Function to Switch Key & Value 
// Ex. [ { name: 'David', age: 20 } ] ---> [ { David: 'name', 20: 'age' } ]

// 04. Recursive Function
function RecursiveFactorial(number, currentValue = 1){ // number = 3; currentValue = 20
    currentValue *= number // 20 *= 3 = 60
    number-- // number = 2

    if(number > 0){ // 4>0? T; 3>0? T; 2>0? T
        RecursiveFactorial(number, currentValue) // 2, 60
    }else{
        console.log(currentValue)
    }
    
}

RecursiveFactorial(5)