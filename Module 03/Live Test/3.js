function sumArray(numbers)
{
    let sum = 0;
    for (const num of numbers) 
    {
      sum += num;
    }
  
    return sum;
}

console.log(sumArray([1, 2, 3])); 
console.log(sumArray([5, 10, 2, 3]));