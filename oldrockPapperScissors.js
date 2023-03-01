function getComputerChoice() {    
    switch (oneTwoOrThree()) {
        case 1: return 'rock'; 
        case 2: return 'paper';
        case 3: return 'scissors';
        //default: console.log(`Error computerChoice`);
    }
}
function oneTwoOrThree(){
    return Math.floor(Math.random()*3+1);
}

function playRound(computerSelection, playerSelection) {    
    //cleanup and check input
    computerSelection = cleanUpInput(computerSelection);
    playerSelection = cleanUpInput(playerSelection); 
    if (!isValid(computerSelection) || !isValid(playerSelection)){
        console.log(`error choice invalid: ${computerSelection}
            or ${playerSelection}`);
    }

    //determine winner    
    switch (computerSelection+playerSelection){
        case ('rock'+'paper'):  winMsg('computer','rock','paper');break;
        case ('rock'+'scissor'): winMsg('computer','rock','paper');break;
        case ('rock'+'rock'): winMsg('tie','rock','rock');break;
        case ('paper'+'rock'): winMsg('computer','paper','rock');break;
        case ('paper'+'scissor'): winMsg('player','rock','paper');break;
        case ('paper'+'paper'): winMsg('tie','paper','paper');break;
        case ('scissor'+'rock'): winMsg('player','scissor','rock');break;
        case ('scissor'+'paper'): winMsg('computer','scissor','paper');break;
        case ('scissor'+'scissor'): winMsg('tie','scissor','scissor');break;
        default: console.log(`error:${computerSelection} ${playerSelection}`);break;
    }
}

function winMsg(player, winChoice, looseChoice){
    if(player=='tie'){
        console.log(`No one wins! ${winChoice} ties ${looseChoice}.`);
    }else{
        console.log(`Congrats ${player} wins! ${winChoice} beats ${looseChoice}.`);
    }
}
function cleanUpInput(str){
    str = str.trim(); 
    str = str.toLowerCase();
    return str;
}

function isValid(choice){
    const choices = ['rock','paper','scissor'];
    return choices.includes(choice);
}

function game(){
    for(let i=0;i<5;i++){
        playRound()
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));