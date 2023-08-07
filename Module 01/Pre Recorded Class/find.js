var numArray=[20,40,69,54,68];

var newArray=numArray.find(function(value){
    return value>50;
})

var valueIndex=numArray.findIndex(function(value){
    return value>60;
})

document.write(newArray,"<br>");
document.write(valueIndex);