function main (input) {
    /**
     * Write JavaScript code from here
     */
     const size=input.length-1;
     let a
     let b
     if(size==3)
     {
        a=input.slice(0,1)
        b=input.slice(2,3)
     }
     else
     {
        a=input.slice(0,2)
        b=input.slice(3,5)
     }

     const x=parseInt(a)
     const y=parseInt(b)

     console.log(x+y)
}

process.stdin.on('data', data => {
    main(data.toString());
})