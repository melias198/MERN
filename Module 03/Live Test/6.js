function getFirstAndLast(numbers)
{
    const result = {
        first: numbers[0],
        last: numbers[numbers.length - 1]
    };
    
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const { first, last } = getFirstAndLast(numbers);
console.log(first); 
console.log(last); 