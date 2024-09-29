# Group By Property in JavaScript

This project provides a JavaScript solution for grouping objects by a specific property, similar to the `GROUP BY` operation in databases. The function efficiently groups an array of objects based on the given property, such as `city`, into a structured object.

## 🛠️ Features

- **Group by Any Property**: Easily groups objects by any property, like `city`, `category`, or `type`.
- **Flexible Structure**: Returns a structured object where each key is the value of the grouped property, and each key holds an array of associated objects.
- **Pure JavaScript**: No libraries or frameworks are required.

## 📚 Example Usage

```javascript
const array = [
    {id: 1, name: "Bilal", city: "Lahore"},
    {id: 1, name: "ali", city: "Lahore"},
    {id: 3, name: "Hafsa", city: "Karachi"},
    {id: 4, name: "Rehan", city: "Lahore"},
    {id: 5, name: "Saqib", city: "Karachi"},
    {id: 6, name: "Farhan", city: "Islamabad"}
];

const groupMapReduce = array.reduce((map, element) => {
    const city = element.city;

    if (map[city]) {
        map[city] = map[city];
    } else {
        map[city] = [];
    }
    map[city].push(element);
    return map;
}, {});

console.log(groupMapReduce);

Output:

{
  Lahore: [
    { id: 1, name: 'Bilal', city: 'Lahore' },
    { id: 1, name: 'ali', city: 'Lahore' },
    { id: 4, name: 'Rehan', city: 'Lahore' }
  ],
  Karachi: [
    { id: 3, name: 'Hafsa', city: 'Karachi' },
    { id: 5, name: 'Saqib', city: 'Karachi' }
  ],
  Islamabad: [
    { id: 6, name: 'Farhan', city: 'Islamabad' }
  ]
}

🚀 Technologies Used
JavaScript: The core language used for the grouping operation.

📧 Contact
Created by Malik. Feel free to reach out with any questions or suggestions!
This README should give a clear understanding of the grouping functionality and how to use it. Let me know if you'd like to adjust anything!


