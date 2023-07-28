function main (input) {
    /**
     * Write JavaScript code from here
     */
     const number=parseInt(input);

     if(number&1) console.log(number,'is an odd number.')
     else console.log(number, 'is an even number.')
     
}

process.stdin.on('data', data => {
    main(data.toString());
})