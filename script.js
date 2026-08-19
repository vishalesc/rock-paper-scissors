
let getComputerChoice = function () {
  let computer_choice = Math.random();
  if (computer_choice >= 0 && computer_choice <= .33) {
    return "rock";
  }
  else if
    (computer_choice >= 0.33 && computer_choice <= .66) {
    return "scissors";
  }
  else {
    return "paper"
  }

};


let getHumanChoice = function () {
  let human_choice = prompt("enter you choice");
  return human_choice;
};



function playGame() {
  let human_score = 0;
  let computer_score = 0;

  function playRound(human_choice, computer_choice) {
    human_choice = human_choice.toLowerCase();
    computer_choice = computer_choice.toLowerCase();
    if (human_choice == "scissors") {
      if (computer_choice == "paper") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("human wins");
        human_score += 1;
      }
      else if (computer_choice == "rock") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("computer wins");
        computer_score += 1;
      }

      else if (computer_choice == "scissors") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("its a draw");
      }
    }

    if (human_choice == "paper") {
      if (computer_choice == "rock") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("human wins");
        human_score += 1;
      }
      else if (computer_choice == "scissors") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("computer wins");
        computer_score += 1;
      }

      else if (computer_choice == "paper") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("its a draw");
      }
    }

    if (human_choice == "rock") {
      if (computer_choice == "scissors") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("human wins");
        human_score += 1;
      }
      else if (computer_choice == "paper") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("computer wins");
        computer_score += 1;
      }

      else if (computer_choice == "rock") {
        console.log(`computer : ${computer_choice}`);
        console.log(`human : ${human_choice}`);
        console.log("its a draw");
      }
    }


  }
  for (let i = 0; i <= 4; i++) {
    const human_choice = getHumanChoice();
    const computer_choice = getComputerChoice();
    playRound(human_choice, computer_choice);
  }
  if (human_score > computer_score) {
    console.log("you won");
  }

  else if (computer_score > human_score) {
    console.log("computer won");
  }
  else {
    console.log("its a draw");
  }
}



playGame();