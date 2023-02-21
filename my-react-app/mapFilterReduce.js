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
console.log(res) 


var officers = [
	{ id: 20, name: 'Captain Piett' },
	{ id: 24, name: 'General Veers' },
	{ id: 56, name: 'Admiral Ozzel' },
	{ id: 88, name: 'Commander Jerjerrod' }
  ];
const officersName = officers.filter(offcId => offcId.name === 'General Veers')
console.log(officersName) 

var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];
  const rebels1 = pilots.filter(pilotFaction => pilotFaction.faction === "Rebels")
  const empire1 = pilots.filter(pilotEmpire => pilotEmpire.faction === "Empire")
  const rebels = pilots.map(pilotFaction => pilotFaction.faction)
  const id = pilots.map(pilotId => pilotId.id)
  const name = pilots.map(pilotName => pilotName.name)
  console.log(rebels)
  console.log(id)
  console.log(name)
  console.log(rebels1)
  console.log(empire1)

//[ 'Rebels', 'Empire', 'Empire', 'Rebels' ]
[ 2, 8, 40, 66 ]
[ 'Wedge Antilles', 'Ciena Ree', 'Iden Versio', 'Thane Kyrell' ]
[
  { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
  { id: 66, name: 'Thane Kyrell', faction: 'Rebels' }
]
[
  { id: 8, name: 'Ciena Ree', faction: 'Empire' },
  { id: 40, name: 'Iden Versio', faction: 'Empire' } 


  var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];
  const result = personnel.filter(value => value.isForceUser).map(score => score.pilotingScore + score.shootingScore).reduce((totalResult,score) => totalResult + score ,0)
  console.log(result)
  const res = personnel.filter( value => value.isForceUser)
  const name= res.map(value => value.name)
  const personnelScore = res.map(score => score.pilotingScore + score.shootingScore)
  const total = personnelScore.reduce(function (totalResult, score)
  {
    return totalResult + score
  },0)
  console.log(res)
  console.log(name)
  console.log(personnelScore)
  console.log(total) */


const array = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batterList":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]
const type1 = array.filter(donutId => donutId.id == 0001).map(dis => dis.topping)
const type2  = array.filter(donutId => donutId.id == 0002).map(dis => dis.topping)
const type3 = array.filter(donutId => donutId.id == 0003).map(dis => dis.topping)
const type4 = array.filter(id => id.id== 0001).map(batterName =>batterName.batterList.batter)
console.log(type1)
console.log(type2)

console.log(type3)
console.log(type4)