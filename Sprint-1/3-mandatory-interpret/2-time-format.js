const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*  In this code there have total of 6 variable:
    In Line 1 movieLength
    In Line 3 remainingSeconds
    In Line 4 totalMinutes
    In Line 6 remainingMinutes
    In Line 7 totalHours
    In Line 9 result */

// b) How many function calls are there?
/* There are only 1 function call which is console.log(result) in line 10. */

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/* The expression movieLength % 60 has a remainder(%) operator that returns what is left over
   after you've divided as many whole times as possible. In the code, this expression just simply
   returns the remaining seconds after converting the movie length from seconds to minutes. */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* totalMinutes is the total number of the whole minutes in the movie with the seconds that
   form a whole minute already removed. */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* result represents the final string showing the movie length as hh:min:sec. If I will rename the 
   result maybe I will rename the variable formattedMovieLength so it is not be so generic */

   const formattedMovieLength = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
   console.log(formattedMovieLength);

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* I tried changing the movieLength to different values. And realize below:
   When I used movieLength = -10 , the output was 0:0:-10 which is not a valid time format.
   It produces a negative/nonsensical output.
   When I used movieLength = 4800.9, the output was 1:20:0.8999999999996362, it produces a decimal value
   in the seconds which is again not a valid time format.
   Therefore, this code will not work for all values of movieLength.
   It only works for positive integer values. */