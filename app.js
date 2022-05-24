let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score"); 
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const result_message = document.getElementById("result_message");
const reset_button = document.getElementById("reset");

function computerChoice(){
  const choices = ['rock','paper','scissor'];
  const randomNumber = Math.floor(Math.random()*choices.length);
  return choices[randomNumber];
}

function win(userChoice,compChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_message.innerHTML = userChoice + " beats " + compChoice + ". You Win!";
  document.getElementById(userChoice).classList.add('win');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('win')}, 500);
}

function lose(userChoice,compChoice){
  compScore++;
  compScore_span.innerHTML = compScore;
  result_message.innerHTML = userChoice + " loses to " + compChoice + ". You Lose!";
  document.getElementById(userChoice).classList.add('lose');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('lose')}, 500);
}

function draw(userChoice,compChoice){
  result_message.innerHTML = userChoice + " equals " + compChoice + ". It's a Draw!";
  document.getElementById(userChoice).classList.add('draw');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('draw')}, 500);
}

function reset(){
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_message.innerHTML = "TRY YOUR LUCK!"
}

function game(userChoice){
  const compChoice = computerChoice();
  console.log(compChoice)
  switch(userChoice + compChoice){
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice,compChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice,compChoice);
      break;
    case "rockrock":
    case "scissorscissor":
    case "paperpaper":
      draw(userChoice,compChoice);
  }
}

rock_div.addEventListener('click', function(){
  game('rock');
});

paper_div.addEventListener('click', function(){
  game('paper');
});

scissor_div.addEventListener('click', function(){
  game('scissor');
});

reset_button.addEventListener('click', function(){
  reset();
});

