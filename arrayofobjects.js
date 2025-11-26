const simpleArray = [1, 2, 3, 4, 5];

const objectArray = [{
    name: 'Faheem',
    personAge: 22,
    gender: 'male'
},
{
    name: 'Faizan',
    personAge: 31,
    gender: 'male'
},
{
    name: 'Umar',
    personAge: 20,
    gender: 'male'
},
{
    name: 'kaitlyn',
    personAge: 20,
    gender: 'female'
}
]


console.log(objectArray);

for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i]['gender'] == ['female']) {
        console.log(objectArray[i]['name']);
    }
}