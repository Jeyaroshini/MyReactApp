/* const numbers =[1,2,3,4,5]
let array=numbers.map(function(value)
{
    return value *2
})
console.log(array)  //[ 2, 4, 6, 8, 10 ] 

//--------------------------------------------------------

const array =[{id:1,firstName:"Jeya",lastName:"Roshini"},
              {id:2,firstName:"Sri",lastName:"Subiksha"}]
let array1=array.map(function(value)
{
    return value.firstName+value.lastName
})
console.log(array1) //[ 'JeyaRoshini', 'SriSubiksha' ] 

//--------------------------------------------------------

const numbers=[1,2,3,4,5]
const doubled=numbers.map(item=>item*3)
console.log(doubled) //[ 3, 6, 9, 12, 15 ] 

//--------------------------------------------------------

const numbers=[1,2,3,4,5,6]
const even=numbers.filter(item => item %2==0)
console.log(even) //[2, 4, 6]

//--------------------------------------------------------

const student=[{name:"Roshini",grade:60},
               {name:"Subiksha",grade:90},
            {name:"Prathiksha",grade:96}]

const studentGrade= student.filter(studentInfo=>studentInfo.grade >= 90)
console.log(studentGrade)  //[ { name: 'Subiksha', grade: 90 }, { name: 'Prathiksha', grade: 96 } ] 

//--------------------------------------------------------

const numbers=[1,2,3,4,5,6]
const sum= numbers.reduce(function(result,element)
{
    return result + element
},0)
console.log(sum) //21 

//--------------------------------------------------------

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1
    } else {
        obj[pet]++
    }
    return obj
}, {})

console.log(petCounts) //{ dog: 2, chicken: 3, cat: 1, rabbit: 1 }

//--------------------------------------------------------

var numbers=[1,2,2,3,3,3]
var numberCount=numbers.reduce(function(element,number)
{
    if (!element[number])
    {
        element[number]=1
    }
    else
    {
        element[number]++
    }
    return element
},{})

console.log(numberCount)  //{ '1': 1, '2': 2, '3': 3 } 

//--------------------------------------------------------

let students=[{id:101,name:"Roshini",Domain:"BasketBall"},
{id:102,name:"Subiksha",Domain:"BasketBall"},
{id:101,name:"Prathiksha",Domain:"Cricket"},{id:101,name:"Surya",Domain:"FootBall"}]

let basketBall=students.filter(function(student)
{
    return student.Domain == "BasketBall"
}).map(function(student)
{
    return student.name
})

console.log("The basketPlayers are: ")
basketBall.forEach(function(players)
{
    console.log(players)
})  //The basketPlayers are: Roshini Subiksha 

//--------------------------------------------------------

const tasks=[{name:"Roshini",id:001},{name:"Subiksha",id:002},{name:"Prathiksha",id:003}]
const sample=tasks.filter(function(data)
{
    return data.id == 001
}).map(function(task)
{
    return task.name
})
console.log(sample) //[ 'Roshini' ]

//-------------------------------------------------------- 

const array =[1,2,3,4]
const res=array.filter(a => {
	if (a % 2 === 0)
	  return true
	return false
})
console.log(res) */


var officers = [
	{ id: 20, name: 'Captain Piett' },
	{ id: 24, name: 'General Veers' },
	{ id: 56, name: 'Admiral Ozzel' },
	{ id: 88, name: 'Commander Jerjerrod' }
  ];
const officersId = officers.map(offcId => offcId.id)
console.log(officersId)

 