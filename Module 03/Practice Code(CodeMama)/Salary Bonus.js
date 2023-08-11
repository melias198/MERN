function main (input) {
    /**
     * Write JavaScript code from here
     */

    var salary=parseFloat(input);

    var ans=(salary*10)/100;

    console.log(parseInt(ans));
    
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})