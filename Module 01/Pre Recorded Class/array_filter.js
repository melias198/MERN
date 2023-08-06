var array=[20,30,40,80,90];

Filter=(n)=>{
    return n>50;
}

var newArray=array.filter(Filter);

document.write(newArray)