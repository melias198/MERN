function printObjectProperties(obj)
{
    if(Object.keys(obj).length === 0) {
        console.log("Object is empty");
    }
    else{
        for(let property in obj){
            console.log(`${property}: ${obj[property]}`);
        }
    }
}

let person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};
let person2={

}

printObjectProperties(person);
printObjectProperties(person2);