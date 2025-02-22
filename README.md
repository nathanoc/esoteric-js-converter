# non-alphanumeric-js-converter

This converts strings and Javascript code into valid JavaScript that uses only the characters `![]()+`

## TL;DR

Non-Alphanumeric Javascript works by exploiting JavaScript's strange casting rules to form strings and numbers, from which we can eventually access the `Function` constructor. By concatenating characters into strings representing code, and passing that code into the `Function` constructor, we are able to produce a function with any Javascript code as its body; this function can be executed by adding `()` at the end of the program. Using `\uXXXX` syntax we can access any Unicode character; it is therefore possible to rewrite absolutely any JavaScript program non-alphanumerically.

## Beginnings

Non-alphanumeric JavaScript is largely built on the following foundational principles:

- Applying the not operator to an empty array returns false as arrays are truthy. `!![]` therefore returns true.
- Adding an empty array to a value casts it to a string - for example, `!![]+[]` returns `"true"`.
- Putting a plus sign before a value casts it to an integer - for example, `+!![]` returns `1`.

With the help of grouping expressions with brackets, we can begin to form strings, combining basic characters using string indexing.

- `(!![]+[])[+![]]` accesses the 0th index of the string `"true"`, returning `"t"`.
- `(![]+[])[+!![]+!![]+!![]]` accesses the 3rd index of the string "false", returning "s".

(To be continued)
