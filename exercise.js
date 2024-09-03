class Student{
    constructor(name, email, age, score){
        this.name = name; 
        this.email = email; 
        this.age = age; 
        this.score = score
    }

    convertAge(){
        return new Date().getFullYear() - new Date(this.age).getFullYear()
    }
}

const students = [
    new Student('Defryan', 'defryan@gmail.com', '2000-01-01', 90),
    new Student('Aviawan', 'aviawan@menkominfo.com', '2000-01-01', 100), 
    new Student('Yusuf', 'yusuf@yahoo.com', '2000-01-01', 95)
]

function CalculateStudentData(arrStudents){
    const arrScore = []
    const arrAge = []
    
    arrStudents.forEach(item => {
        arrScore.push(item.score)
        arrAge.push(item.convertAge())
    })

    return {
        score: {
            min: Math.min(...arrScore), 
            max: Math.max(...arrScore),
            avg: arrScore.reduce((acc, currentValue) => acc + currentValue)/arrScore.length
        },
        age: {
            min: Math.min(...arrAge), 
            max: Math.max(...arrAge),
            avg: arrAge.reduce((acc, currentValue) => acc + currentValue)/arrAge.length
        }
    }
}

console.log(CalculateStudentData(students))