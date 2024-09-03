// >>>>> NESTED LOOP <<<<< 

// for(let i=1; i<=3; i++){
//     console.log(`Looping-i ke ${i}`)
//     for(let j=1; j<=3; j++){
//         console.log(`Looping-j ke ${j}`)
//     }
// }
let count = 1
let pattern = ''
for(let i=1; i<=3; i++){
    for(let j=1; j<=i; j++){
        if(count > 9){
            pattern+=`${count} `
        }else{
            pattern+=`0${count} `
        }
        count++
    }
    pattern += '\n'
}
console.log(pattern)



function FizzBuzz(n){
    for(let i=1; i<=n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('Fizz Buzz')
        }else if(i % 5 === 0){
            console.log('Buzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else{
            console.log(i)
        }
    }
}

FizzBuzz(20)



function BMI(weight, height){
    let bmi = weight / height**2

    if(bmi < 18.5){
        return 'Less Weight'
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return 'Ideal'
    }else if(bmi >= 25 && bmi <= 29.9){
        return 'Overweight'
    }else if(bmi >= 30 && bmi <= 39.9){
        return 'Very Overweight'
    }else{
        return 'Obesity'
    }
}

console.log(BMI(71, 1.74))