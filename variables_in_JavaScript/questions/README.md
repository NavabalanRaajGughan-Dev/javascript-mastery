# Exercises: Variables in JavaScript

Here are 10 practical exercises you can work through to strengthen your understanding of variables in JavaScript.

---

## 1. Declare & assign

- Declare a variable named `city` using `let`, then assign it the string value of your current city (e.g., `"Colombo"`).
- Then `alert` the value of `city`.

## 2. Copy value between variables

- Declare `let user` and `let greeting`.
- Assign `"NavabalanRaajGughan-Dev"` to `user`.
- Then copy the value of `user` into `greeting`.
- `alert` `greeting`.

## 3. Constant usage

- Declare a constant `const PI = 3.14159`.
- Then attempt to reassign `PI = 3.15` and observe what happens.
- Then declare `const birthYear = 1990` (or your actual birth year) and **do not** reassign it.

## 4. Variable naming conventions

- Create three variables for the following:
  1. The number of items in a shopping cart.
  2. Whether the user is logged in (true/false).
  3. The user’s full name.
- Use camelCase naming (e.g., `shoppingCartCount`, `isLoggedIn`, `userFullName`).
- Assign appropriate values to each and `console.log` them.

## 5. Invalid variable names

- Try to declare variables with the following names and see which give syntax errors:
  - `let 1stPlace = "Gold";`
  - `let user-name = "Alice";`
  - `let _score = 100;`
  - `let $total = 50;`
- For those that are invalid, correct them to valid names and declare again.

## 6. Change a variable’s value

- Declare `let temperature = 20;`
- Then change `temperature` to `25`.
- Then `console.log` a message: “The current temperature is \_\_\_°C” using the updated value.

## 7. Meaningful vs meaningless names

- Declare two variables: `let x = 10; let y = 20;`.
- Then rewrite the same code but with better names (e.g., `let width = 10; let height = 20;`).
- Then create a third variable `let area = width * height;` and log it.

## 8. Upper-case constant for “hard-coded” value

- Declare `const MAX_USERS = 1000;`
- Then declare `const sessionTimeout = 30; // minutes`
- In comments, explain why one is uppercase and the other is not.

## 9. Reserved words and case‐sensitivity

- Try to declare `let function = "test";` and `let Function = "test2";`.
- Observe what happens and, if allowed, log the value of `Function`.

## 10. Mixing data types in variables

- Declare `let result;`
- Assign `result = "5" + 2;` → log `result` and note the type.
- Then assign `result = +"5" + 2;` (using the unary plus to convert) → log `result` and the type.
- In comments explain what the difference is.

---
