const _12HourClockTime = "20:53";
const _24hourClockTime = "08:53";

console.log(_12HourClockTime);
console.log(_24hourClockTime);

/* When I tried to run the code it returns SyntaxError: Invalid or unexpected token
   pointing right at 12 in 12HourClockTime. In JS, variable have a rule that it 
   cannot start with a number. It can contain a number only if it is after a
   first character such as letters, _ or $). There are some ways to fix this code by either
   renaming the variables so they start with a letter instead or simply by adding
   _ or $ in front of the variable 12HourClockTime and 24HourClockTime. */