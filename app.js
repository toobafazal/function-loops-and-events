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
// function IndexOf(ar) {
//     var arr = new Array(), arr = arr.concat(ar)
//     arr.indexof = function (search, index) {
//         var len = this.length
//         if (len <= 0) return -1
//         if (typeof index == 'undefined') index = 0;
//         if (typeof index == 'number') {
//             index = index >= 0 ? index : 0
//         } 
//         else {
//             return 'err'
//         }
//         for (let i = index; i < len; i++) {
//             if (this[i] === search) return i;
//         }
//         return -1
//     }
//     return arr
// }

// var x = new IndexOf([1, 2, 3, 4]);
// console.log(x.indexof(2))




// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// function vowel(){
//     var string = "The quick brown fox jumps over the lazy dog"
//     var letter = string.replace(/[aeiou]/g, '_');
//     document.write(letter)
// }
// vowel()


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':

//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());
  


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var cityOne = +prompt("Enter first city distance in km");
// var cityTwo = +prompt("Enter second city distance in km");
 
// function meter(){
//     var convertOne = cityOne * 1000;
//     var convertTwo = cityTwo * 1000; 
//     var convert = convertOne + convertTwo/2;
//     document.write(convert);
 
// }

// meter();

// function feet(){
//     var convertOne = cityOne * 3280.8398950131;
//     var convertTwo = cityTwo * 3280.8398950131;
//          var convert = convertOne + convertTwo/2;
//        document.write(convert);

// }
// feet();


// function inch(){
//     var convertOne = cityOne * 39370.0787 ;
//     var convertTwo = cityTwo * 39370.0787 ;
//          var convert = convertOne + convertTwo/2;
//        document.write(convert);

// }
// inch();


// function centimeter(){
//     var convertOne = cityOne /100000;
//     var convertTwo = cityTwo /100000;
//          var convert = convertOne + convertTwo;
//        document.write(convert);

// }
// centimeter();



// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// // for fractional part of an hour.
// var hour = +prompt("enter no. of hours");
// var oneHour = 12;
// var pay;
// function over(){
//     if(hour>40){
//         pay =(hour - 40)*oneHour
//     }
//     else{
//         document.write("no over time today")
//     }
//     return pay;
// }
// document.write(over());



// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer. 

// var input = +prompt("enter amount in hundred");
// function total(amount){
//     var hundred = (amount - (amount % 100))/100;
//     amount -= hundred *100;
//     var fifty = (amount - (amount % 50))/50;
//     amount -= fifty *50;
//     var tens = (amount - (amount % 10))/10;
//     return [hundred,fifty,tens]
    
// }
// alert(total(input))

// 1. Show an alert box on click on a link.
// function popup(){
//     alert("hello user")
// }
 
// describe in html 

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
// function popup(){
//         alert("some more pics")
//     }


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 
// After click on delete button on “Mark ” row
 
// function dlt(){
//     var element =document.getElementById("dlt");
//     element.style.display='none';
// }

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
//  describe in html 

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// let btnAdd =document.querySelector('#add');
// let btnsubtract =document.querySelector('#subtract');
// let input =document.querySelector('input');


// btnAdd.addEventListener('click', ()=> {
//     input.value = parseInt(input.value) + 1;
// });


// btnsubtract.addEventListener('click', () =>{
//     input.value = parseInt(input.value) - 1;
// });