function doubleNumbers(numbers)
{
    const newArr=numbers.map(function(number){
        return number*2;
    });

    return newArr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); 