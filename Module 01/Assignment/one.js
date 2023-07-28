var input = prompt();

var value = parseInt(input)

DiscountPrice = (price) => {
    if (price < 50) 
    {
        ans = price;
    }
    else if (price >= 50 && price <= 100) 
    {
        ans = price - (price * 5 / 100);
    }
    else if (price >= 100 && price <= 200) 
    {
        ans = price - (price * 10 / 100);
    }
    else 
    {
        ans = price - (price * 15 / 100);
    }
    return ans;
}

var ans = DiscountPrice(value);

console.log(ans);