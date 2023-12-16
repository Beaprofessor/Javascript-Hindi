const accountId = 12324
let accountEmail = "lokesh@google.com"
var accountPass = "234235443362"
accountCity = "Jaipur"
// We can also define without any keyword but it is the  bad way to Define , So NEVER use this.....

let accountState;
// If we dont give any value to the declared variable then the output will be **undefined** , cuz any value is not defined there...

// accountId = 22232 // Not Allowed...

accountEmail  = "hac@google.com"
accountPass  = "23420"
accountCity = "Banglore"


/*Prefer not to use var keyword -
because of issue in the block scope and  functional scope 
*/

console.log(accountId);

console.table([accountId,accountEmail , accountPass , accountCity , accountState])