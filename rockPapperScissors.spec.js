const rps = require('./rockPapperScissors.js');

test('rock paper or scissor', () => {
    expect(
        ['rock','paper','scissor']
        .includes(getComputerChoice())
        .toBe(true))
    });


let combos = 
    [   ['rock','scissor'],
        ['paper','rock'],
        ['scissor','paper'] ];
//test computer wins
for(let i=0; i<3; i++){
    comp = combos[i][0];
    player = combos[i][1];
    test(`${comp} beats ${player}`, () => {
        expect(playRound(comp ,player)).toBe('computer')
    });
}

//test ties 
for(let i=0; i<3; i++){
    comp = combos[i][0];
    player = combos[i][0];
    test(`${comp} beats ${player}`, () => {
        expect(playRound(comp ,player)).toBe('tie')
    });
}

//test player wins
for(let i=0; i<3; i++){
    player = combos[i][0];
    computer = combos[i][1];
    test(`${comp} beats ${player}`, () => {
        expect(playRound(comp ,player)).toBe('player')
    });
}

//test bad input
let bad_input = 
    [   ['asdf','scissor'],
        ['paper','asdf'],
        ['asdf','dfgh'] ];
for(let i=0; i<3; i++){
    test('bad inputs', () => {
        expect(playeRound(bad_input[i][0],bad_input[i][1]));
    })
}






test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  