Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
When I tried it, a browser popup/dialog box appears on screen, displaying "Hello world!" with an "OK" button. Also the rest of the page's javascript execution was pause until I click OK.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
When I tried, a similar popup appears but this one has a text input box and Cancel and OK buttons,
letting me to type in something.

What is the return value of `prompt`?
When I tried to type my name : Uniz and clicks OK, the prompt returns that type text as a string.
I try to return the value of myName and it shows "Uniz". Then when I click the Cancel button, the prompt returns null.
