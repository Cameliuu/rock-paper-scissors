function getComputerChoice()
{
    return  Math.floor(Math.random()*3+1);
}
function getPlayerChoice()
{
    let choice;
    do {
        choice = window.prompt("Pick something");
    }while(choice.toLowerCase()!= "rock" && choice.toLowerCase()!= "paper" && choice.toLowerCase()!= "scissors");
    switch (choice.toLowerCase())
    {
        case "rock":
            return 1;
            break;
        case "paper":
            return 2;
            break;
        case "scissors":
            return 3;
            break;
    }
}
function playRound(computerChoice, playerChoice,playerScore)
{
    console.log("Computer chooses "+ getNameFromNumber(computerChoice))
    if(computerChoice < playerChoice)
    {
        if(playerChoice - computerChoice == 2) {
            playerScore--;
            console.log("YOU LOSE!" + getNameFromNumber(computerChoice) + " Beats " + getNameFromNumber(playerChoice))
        }
        else {
            playerScore++;
            console.log("YOU WIN!" + getNameFromNumber(playerChoice) + " Beats " + getNameFromNumber(computerChoice))
        }
    }
    else if (playerChoice < computerChoice)
    {
        if(computerChoice - playerChoice == 2) {
            playerScore++;
            console.log("YOU WIN!" + getNameFromNumber(playerChoice) + " Beats " + getNameFromNumber(computerChoice))
        }
        else {
            playerScore--;
            console.log("YOU LOSE!" + getNameFromNumber(computerChoice) + " Beats " + getNameFromNumber(playerChoice))
        }
    }
    else
        console.log("EQUALITY!");
    return playerScore;
}
function getNameFromNumber(number)
{
    switch (number)
    {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}
function game()
{

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    playerScore=playRound(computerChoice,playerChoice,playerScore);
}
function winner(playerScore)
{
    if(playerScore == 0)
        return "IT IS EQUALITY";
    return (playerScore > 0) ? "YOU ARE THE WINNER!CONGRATULATIONS!" : "YOU LOSE!COMPUTER IS THE WINNER";
}


let playerScore = 0;
for(let i=0;i<=4;i++)
{
    game();
    console.log(playerScore);

}
console.log(winner(playerScore));


