var prompt  = require('sync-prompt').prompt;
var chalk = require('chalk');

var balance = 1000.00;
var amount;
var deposits = [0];
var withdraws = [0];

var action = prompt('Do you want to (d)eposit/(w)ithdraw/(q)uit? ');
while(action !== 'q'){
  amount = parseFloat(prompt('How Much? '));
  if(action === 'd'){
    deposits.push(amount);
  }else{
    withdraws.push(amount);
  }
  action = prompt('Do you want to (d)eposit/(w)ithdraw/(q)uit? ');
}

for(var i = 0; i < deposits.length; i++){
  balance += deposits[i];
}
for(var k = 0; k < withdraws.length; k++){
  balance -= withdraws[k];
}

if(balance < 0){
  balance -= 50;
}

console.log('Your final balance is:', balance.toFixed(2));


