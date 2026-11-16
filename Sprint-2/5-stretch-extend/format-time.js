// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hoursString, minutes] = time.split(":");
  const hours = Number(hoursString);
  const period = hours >= 12 ? "pm" : "am";

  let displayHours = hours % 12;
  if (displayHours === 0) {
    displayHours = 12;
  }

  return `${displayHours.toString().padStart(2, "0")}:${minutes} ${period}`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

// Edge case: midnight (00:00) should be 12:00 am, not 00:00 am
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// Edge case: noon (12:00) should be 12:00 pm, not 12:00 am
const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// Edge case: minutes other than 00 should be preserved
const currentOutput5 = formatAs12HourClock("14:30");
const targetOutput5 = "02:30 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

/* Bugs found and fixed:
1. Midnight ("00:00") was returned as "00:00 am" instead of "12:00 am" -
    the original code never converted hour 0 to 12 for display.
2. Noon ("12:00") was returned as "12:00 am" instead of "12:00 pm" -
    the original condition `hours > 12` was false for exactly 12, so it fell
    through to the "am" branch instead of being treated as the start of pm.
3. Minutes were lost for any pm time - the original code hardcoded ":00"
    n the pm branch instead of using the actual minutes from the input,
    e.g. formatAs12HourClock("14:30") incorrectly returned "2:00 pm".
4. Hour display was inconsistent (sometimes 1 digit, sometimes 2) -
    padStart(2, "0") now keeps the hour format consistent for all cases. */
