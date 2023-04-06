//  ***************************QUESTION 01************************
let num1 = +prompt("Enter First Number: ");
let num2 = +prompt("Enter Second Number: ");
if(num1 > num2){
    console.log("Your First Number is large: " + num1);
}else if(num1 < num2){
    console.log("Your Second Number is large: " + num2);
}

// ************************QUESTION 02*****************************

let userInput = +prompt("Enter a number: ");
if(userInput > 0){
    console.log("Ths Sign is +");
}else if (userInput < 0){
    console.log("The sign is -")
}

// **********************QUESTION 03*******************************
let userInput1 = +prompt("Enter First Number: ");
let userInput2 = +prompt("Enter Second Number: ");
let userInput3 = +prompt("Enter Third Number: ");
let userInput4 = +prompt("Enter Fourth Number: ");
let userInput5 = +prompt("Enter Fifth Number: ");
if(userInput1 > userInput2 && userInput1 > userInput3 && userInput1 > userInput4 && userInput1 > userInput5){
    console.log("your First Number is larger: " + userInput1);
}else if(userInput2 > userInput3 && userInput2 > userInput4 && userInput2 > userInput5){
    console.log("your Second Number is larger: " + userInput2);
}else if(userInput3 > userInput4 && userInput4 > userInput5){
    console.log("your Third Number is larger: " + userInput3);
}else if(userInput4 > userInput5){
    console.log("your Fourth Number is larger: " + userInput4);
}else{
    console.log("your Fifth Number is larger: " + userInput5);
}

//************************QUESTION 04 ******************************
for(let i = 0; i <= 15; i++){
    if(i % 2 === 0){
        console.log( i + " is even");
    }else{
        console.log(i + " is odd");
    }
}
// **********************QUESTION 05*********************************
let marks = +prompt("Enter your Marks: ");
if(marks < 100 && marks >= 90){
    console.log("Your Grade is A");
}else if(marks < 90 && marks >= 80){
    console.log("Your Grade is B");
}else if(marks < 80 && marks >= 70){
    console.log("Your Grade is C");
}else if(marks < 70 && marks >= 60){
    console.log("Your Grade is D");
}else if(marks < 60){
    console.log("Your Grade is F");
}

// *********************QUESTION 06***********************************
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        // document.write(i + " FizzBuzz"+"<br>" )
    }else if(i % 3 === 0){
        console.log("Fizz");
        // document.write(i + " Fizz"+"<br>")
    }else if(i % 5 === 0){
        console.log("Buzz");
        // document.write(i + " Buzz"+"<br>")
    }else{
        console.log("Not");        
        // document.write(i + " nothing"+"<br>")
    }
}

//************************QUESTION 07*********************************** */
for(let i = 1; i <= 5; i++){
// document.write("<br>")
console.log("\n")
    for(let j = 1; j <= i; j++){
// document.write("*")
console.log("*")
    }
} 