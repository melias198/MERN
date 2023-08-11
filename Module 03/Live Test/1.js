function maxNumber(...a)
{
    if(a.length==0)
    {
        return undefined;
    }
    var mx=a[0];
    for(var i=1;i<a.length;i++)
    {
        mx=Math.max(mx,a[i]);
    }
    return mx;
}


console.log(maxNumber(5, 10, 3, 7)); 
console.log(maxNumber(2, 8, 4));