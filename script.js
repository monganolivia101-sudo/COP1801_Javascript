// Ask for first name
let Fname = prompt("Enter your first name:");

// Display welcome message
alert("Welcome, " + Fname + "!");

// Create constant storing pi to 7 significant digits
const piValue = 3.1415926;

// Ask user for their favorite number
let myFavNum = prompt("Enter your favorite number:");

// Convert the number input from string to number
myFavNum = Number(myFavNum);

// Calculate area of a circle (A = πr^2)
let myArea = piValue * (myFavNum ** 2);

// Display results to webpage
document.getElementById("output").innerHTML =
    "Hello " + Fname + ", you entered " + myFavNum +
    " as your favorite number.<br>" +
    "If that number was the radius of a circle, the area would be " +
    myArea.toFixed(6) + ".<br><br>" +
    "Here are all your variables: <br>" +
    "Fname = " + Fname + "<br>" +
    "piValue = " + piValue + "<br>" +
    "myFavNum = " + myFavNum + "<br>" +
    "myArea = " + myArea.toFixed(6);