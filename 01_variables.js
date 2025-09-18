const AccountID = 123;
let AccountEmail = "keyupatel007@gmail.com";
var AccountPassword = "12345";
AccountCity = "Surat";
let AccountState;
// AccountID = 4; Not Allowed Const value change
/*
Prefer not to use Var 
Because of issue in block scope and functional scope.
*/
AccountEmail = "keju007@gmail.com";
AccountPassword = "345";
AccountCity = "Ahemdabad";
console.log(AccountID);
console.table([AccountID, AccountEmail, AccountPassword, AccountCity,AccountState]);