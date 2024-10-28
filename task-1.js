// Target array
const people = []

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"]
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"]
const ages = [18, 27, 31, 44]
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"]

// Your code here!

function intro () {
    return `My Name is ${this.fullName}, I am ${this.age} years old,\ncurrently I'm living in ${this.city}.`
}

for(let i = 0; i < firstNames.length; i++){
    people.push({
        firstName: firstNames[i],
        lastName: lastNames[i],
        fullName: firstNames[i] + ' ' + lastNames[i],
        hasKids: Math.round(Math.random()),
        isMarried: Math.round(Math.random()),
        age: ages[i],
        city: cities[i],
        introduce: intro
    })
}

console.log(people);
