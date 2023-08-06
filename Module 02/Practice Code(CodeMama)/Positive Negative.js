function main (input) {
    /**
     * Write JavaScript code from here
     */
    let n=parseInt(input);
    if(n>0) console.log(n,'is a positive number.');
    else if(n<0) console.log(n,'is a negative number.');
    else console.log('The number is zero.');
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})