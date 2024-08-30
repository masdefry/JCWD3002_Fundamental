// >>>>> LOOPING ARRAY <<<<<

const programs = ['JCWD', 'JCVD', 'JCDS'] // programs.length = 3; programs.length-1 = 2;

for(let i=0; i <= programs.length-1; i++){ // 0<=2? TRUE; 1<=2? TRUE; 2<=2? TRUE; 3<=2? FALSE
    console.log(programs[i]) // programs[0]='JCWD'; programs[1]='JCVD'; programs[2]='JCDS';
}

// For-Of Loop
for(let bebas of programs){
    console.log(bebas)
}

// For-In Loop
for(let item in programs){
    console.log(item) // Index
    console.log(programs[item]) // Value/Item
}



const campusPurwadhika = ['Jkt', 'Bsd', 'Btm', 'Sby', 'Jog', 'Bdg']
// .Map: Menghasilkan Array Baru
const arrCampusPwd = campusPurwadhika.map((itm, idx) => {
    return `Campus: ${itm}`
})
console.log(arrCampusPwd)

// .ForEach
const newCampusPwd = []
campusPurwadhika.forEach((item, index) => {
    newCampusPwd.push(`Campus: ${item}${index}`)
})
console.log(newCampusPwd)

// .Filter: Menghasilkan Array Baru + Filter
const arrNumbers = [100, 5, 3, 2, 1]

const filteredArrNumbers = arrNumbers.filter((item, index) => {
    return item < 10
})

console.log(filteredArrNumbers)

// .Sort
const randomNumbers = [10, 11, 200, 1, 5, 25]
randomNumbers.sort((a, b) => a-b)
randomNumbers.sort((a, b) => b-k)
console.log(randomNumbers)