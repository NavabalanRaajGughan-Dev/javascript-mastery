/* 
1. Declare & assign

Declare a variable named city using let, then assign it the string value of your current city (e.g., "Colombo").

Then alert the value of city.
*/

// let city = "Colombo";
// alert(city);

// ===========================================================================================================================

/* 
2. Copy value between variables

Declare let user and let greeting.

Assign "NavabalanRaajGughan-Dev" to user.

Then copy the value of user into greeting.

alert greeting.
*/

// let user, greeting;
// user = "NavabalanRaajGughan-Dev";
// greeting = user;
// alert(greeting);

/* 

// =========================================================================================================================== 

3. Constant usage

Declare a constant const PI = 3.14159.

Then attempt to reassign PI = 3.15 and observe what happens.

Then declare const birthYear = 1990 (or your actual birth year) and do not reassign it.
*/

// const PI = 3.14159;
// // PI = 3.15; // Uncaught TypeError: Assignment to constant variable.
// const birthYear = 1990;
// console.log(birthYear);

/* 

// =========================================================================================================================== 

4. Variable naming conventions

Create three variables for the following:

The number of items in a shopping cart.

Whether the user is logged in (true/false).

The user’s full name.

Use camelCase naming (e.g., shoppingCartCount, isLoggedIn, userFullName). Assign appropriate values to each and console.log them.
*/

// let shoppingCartCount, isLoggedIn, userFullName;
// shoppingCartCount = 12;
// isLoggedIn = true;
// userFullName = "Navabalan RaajGughan";

// console.log(shoppingCartCount, isLoggedIn, userFullName);

/* 

// =========================================================================================================================== 

5. Invalid variable names

Try to declare variables with the following names and see which give syntax errors:

let 1stPlace = "Gold";

let user-name = "Alice";

let _score = 100;

let $total = 50;
*/

// let 1stPlace = "Gold"; // Uncaught SyntaxError: Invalid or unexpected token
// let user-name = "Alice"; // Uncaught SyntaxError: Unexpected token '-'
// let _score = 100;
// let $total = 50;
// console.log(_score, $total);

/* 

// =========================================================================================================================== 

6. Change a variable’s value

Declare let temperature = 20;

Then change temperature to 25.

Then log: “The current temperature is ___°C” using the updated value.
*/

// let temperature = 20;
// temperature = 25;
// console.log("The current temperature is " + temperature + "C");

/* 

// =========================================================================================================================== 

7. Meaningful vs meaningless names

Declare two variables: let x = 10; let y = 20;.

Then rewrite the same code but with better names (e.g., let width = 10; let height = 20;).

Then create a third variable let area = width * height; and log it.
*/
// let x, y;
// x = 10;
// y = 20;

// let height, width, area;
// height = 20;
// width = 10;
// area = width * height;

// console.log(area);

/* 

// =========================================================================================================================== 

8. Upper-case constant for “hard-coded” value

Declare const MAX_USERS = 1000;

Then declare const sessionTimeout = 30; // minutes.

Explain (in comments) why one is uppercase and the other is not.
*/

// const MAX_USERS = 1000;
// const sessionTimeout = 30;

// Comment:
// MAX_USERS is uppercase because it's a fixed “limit” constant.
// sessionTimeout is lowercase because it's more like a configuration value,
// not a “global” constant in the same sense.

/* 

// =========================================================================================================================== 

9. Reserved words and case‐sensitivity

Try to declare let function = "test"; and let Function = "test2";.

Observe what happens and log the value of Function if allowed.
*/

// let function = "test"; // Uncaught SyntaxError: Unexpected token 'function'
// let Function = "Test2";
// console.log(Function);

// ===========================================================================================================================

/* 
10. Mixing data types in variables

Declare let result;

Assign result = "5" + 2; → log result and note the type.

Then assign result = +"5" + 2; (using the unary plus to convert) → log result and the type.

Explain in comments what the difference is.
*/

// let result;

// result = "5" + 2;
// console.log(result); // 52

// result = +"5" + 2;
// console.log(result); // 7

// Comments:
// In the first case "5"+2 results in string concatenation.
// In the second case +'5' turns the string "5" into the number 5,
// then 5+2 produces the number 7.
