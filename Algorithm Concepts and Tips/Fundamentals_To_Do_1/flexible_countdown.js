// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function flexible_countdown(lowNum,highNum,mult) {
  for (var i = highNum; i >=lowNum ; i--){
    if (i % mult == 0) {
      console.log(i)
    }
  }

}
const prompt = require("prompt-sync")({ sigint: true });
// need to use when prompt
// npm install prompt-sync
let lowNum = prompt("Enter lowNum");
let highNum = prompt("Enter highNum");
let mult = prompt("Enter mult");

flexible_countdown(lowNum,highNum,mult)