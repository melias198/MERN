findSmallestNum=(array)=>{
    var newArr= array.sort((a, b) => a - b);
    return newArr[0];
}

console.log(findSmallestNum([34,-345,-1,100]));