// Find Highest, Lowest and Average from Numbers in Array
function sortArray(arrNumbers){
    arrNumbers.sort((a, b) => a-b) // By Default Ascending
    const sumArr = arrNumbers.reduce((acc, currentValue) => {
        return acc + currentValue
    })
    console.log(`Lowest Number is ${arrNumbers[0]}. Highest Number is ${arrNumbers[arrNumbers.length-1]}. Average is ${sumArr/arrNumbers.length}`)
}

sortArray([12, 5, 23, 18, 4, 45, 32])



function findLowestHighest(arrNumbers){
    let lowestNumber = arrNumbers[0]
    let highestNumber = arrNumbers[0]
    let sumNumber = 0

    arrNumbers.forEach(item =>{
        if(item < lowestNumber) lowestNumber = item;
        if(item > highestNumber) highestNumber = item;
        sumNumber += item
    })
}

findLowestHighest([12, 5, 23, 18, 4, 45, 32])



// Seperates Array String
function separatesString(arrStr){
    const lastItem = ` and ${arrStr[arrStr.length-1]}` // `and Mango`
    const otherItems = arrStr.slice(0, arrStr.length-1) // 0, 2 ['Banana', 'Apple']
    return otherItems.join(', ') + lastItem
}

console.log(separatesString(['Banana', 'Apple', 'Mango']))



// Find Second Smallest
function findSecondSmallest(arrNumbers){
    arrNumbers.sort((a, b) => a-b) // [1, 3, 10, 12, 20, 100]

    return arrNumbers[1]
}

findSecondSmallest([10, 3, 1, 100, 12, 20])
findSecondSmallest([100, 1, 3, 5, 5])



// 
function sumOfTwoArrays(arr1, arr2){
    const sumArr = []
    arr1.forEach((item, index) => {
      sumArr.push(item + arr2[index])
    })

    return sumArr
}
console.log(sumOfTwoArrays([1, 2, 3], [4, 5, 6]))

// 
function sumMixedArrays(arrRandom){
    let count = 0
    arrRandom.forEach(item => {
        if(typeof item === 'number' && isNaN(item) === false) count += item
    })

    return count
}

sumMixedArrays(['3', 1, undefined, null, true, 2, NaN])







function findDuplicatesArrays(arrNumber){
    const filteredArr = []

    arrNumber.forEach((item, index) => {
        let findLastIndex = arrNumber.lastIndexOf(item)

        if(index !== findLastIndex && filteredArr.includes(item) === false) filteredArr.push(item)
    })

    console.log(filteredArr)
}

findDuplicatesArrays([1, 2, 2, 2, 3, 3, 4, 5, 5])



function maxArrayCapacity(maxSize, ...integers){
    return integers.slice(0, maxSize)
}

console.log(maxArrayCapacity(5, 5, 10, 8, 3, 4, 8, 9, 10))


function joinTwoArrays(arr1, arr2){
    return [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

    return arr1.concate(arr2)
}

joinTwoArrays([1, 2, 3], [4, 5, 6])