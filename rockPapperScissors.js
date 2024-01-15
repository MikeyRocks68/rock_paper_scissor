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
    function oneTwoOrThree(){
        return Math.floor(Math.random()*3+1);
    }
    
}


function playRound(computerSelection, playerSelection) {    

    function beats(hand){
        if(hand =='scissor') return 'paper';
        else if(hand == 'rock') return 'scissor';
        else if(hand == 'paper') return 'rock';
    }

    //cleanup and check input
    computerSelection = cleanUpInput(computerSelection);
    playerSelection = cleanUpInput(playerSelection);     
    if (!isValid(computerSelection) || !isValid(playerSelection)){
        return text = 'Choice invalid!';
    }

    //determine and return winner
    if (computerSelection == playerSelection){
        return 'tie';
    }else if(playerSelection == beats(computerSelection)){
        return 'computer';
    }else if (computerSelection == beats(playerSelection) ){
        return 'player';
    }else{
        return '';
    };

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
    switch( text = playRound(computerSel, playerSel) )
    {
        case 'player':            
            playerScore++;
            text = 'Player wins!'
            break;
        case 'computer':
            computerScore++;
            text = 'You loose!'
            break;
        case 'tie':
            text = 'Tie. No one wins...Idiot'
            break;
        case '':
            text = `error: ${text}`;   
           break;
    };
    updateTerminal(text, playerSel, computerSel);
    updateScoreBoard(playerScore, computerScore);
                
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

// exports
module.exports = getComputerChoice;
module.exports = playRound; 
module.exports = cleanUpInput;
module.exports = isValid;
