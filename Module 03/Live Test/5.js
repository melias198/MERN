function getEvenNumbers(array)
{
    let evenNumbers=[];
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2==0) evenNumbers.push(array[i]);
    }
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);