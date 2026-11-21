// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* When I run the code it is returning a "TypeError: cardNumber.slice is not a function"
   which means that the cardNumber is declared as a plain number and .slice() function
   only exists on strings and arrays thus plain number don't have that method. To fix
   the code, you need to turn the cardNumber to a string first then .slice() will work.
   I added .toString() after the cardNumber so it will converts to string and .slice(-4)
   to grab the last 4 characters of cardNumber which is 4213 */

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits);