# non-alphanumeric-js-converter

This converts strings and Javascript code into valid Javascript that uses only the characters `![]()+`

## TL;DR

Non-Alphanumeric Javascript works by exploiting certain egregious features of the language, to form strings and numbers that eventually allow us to access the `Function` constructor. By slowly concatenating strings into code, and passing that code as a string into the constructor, we are able to produce a function with any Javascript code; this function can be run simply by adding `()` at the end of the program. Using `\uXXXX` syntax we can access any Unicode character; it is therefore possible to rewrite absolutely any Javascript program in Non-Alphanumeric Javascript.

## Beginnings

Non-Alphanumeric Javascript is largely built on the following foundational principles:

- Applying the not operator to an empty array returns false as arrays are truthy. `!![]` therefore returns true.
- Adding an empty array to a value casts it to a string - for example, `!![]+[]` returns `"true"`.
- Putting a plus sign before a value casts it to an integer - for example, `+!![]` returns `1`.

With the help of grouping expressions with brackets, we can begin to form strings, combining basic characters using string indexing.

- `(!![]+[])[+![]]` accesses the 0th index of the string `"true"`, returning `"t"`.
- `(![]+[])[+!![]+!![]+!![]]` accesses the 3rd index of the string "false", returning "s".
