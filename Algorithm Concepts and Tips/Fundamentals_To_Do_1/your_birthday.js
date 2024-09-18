// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

function your_birthday(day,month) {
    var num1 = 10; 
    var num2 = 5; 

    // Check if the given numbers match the birth month and day in either order
    if (day==num1 && month==num2  ) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}
const prompt = require("prompt-sync")({ sigint: true });
// need to use when prompt
// npm install prompt-sync
let day = prompt("Enter DayBirthday");
let month = prompt("Enter monthBirthday");

your_birthday(day, month); 


