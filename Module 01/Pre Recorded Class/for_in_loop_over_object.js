var Person={
    name: "Jhon Snow",
    age: 25,
    city: "New York",
    height: "7 Feet"
}

for(var item in Person)
{
    document.write(Person[item]+"<br>");
    console.log(Person[item],"\n");
}