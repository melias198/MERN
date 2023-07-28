var input=prompt();

var number=parseInt(input)


calculateGrade=(marks)=>{
    switch(true)
    {
        case (marks<60):
        return 'F'; 
        case (marks>=60 && marks<=69):   
        return 'D';
        case (marks>=70 && marks<=79):
        return 'C';
        case (marks<=80 && marks<=89):
        return 'B';
        default:
        return 'A';
    }
}

var result=calculateGrade(number);

document.write(result);