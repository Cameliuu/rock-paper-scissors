function getComputerChoice()
{
    return  Math.floor(Math.random()*3+1);
}
function getPlayerChoice()
{
    let choice;
    do {
        choice = window.prompt("Pick something");
    }while(choice.toLowerCase()!= "rock" && choice.toLowerCase!= "paper" && choice.toLowerCase!= "scissors");
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
console.log(getPlayerChoice());