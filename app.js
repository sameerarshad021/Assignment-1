// 1. Write a script to greet your website visitor using JS alert
// box.
// 2. Write a script to display following message on your web
// page:

alert('Error! Please enter a valid password');

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)

alert('Welcome to JS Land...\nHappy Coding!');

// 4. Write a script to display following messages in sequence:

alert('Welcome to JS Land...');

alert('Happy Coding! \n Prevent this page creating additional dialogs');

// 5. Generate the following message through browser s
// developer console

alert('Hello...  I can run JS through my web browser console');

// Chapter 2

// 1. Declare a variable called username.

var Username = ""

// Declare a variable called myName & assign to it a string
// that represents your Full Name.
var myName = 'Sameer Arshad'
alert(myName)

// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;
var message = "Hello World"
alert(message)

// Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var studentName = "Sameer";
var studentAge = 20;
var studentCourse = "Modern Web & App Development";

alert(studentName);
alert(studentAge);
alert(studentCourse);

// 5. Write a script to display the following alert using one JS
// variable:

var food = 'Pizza\nPizz\nPiz\nPi\nP'
alert(food)

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = 'My email address is sameerarshad@gmail.com'
alert(email)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = 'A smarter way to learn JavaScript'
alert(book)

// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript <br>");

        // Chapter 3

// Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 20
alert(age)

var countVisitor = 'You have visited this site 14 times'
alert(countVisitor)


// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2000;

document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br>");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe"
var productTitle = "T-shirts"
var quantity = 5

document.write(visitorName + " " + quantity + " " + productTitle + " " + "XYZ Clothing store <br>");

// Chapter 4

// 1. Declare 3 variables in one statement.

var firstName
var lastName
var age

// document.write( firstName + " " + lastName + " " + age + "<br>")

// 2. Declare 5 legal & 5 illegal variable names.

// Legal variable names:

var myName;
var _fullName;
var $price;
var user1;
var total_amount;

// Illegal variable names

// var 1user;
// var full name;
// var @age;
// var var;
// var my-name;

// Display the rules in browser

document.write("<h1>Rules for naming JS variables</h1>");

document.write("Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b> and <b>_</b>.<br>");
document.write("For example: <b>$my_1stVariable</b><br><br>");

document.write("Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>.<br>");
document.write("For example: <b>$name</b>, <b>_name</b> or <b>name</b><br><br>");

document.write("Variable names are case <b>sensitive</b>.<br><br>");

document.write("Variable names should not be JS <b>keywords</b>.");











