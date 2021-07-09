//        | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

//******************* */ chapter 38 to 42 *********************


// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function pow(){
//     var a = +prompt("Enter your favourite numbers");
//     var b = +prompt("Enter your power numbers");
//     var c = Math.pow(a,b);
//     document.write("your number is "+ a +" and power number is " + b +" is equal to :"  + c);

// }
// pow();


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …


// function leapYear(){
//     var year = +prompt("enter your year");

//     if (year % 4 == 0) {
//         document.write(year + " Is a Leap Year")
//     }
//     else {
//         document.write(year + " Is not a Leap Year")
//     }
// }

//     leapYear()

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// var a = +prompt("enter value of a");
// var b = +prompt("enter value of b");
// var c = +prompt("enter value of c");
// var S = +prompt("enter value of S");

// function area(){
// var  l = (S*(S-a)*(S-b)*(S-c));
// document.write("The length of the sides of a triangle is " + l);
// }
// area();

// function second(){
//     var l = ( a + b + c ) / 2;
// document.write("The length of the sides of a triangle is " + l);

// }
// second();



// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var subject1 = +prompt("Enter your first subject number");
// var subject2 = +prompt("Enter your Second subject number");
// var subject3 = +prompt("Enter your third subject number");

// function avg(){
//     var total = (subject1 + subject2 + subject3)/300;
//     return total;
// }
// function percentage(){
//     var total = avg();
//     var per = total * 100;
// return per;
// }
// function main(){
//     document.write("your percentage is " + percentage())

// }
// main();

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.




// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer. `


