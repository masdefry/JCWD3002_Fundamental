1. Observe Code Below!
/*
        const studentData = {
            name: 'Amel',
            address: 'Jakarta',
            phoneNumber: [08123598733, '08523345976']
        }
        console.log(studentData.name)
        console.log(studentData.phonenumber) // Undefined
*/
a. Amel and 'ReferenceError: key phonenumber is not defined'
x. Amel and Undefined
c. Amel and Null
d. Amel and 'TypeError: phonenumber is not property'










2. See Looping Below!
/*
    do{
        let point = 100
        point += 5
        point -= 10
        console.log(point)
    }while(point <= 80)
*/
The program will be error. What caused error?
a. Infinite Loop, Because point += 5
b. Variable Naming is Ambigous
x Using Variable `point` as Condition
d. All Answer is Wrong










3. See Code Below!
/*
    function VerificationTicket(ticketNumber, callback){
        return callback(ticketNumber)
    }
    function Print(result){
        console.log(result)
    }
    VerificationTicket('3519789', 'Print')
*/
What will happen if the above program is executed?
x. TypeError: Callback is not a function
b. ReferenceError: Callback is not defined
c. '3519789'
d. TypeError: String argument cannot use as callback










4. Observe Code Below!
/*
    var class = '3002JCWD'
    class = Number(class) // NaN
    console.log(class)
    var class = '3002JCWD'
    class = parseInt(class) // 3002
    console.log(class)  
*/
What the result of both console.log?
a. NaN & 3002JCWD
x. NaN & 3002
c. 3002JCWD & NaN
d. 3002 & NaN











5. Where is the correct syntax of function in Javascript?
a. function DisplayNumber{ ... } // Tidak Ada ()
b. var showemail = () = { ... } // Tidak Ada Arrow
x function create_user(){ ... }
d. const addMenu () => { ... } // Tidak Ada = Sebelum ()










6. Oberve code below!
/*
    const txt = 'Student Purwadhika BSD'
    txt.replace(' ', '_') // 'Student Purwadhika BSD' 
    txt.split('_') // [] 
    txt.reverse() // 
    console.log(txt)
*/
What the result of console.log?
a. TypeError: Assignment to constant variable
b. DSB_akihdawruP_tneduts
c. [Student, Purwadhika, BSD]
x. TypeError: txt.reverse is not a function










7. Consider the following code, Based on the code, which time complexity best describes the code ?
/*
    const checkDuplicate = () => {
        for(let i=0; i<arr.length; i++){
            for(let i=0; i<arr.length; i++){
            
            }
        }
    }
*/










8. To get `script` world from string below, which one the correct console.log?
/*
    let caption = 'Belajar Pemrograman Javascript' // index terakhir = 29
*/
a. console.log(caption.slice(21, 25))
x console.log(caption.slice(24, 30))
c. console.log(caption.slice(20, 25))
d. console.log(caption.slice(23, 30))










9. Which one who has truthy value in Javascipt?
x "0"
b. ``
c. ''
d. 0









10. Observe code below!
/*
    const point = 90
    const result = point > 90 && point <= 100 // FALSE && TRUE ---> FALSE
    console.log(result)
*/
Result from console.log is?
x. false
b. true
c. undefined
d. 90









11. Observe code below!
/*
    let person = {
        name: 'foo', 
        description: 'bar'
    }
    const newPerson = { ...person }
    person.description = 'baz'
    console.log(newPerson.description)
*/
Output from console.log is?
a. Error
b. baz
x. bar
d. foo








12. Observe code below!
/*
    let person = {
        name: 'foo', 
        description: 'bar'
    }
    const newPerson = person
    newPerson.description = 'baz'
    console.log(person.description)
*/
Output from console.log is?
a. Error
x baz
c. bar
d. foo








13. Oberve code below!
/*
    const arr = [3.5, 7.2, 5, 5, 9.9, 3.3]
    arr.sort() // [3.3, 3.5, 5, 5, 7.2, 9.9]
    arr.reverse() // [9.9, 7.2, 5, 5, 3.5, 3.3]
    console.log(arr[2]) // 5
*/
a. 7.2
b. 9.9
c. 3.3
d. 3.5 
TIDAK ADA JAWABANNYA!










14. Which is not a way to write objects in JavaScript?
a. let obj = new Object()
x. let obj = {name = "Aldi"}
c. let obj = {name : "Aldi"}
d. let obj = {}










15. Output from this program is?
/*
    console.log(Boolean({name: 'Andi'}) == Boolean({hobby: 'Futsal'}))
*/
x. true
b. false
c. undefined
d. null