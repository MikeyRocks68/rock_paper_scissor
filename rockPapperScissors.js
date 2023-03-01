function getComputerChoice() {    
    switch (oneTwoOrThree()) {
        case 1: return 'rock'; 
        case 2: return 'paper';
        case 3: return 'scissor';
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
    let winner;
    switch (computerSelection+playerSelection){
        case ('rock'+'scissor'): winner = 'computer';break;
        case ('paper'+'rock'): winner ='computer';break;
        case ('scissor'+'paper'): winner = 'computer';break;

        case ('scissor'+'rock'): winner = 'player';break;
        case ('rock'+'paper'): winner = 'player';break;  
        case ('paper'+'scissor'): winner ='player';break;

        case ('rock'+'rock'): winner = 'tie';break;
        case ('paper'+'paper'): winner = 'tie';break;
        case ('scissor'+'scissor'): winner = 'tie';break;
        
        default: console.log(`error:${computerSelection} ${playerSelection}`);break;
    }

    //congratulate the looser for winning
    if (winner == 'player'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);   
    }else if (winner == 'computer'){
        console.log(`You loose! ${computerSelection} beats ${playerSelection}.`);   
    }else if(winner == 'tie'){
        console.log(`Tie. No one wins. Idiot. 
            ${computerSelection} beats ${playerSelection}.`);
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
        playRound(getComputerChoice(), prompt('rock paper scissor'));
    }
}