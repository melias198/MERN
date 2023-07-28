var array=[12, 34, 45, 23, 6, 78, 54, 90];

filterArray=(value)=>{
    return value%2==0;
}

console.log(array.filter(filterArray))