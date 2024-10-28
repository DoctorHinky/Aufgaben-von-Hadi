const person = {
  firstName: "Tim",
  age: 28,
}

// Your code here!

person.greet =function(greet) {
  return `${greet} ${this.firstName}`
}

console.log(person.greet("hi")) // Hi, my name is Tim
console.log(person.greet("hey")) // Hey, my name is Tim
console.log(person.greet("hello")) // Hello, my name is Tim