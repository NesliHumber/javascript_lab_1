
//Create a variable named studentName and assign it a string value:
var studentName = "Neslihan";
//Create a variable named studentAge and assign it a numeric value:
var studentAge = 40;
//Create a variable named isEnrolled and assign it a boolean value:
var isEnrolled = true;

//Log these variables to the console:
console.log("Student name: " + studentName); 
console.log("Student age: " + studentAge); 
console.log("Is student enrolled: " + isEnrolled); 

console.log("----------------------------------------------------------------")

// String: A text value.
let firstName = "Neslihan";
let lastName = "Ustaoglu";
let fullName = "Neslihan Ustaoglu";

console.log("----------------------------------------------------------------")

// Number:
let gradePointAverage = 4.8;
console.log("typeof gradePointAverage: " + typeof gradePointAverage);
console.log("gradePointAverage: " + gradePointAverage);
console.log("Number.MAX_SAFE_INTEGER -> " + Number.MAX_SAFE_INTEGER);
let studentNumber = BigInt(9007199254740991);
console.log("typeof studentNumber: " + typeof studentNumber);
console.log("studentNumber: " + studentNumber);

console.log("----------------------------------------------------------------")

// Boolean:
var Isgraduated = false;
console.log("Isgraduated: " + Isgraduated);

console.log("----------------------------------------------------------------")

// Array: 
let favoriteLanguages = ['Java', 'Python', 'SQL', 'JavaScript', 'Typescript'];
console.log("favoriteLanguages: " + favoriteLanguages);
favoriteLanguages.push('C#');
console.log("favoriteLanguages: " + favoriteLanguages);
favoriteLanguages.pop();
console.log("favoriteLanguages: " + favoriteLanguages);

console.log("----------------------------------------------------------------")

// Object:
const employee = new Object();
employee .age = 40;
employee .name = "Neslihan";
employee .lastName = "Ustaoglu";
employee .department = "IT";

console.log("employee information: ", employee);

/*
Perform and log operations using different types of operators:
.
Comparison Operators: Greater than (>), Less than (<), Equal to (===), and Not equal (!==).
Logical Operators: AND (&&), OR (||), and NOT (!).
*/
console.log("----------------------------------------------------------------")

//Arithmetic Operators: Addition (+), Subtraction (-), Multiplication (*), and Division (/)
var a = 23;
var b = 10;
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("Remainder: " + (a % b));

console.log("----------------------------------------------------------------")

//Comparison Operators: Greater than (>), Less than (<), Equal to (===), and Not equal (!==).
console.log("a > b: " + (a > b));
console.log("a < b: " + (a < b));
console.log("a === b: " + (a === b));
console.log("a !== b: " + (a !== b));
console.log(a == 23);
console.log(a == "23");
console.log(a === "23"); // strictly equal -> output: false

console.log("----------------------------------------------------------------")

//Logical Operators: AND (&&), OR (||), and NOT (!).
console.log(a == 23 && b == 10);
console.log(a == 23 || a === "23");
console.log(!(a === "23"));

console.log("----------------------------------------------------------------")

// Declaring a variable to assign the div element from HTML document that will pull the information from scripts.js file:
const studentInfoDiv = document.getElementById('studentInfo');

// HTML content:
let htmlContent = `
    <p>Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Student Number: ${studentNumber}</p>
    <p>Age: ${studentAge}</p>
    <p>Enrolled: ${isEnrolled}</p>
    <p>GPA: ${gradePointAverage}</p>
    <p>Department: ${employee.department}</p>
    <p>Favorite Languages: ${favoriteLanguages.join(', ')}</p>
`;

// HTML content of the div:
studentInfoDiv.innerHTML = htmlContent;
