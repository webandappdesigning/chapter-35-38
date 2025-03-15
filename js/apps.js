// *-----Chapter 35-38 Functions-----*
// ==== Question 1 =====
// let today = new Date();
// function currentDate() {
//     console.log(today);
    
// }
// currentDate();

// ==== Question 2 =====

// let firstName = prompt("enter first name: ");
// let lasttName = prompt("enter last name: ");

// function fullName() {
//     alert("welcome to my website "+firstName+lasttName);
// }

// fullName();

// ==== Question 3 =====

// let num1 = +prompt("enter first number: ");
// let num2 = +prompt("enter last number: ");

// function sum() {
//     alert("The "+num1+" + "+num2 +" is "+ (num1+num2) );
// }

// sum();

// ==== Question 4 =====


// function calculator(num1,opera,num2){
//     if(opera==="+"){
//         let result= num1+num2;
//         alert(result)
//     }
//     else if(opera==="-"){
//         let result= num1-num2;
//         alert(result)
//     }
//     else if(opera==="*"){
//         let result= num1*num2;
//         alert(result)
//     }
//     else if(opera==="/"){
//         let result= num1/num2;
//         alert(result)
//     }
//     else{
//         alert("Invalid Operator")
//     }
// }
// let firstNumber=+prompt("Enter first number");
// let operator=prompt("Enter operator");
// let secondNumber=+prompt("Enter Second number");
// calculator(firstNumber,operator,secondNumber);

// ==== Question 5 =====


// let number=+prompt("Enter number to be square");

// function square() {
//     let square = number**2;
//     alert(square);
// }
// square();

// ==== Question 6 =====

// let result = 1;
// let factorial = prompt("enter the number: ")
// for (let i = factorial; i >= 1; i--){
//     result = result * i;
// }
// console.log(result);

// ==== Question 7 =====


// let start = +prompt("Enter the start number for counting:");
// let end = +prompt("Enter the end number for counting:");

// function num(){ 
//     for(let i = start; i <= end; i++ )
//     document.write(i + '<br>');
// }
// num();

// ==== Question 8 =====

// let base = +prompt("Enter base value")
// let perpendicular = +prompt("Enter perpendicular value")
// function hypotenuse(){
// document.write("The value of base is: ",base,"<br>")
// let baseresult = base * base
// document.write("The value of base square (Base <sup>2</sup> ) is: ",baseresult,"<br>","<br>")
// document.write("The value of perpendicular is: ",perpendicular,"<br>")
// let perpendicularresult = perpendicular * perpendicular
// document.write("The value of perpendicular square (Perpendicular <sup>2</sup> ) is: ",perpendicularresult,"<br>","<br>")
// let result = baseresult+perpendicularresult
// document.write("The value of hypotenuse ( Base <sup>2</sup> + Perpendicular <sup>2</sup> ) is: ",result,"<br>");
// function square(){ 
// let final = result * result
// document.write("The value of hypotenuse square (Hypotenuse<sup>2</sup> ) is: ",final,"<br>")
// return final;
// }
// return square()
// }
//  hypotenuse()

// ==== Question 9 =====


// function areaCalculate(width,height){
//     let A=width*height;
//     return A;
// }
// let width=+prompt("Enter width of triangle");
// let height=+prompt("Enter height of triangle");
// let result=areaCalculate(width,height);
// document.write(result)

// ==== Question 10 =====

// let str = prompt("Write any word");

// function palindrome(string) {
//       let check = "";
//       for (let i = string.length - 1; i >= 0; i--) {
//             check += string[i]
//       }
//       if (string === check) {
//             alert(string + " is a plindrome word")
//       }
//       else {
//             alert(string + " is not a plindrome word")

//       }
// }
// palindrome(str);


// ==== Question 11 =====

// function capitalizeFirstLetter(str) {
    
//     const words = str.split(' ');
  
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }

//     const result = words.join(' ');

//     console.log(result);
// }
// capitalizeFirstLetter("the quick brown fox");  

// ==== Question 12 =====

// function findLongestWord(str) {
    
//     const words = str.split(' ');
//     let longestWord = "";

//         for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];  
//         }
//     }
//     console.log("Longest word:", longestWord);
// }
// findLongestWord("Web Development Tutorial")

// ==== Question 13 =====

// function countLetter(str, letter) {
//     let count = 0; 
    
//     for (let i = 0; i < str.length; i++) { 
//         if (str[i] === letter) { 
//             count++;
//         }
//     }
    
//     return count; 
// }

// console.log(countLetter('JSResourceS.com', 'o')); 

// ==== Question 14 =====

// let radius = Number(prompt("enter the radius:"));

// function calcCircumferance(radius) {
//     let result = radius*2*3.142
//     console.log("The circumferance is",result)
    
// }

// function calcArea(radius) {
//     let result = 3.142*radius*radius
//     console.log("The area is ",result)
// }
// calcCircumferance(radius);
// calcArea(radius);