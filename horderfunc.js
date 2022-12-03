
//functions that take function as an input value are called higher order functions
//Event-listner is also an higher order function
//this is demonstration of eventlistner or how event listner function work 

add = (num1,num2) =>{
    return num1 + num2;
}

mul = (num1,num2) =>{
    return num1 * num2;
}
sub = (num1,num2) =>{
    return num1 - num2;
}
div = (num1,num2) =>{
    return num1 / num2; 
}

calculator = (num1,num2,operator) =>{
    return operator(num1,num2);
}


