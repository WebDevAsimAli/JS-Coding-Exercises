const accountId =1434
let accountEmail = "Asim@google.com"
var accountPassword = "5976"
accountcity = "Gujrat"
let accountState;
// accountId = 2 // not allowed because variable tpe is const selected, which is not updated and not declared

accountEmail = "Asi@hc.com"
accountPassword = "3453"
accountcity = "Lahore"

console.log(accountId);
/*
prefer not to use var 
because of the issue of bloc scope andd functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])