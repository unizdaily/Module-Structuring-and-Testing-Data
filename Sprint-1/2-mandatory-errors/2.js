// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// console.log(`I was born in ${cityOfBirth}`);
// const cityOfBirth = "Bolton";

/* The code returns error because the line 4: console.log tried to use "cityOfBirth"
   that is in line 5. Javascript reads a file from top to bottom, line by line.
   To fix this code, You need to move the declaration const cityOfBirth on top
   console.log, so the cityOfBirth is created and given a value before it is used  */


const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// When you run the code, it will return "I was born in Bolton"