// trying to create an age variable and then reassign the value by 1: 

// const age = 33;
// age = age + 1;

/* This code will throw an error because age is declared as a constant variable
   which means when you give it a value, it can never be reassigned. 
   Line 4 tries to change it, which breaks that rule. If you want to the code to work
   you need to declare the age with let instead if const. Here is how i fixed the code: */


   let age = 33;
   age = age + 1;

   console.log(age);

   // by running the code the age = age + 1 will return 34.