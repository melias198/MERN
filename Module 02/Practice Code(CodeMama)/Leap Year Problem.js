function main (input) {
    /**
     * Write JavaScript code from here
     */

    let year=parseInt(input);
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
    {
        console.log(year,'is a leap year.');
    }
    else
    {
        console.log(year,'is not a leap year.');
    }
    
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})