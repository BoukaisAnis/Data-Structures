


const person1 = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com"
};




const person2 = {
    name: "Jane Smith",
    age: 32,
    email: "jane.smith@example.com"
};



const person3 = {
    name: "Mike Johnson",
    age: 29,
    email: "mike.johnson@example.com"
};




const person4 = {
    name: "Alice Brown",
    age: 34,
    email: "alice.brown@example.com"
};



const people = [person1, person2, person3, person4];




function filterOver30(peopleArray) {
    return peopleArray.filter(person => person.age > 30);
}




const peopleOver30 = filterOver30(people);
console.log(peopleOver30);
