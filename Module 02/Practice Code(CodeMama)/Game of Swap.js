function main (input) {
    /**
     * Write JavaScript code from here
     */
    let [a, b] = input.split(' ').map(Number);

    let before = "Before swapping:";
    let after = "After swapping:";
    
    console.log(before,`num1 = ${a}, num2 = ${b}`);

    let tmp=a;
    a=b;
    b=tmp;
    console.log(after,`num1 = ${a}, num2 = ${b}`);
    
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})