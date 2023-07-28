function main (input) {
    /**
     * Write JavaScript code from here
     */
     const name=`Hello, ${input.trim()}! Nice to meet you.`

     console.log(name)
}

process.stdin.on('data', data => {
    main(data.toString());
})