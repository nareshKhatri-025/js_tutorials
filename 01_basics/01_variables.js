const accountId=1455;
let accountEmail ="naresh@gmail.com"
var accountPassword="12345"

accountCity="Jaipur";

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

// accountId="naresh";
// TypeError: Assignment to constant variable.

/*There is two ways to declare variable in js.

-> using var and using let keyword
-> Differnce btw them var only used and available with in a scope and else let can be used globally

->Prefer not use var 
because of issue in block scope and functional scop

================================Out put ============
nareshkhatri025@Nareshs-MacBook-Air js_hindi % node 01_basics/01_variables.js
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 1455               │
│ 1       │ 'naresh@gmail.com' │
│ 2       │ '12345'            │
│ 3       │ 'Jaipur'           │
│ 4       │ undefined          │

*/