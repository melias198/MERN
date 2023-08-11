function main (input) {
    /**
     * Write JavaScript code from here
     */
     var numbers=input.split(" ");

     var ans=Math.max(numbers[0],numbers[1],numbers[2]);
     console.log(ans);
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})