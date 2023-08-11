function main (input) {
    /**
     * Write JavaScript code from here
     */

    var cel=parseFloat(input);

    var far=(cel*(9/5))+32;

    console.log("The temperature in Fahrenheit is:",far.toFixed(2));
    
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})