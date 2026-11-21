## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
This is the output I get : ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
This is the output I get : console {debug: ƒ, error: ƒ, info: ƒ,... }

Try also entering `typeof console`
It returns: 'object'

Answer the following questions:

What does `console` store?
Console stores multiple related functions together, grouped under one name like get, log, warn, error... Each of these is a function designed to print/debug information in a slightly different way.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean? 
So . means look inside the console object and give me the value stored there under the name log. Since console.log is a function you can call it with () or console.log() to actually run it. It has same pattern with other call functions like Math.floor() or filePath.slice, the object comes first then ., then the name of function stored inside it. 
