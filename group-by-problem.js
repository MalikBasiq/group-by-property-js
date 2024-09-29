const array = [
    {id: 1, name: "Bilal", city: "Lahore"},
    {id: 1, name: "ali", city: "Lahore"},
    {id: 3, name: "Hafsa", city: "Karachi"},
    {id: 4, name: "Rehan", city: "Lahore"},
    {id: 5, name: "Saqib", city: "Karachi"},
    {id: 6, name: "Farhan", city: "Islamabad"}
]


const groupMapReduce = array.reduce((map, element) => {
    const city = element.city;

    if(map[city]) //if map[city] exist then storing again the already existing array other wise return an empty array for first time
    {
        map[city]=map[city]
    }
    else
    {
        map[city]= []
    }
    map[city].push(element);
    return map;
}, {});

console.log(groupMapReduce);

// Output: {
//   Lahore: [
//     { id: 1, name: 'Bilal', city: 'Lahore' },
//     { id: 1, name: 'ali', city: 'Lahore' },
//     { id: 4, name: 'Rehan', city: 'Lahore' }
//   ],
//   Karachi: [
//     { id: 3, name: 'Hafsa', city: 'Karachi' },
//     { id: 5, name: 'Saqib', city: 'Karachi' }
//   ],
//   Islamabad: [ { id: 6, name: 'Farhan', city: 'Islamabad' } ]
// }


