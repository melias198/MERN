function createPerson(Name,Age,Occupation)
{
   let person={
        name: Name,
        age: Age,
        occupation: Occupation
    }

    return person;
}

const person1 = createPerson("John", 30, "Engineer");
console.log(person1);