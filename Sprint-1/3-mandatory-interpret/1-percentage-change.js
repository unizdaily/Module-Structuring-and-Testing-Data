let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* There are 2 functions, line 4 and line 5 has the same function replaceAll(",", "")
   And console.log() is also a function call in line 10.
   So there are 3 function calls in total. */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* After running the code, it returns SyntaxError: missing ) after argument list pointing
   at line 5. .replaceAll(",", "") is missing a comma between the two arguments.
   To fix, I added a comma between the two arguments like this: .replaceAll(",", "") */

// c) Identify all the lines that are variable reassignment statements
/* As I check the meaning if variable reassignment, it means a variable that already has a value 
   is being assigned a new value. Upon checking the code, lines 4 and 5 are variable reassignment statements. 
   In line 4: carPrice is being reassigned to the value of Number(carPrice.replaceAll(",", "")).
   In line 5: priceAfterOneYear is being reassigned to the value of Number(priceAfterOneYear.replaceAll(",", "")) */

// d) Identify all the lines that are variable declarations
/* Variable declaration means creating a new variable for the first time, I found out that lines 1, 2, and 3 
   are variable declarations.
   In line 1: carPrice is declared and assigned the value of "10,000".
   In line 2: priceAfterOneYear is declared and assigned the value of "8,543".
   In line 3: priceDifference is declared and assigned the value of carPrice - priceAfterOneYear.
   In line 4: percentageChange is declared and assigned the value of (priceDifference / carPrice) * 100. */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* So the expression in line 4, carPrice.replaceAll(",","") searches the string "10,000" for every comma and replaces
   with an empty string, returning 10000 and Number() converts that string "10000" into an actual numeric value 10000. */
