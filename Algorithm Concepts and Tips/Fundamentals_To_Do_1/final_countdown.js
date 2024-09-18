// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function final_countdown(param1, param2, param3, param4) {
  while (param2 <= param3) {
    if(param2%param1==0 && param2!=param4)  
    {
      console.log(param2)
    }
    param2++
  }  
}

// const prompt = require("prompt-sync")({ sigint: true });
// // need to use when prompt
// // npm install prompt-sync
// let param1 = prompt("Enter param1:");
// let param2 = prompt("Enter param2:");
// let param3 = prompt("Enter param3:");
// let param4 = prompt("Enter param4:");

final_countdown(3, 5, 17, 9)