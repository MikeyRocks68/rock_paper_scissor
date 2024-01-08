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
        console.log(`error choice invalid: 
            ${computerSelection} or ${playerSelection}`);
    }

    //determin winner
    if (computerSelection == playerSelection){
        console.log(`Tie. No one wins. Idiot. 
            computer:${computerSelection}  player:${playerSelection}.`);
    }else if(beats(computerSelection) == playerSelection){
        console.log(`You loose! ${computerSelection} beats ${playerSelection}.`);
    }else if (beats(playerSelection == computerSelection)){
        //what to do if player beats computer
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);   
    }else{        
        console.log(`error determing winner
            player:${playerSelection} 
            computer:${computerSelection}`);
    }
    function beats(hand){
        if(hand='scissor') return 'paper';
        else if(hand = 'rock') return 'scissor';
        else if(hand='paper') return 'rock';
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