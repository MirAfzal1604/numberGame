var msgFirst = document.getElementById("message_first");
var msgSecond = document.getElementById("message_second");
var msgThird = document.getElementById("message_third");

var answer = Math.floor(Math.random() * 100) + 1;
var no_guess = 0;
var guessed_num = [];

function play() {
    var user_guess = document.getElementById("guess").value;

    if(user_guess < 1 || user_guess > 100) {
        alert("e tupoy 1 bilan 100 ni orasidi soni yoz");
    } else {
        guessed_num.push(user_guess);
        no_guess+= 1;
    
        if(user_guess <  answer) {
            msgFirst.textContent = "YOUR GUESS IS TO LOW";
            msgSecond.textContent = "GUESSED NUMBER ARE : " + no_guess;
            msgThird.textContent = "GUESSED NUMBERS : " + guessed_num;
        } 
        else if (user_guess > answer){
            msgFirst.textContent = "YOUR GUESS IS TO HIGH";
            msgSecond.textContent = "GUESSED NUMBER ARE : " + no_guess;
            msgThird.textContent = "GUESSED NUMBERS : " + guessed_num;
        } 
        else if(user_guess == answer){
            msgFirst.textContent = "YEAH U WON IT!!!!";
            msgSecond.textContent = "THE NUMBER WAS : " + answer;
            msgThird.textContent = "U GUESSED IT IN  : " + no_guess + " GUESSES";
        }
    }
}