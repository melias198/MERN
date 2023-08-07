//Regular Function

async function fun1()
{
    await fetch('https://dummyjson.com/products/1');
}


//Arrow Function

fun2=async()=>{
    await fetch('https://dummyjson.com/products/2');
}


fun2();
fun1();