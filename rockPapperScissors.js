let playerScore = '0';
let computerScore ='0';

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    switch(btn.textContent){
        case 'reset':
            btn.addEventListener('click', () => {
                updateScoreBoard(0, 0);
                const terminal = document.querySelector('#terminal');
                terminal.textContent='>';
             });
            break;
        default:
            btn.addEventListener('click', () => {
                game(btn.textContent);
            });   
            break;
    }
    
});


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
        return 'tie';
    }else if(playerSelection == beats(computerSelection)){
        return 'computer';
    }else if (computerSelection == beats(playerSelection) ){
        return 'player';
    }else{
        return '';
    };

    function beats(hand){
        if(hand =='scissor') return 'paper';
        else if(hand == 'rock') return 'scissor';
        else if(hand == 'paper') return 'rock';
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

function game(playerSel){
    let winner='';
    let computerSel = getComputerChoice();
    switch( playRound(computerSel, playerSel) )
    {
        case 'player':
            playerScore++;
            updateTerminal('You win!', playerSel, computerSel);
            updateScoreBoard(playerScore, computerScore);
            break;
        case 'computer':
            computerScore++;
            updateTerminal('You loose!', playerSel, computerSel);
            updateScoreBoard(playerScore, computerScore);
            break;
        case 'tie':
            updateTerminal('Tie. No one wins...Idiot');
            break;
        case '':
           updateTerminal('error determining winner');
           break;
    };    
}

function updateTerminal(text, playerSel, computerSel){
    const terminal = document.querySelector('#terminal');
    terminal.innerHTML= `> ${text} <br>
    > player: ${playerSel}    computer: ${computerSel}`
}

function updateScoreBoard(pScore,cScore){
    const SBComputer = document.querySelector('#computer');
    const SBPlayer = document.querySelector('#player');
    SBPlayer.textContent = pScore;
    SBComputer.textContent = cScore;
}
