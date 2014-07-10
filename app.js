var prompt  = require('sync-prompt').prompt;
var chalk = require('chalk');

var balance = 1000.00;
var amount;
var deposits = [0];
var withdrawals = [0];
var totalDeposits = 0;
var totalWithdrawals = 0;
var overdraftFee = 0;

var action = prompt('(d)eposit, (w)ithdraw, (q)uit: ');
while(action !== 'q'){
  amount = parseFloat(prompt('How Much? $'));

  if(action === 'd'){
    deposits.push(amount);
  }else{
    withdrawals.push(amount);
  }

  action = prompt('(d)eposit, (w)ithdraw, (q)uit: ');
}

for(var i = 0; i < deposits.length; i++){
  totalDeposits += deposits[i];
}

for(var k = 0; k < withdrawals.length; k++){
  totalWithdrawals += withdrawals[k];
}

balance += totalDeposits - totalWithdrawals;

if(balance < 0){
  balance -= 50;
  overdraftFee -= 50;
}

console.log('\nStarting balance: $' + chalk.green.bold('1000.00') + '\nTotal deposits: $' + chalk.green.bold(totalDeposits.toFixed(2)) + '\nTotal withdrawals: $' + chalk.red.bold(totalWithdrawals.toFixed(2)) + '\nOverdraft fee: $' + chalk.red.bold(overdraftFee.toFixed(2)) + '\nFinal balance: $' + chalk.blue.bold(balance.toFixed(2)) + '\n');


