console.log('starting password manager');
var storage = require('node-persist');
storage.initSync();
//storage.setItemSync('account',[{
//username: 'Madhukesh',
//balance: 0
//}]);
 var accounts = storage.getItemsync('accounts');
 // push on a new account
 account.push({
 	username: 'ram',
 	balance: 75
 });
 // save using setItemSync
 console.log(accounts);