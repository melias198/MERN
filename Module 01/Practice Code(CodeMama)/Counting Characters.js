function main (input) {
    /**
     * Write JavaScript code from here
     */
    let size=input.length-1;
    console.log(size)
}

process.stdin.on('data', data => {
    main(data.toString());
})