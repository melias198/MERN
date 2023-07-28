var input = prompt();

var n = parseInt(input);

multiplication = (number) => {
    for (i = 1; i <= 10; i++) {
        console.log(i, " * ", number, " = ", i * number, "<br>");
    }
}

multiplication(n);