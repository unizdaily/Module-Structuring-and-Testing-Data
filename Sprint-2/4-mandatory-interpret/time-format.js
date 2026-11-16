function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

console.log(formatTimeDisplay(61));
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
/* =============> 'pad' will be called 3 times when 'formatTimeDisplay' is called, 
once for each of the total hours, remaining minutes, and remaining seconds. */

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> the value assign to num = 0 (this is pad(totalHours) and totalHours = 0 for an input of 61)

// c) What is the return value of pad is called for the first time?
/* =============> the return value of pad is called for the first time = "00" because the 0 is converted to a string and then 
  padded with a leading zero to make it two characters long. */

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
/* =============> the value assigned to num when pad is called for the last time in this program = 1.
  Template literals evaluate their expressions left to right, so pad is called in this order: 
  pad(totalHours), pad(remainingMinutes), pad(remainingSeconds). The last call is pad(remainingSeconds), 
  and remainingSeconds = 61 % 60 = 1.  */

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
/* =============> the return value assigned to num when pad is called for the last time in this program = "01"
   because the 1 is converted to a string and then padded with a leading zero to make it two characters long. */
