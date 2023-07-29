search=(array,item)=>{
    for(i=0;i<array.length;i++)
    {
        if(array[i]==item) return i;
    }
    return -1;
}

console.log(search([1,2,3],4));