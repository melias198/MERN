function main (input) {
    /**
     * Write JavaScript code from here
     */
    var n=input.split(" ");

    var sum=(parseFloat(n[0])+parseFloat(n[1])+parseFloat(n[2]));

    var avg=sum/3;

    console.log("Average:",avg.toFixed(2));

}

process.stdin.on('data', data => {
    main(data.toString().trim());
})