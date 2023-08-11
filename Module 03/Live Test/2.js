function concatStrings(...str)
{
    let result = '';
    for (const st of str) 
    {
        result += st;
    }
    return result;
}

console.log(concatStrings("Hello", " ", "World"));
console.log(concatStrings("I", " ", "love", " ", "JavaScript")); 