function findMaxNumber(numbers)
{
    if(numbers.length==0)
    {
        return null;
    }
    let max=numbers[0];
    for(let i=1;i<numbers.length;i++)
    {
        max=Math.max(max,numbers[i]);
    }
    return max;
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null