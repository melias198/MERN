function main (input) {
    /**
     * Write JavaScript code from here
     */
     let lines = input.split('\n');
     
     let coordinates1 = lines[0].split(' ').map(parseFloat);
     let coordinates2 = lines[1].split(' ').map(parseFloat);

     let x1=coordinates1[0];
     let y1=coordinates1[1];
     let x2=coordinates2[0];
     let y2=coordinates2[1];

     let dx = x2 - x1;
     let dy = y2 - y1;
     let distance = Math.sqrt(dx * dx + dy * dy);
     console.log('Distance:',distance.toFixed(2));
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})