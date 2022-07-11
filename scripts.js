// Player clicks slot (only player one can move first).
// --Game flow value = 1 (seeSwap player turns step) and 
// --gameFlow.p1Move(). P1 clicks (event) slot.
// --Start with X by returning gameMove(playerOne) on click event

// **Game Flow function recognizes player turns and changing when calling move()


// Specific player mark is targeted with specific slot clicked(***game move)
// --Player mark targeted and added to array.

// **Click event with function that targets div slot number, splices array value,
//  updates div text to array mark or player mark, and uses gameMove(playerOne/Two)
// --Target.event(click, () => {If turn % 2 === 1, splice gameMove(playerOne) into board array,
// --and div.innerText the slot})

// Swap player turns (game flow)
// --If last array mark was a, only b mark can go. (WIP)
// --Set game flow to a 1. After a player moves, add 1 to game flow value. If game
// --flow value = an even number, player 2 can move.
// --Click event => If odd, p1 places mark. Else, p2 places mark. Add value each time.

// Ensure a marked slot can't be chosen twice (conditional)
// --If array index is (!''), don't update it or mark slot on board.




// Gameboard
const gameBoard = (() => {
    const board = ['','','','','','','','',''];
    return {board};
})()

// When clicking a slot,
const select1 = document.querySelector('#slot1');
    select1.addEventListener('click', () => {
        if (gameBoard.board[0] !== '') {
            return
        } else {
        move.play(0);
        move.nextTurn();
        select1.innerText = gameBoard.board[0];
        }
        playerWin();
    })
    
const select2 = document.querySelector('#slot2');
    select2.addEventListener('click', () => {
        if (gameBoard.board[1] !== '') {
            return
        } else {
        move.play(1);
        move.nextTurn();
        select2.innerText = gameBoard.board[1];
        }
        playerWin();
    })

const select3 = document.querySelector('#slot3');
    select3.addEventListener('click', () => {
        if (gameBoard.board[2] !== '') {
            return
        } else {
        move.play(2);
        move.nextTurn();
        select3.innerText = gameBoard.board[2];
        }
        playerWin();
    })
    
const select4 = document.querySelector('#slot4');
    select4.addEventListener('click', () => {
        if (gameBoard.board[3] !== '') {
            return
        } else {
        move.play(3);
        move.nextTurn();
        select4.innerText = gameBoard.board[3];
        }
        playerWin();
    })
    
const select5 = document.querySelector('#slot5');
    select5.addEventListener('click', () => {
        if (gameBoard.board[4] !== '') {
            return
        } else {
        move.play(4);
        move.nextTurn();
        select5.innerText = gameBoard.board[4];
        }
        playerWin();
    })

const select6 = document.querySelector('#slot6');
    select6.addEventListener('click', () => {
        if (gameBoard.board[5] !== '') {
            return
        } else {
        move.play(5);
        move.nextTurn();
        select6.innerText = gameBoard.board[5];
        }
        playerWin();
    })
    
const select7 = document.querySelector('#slot7');
    select7.addEventListener('click', () => {
        if (gameBoard.board[6] !== '') {
            return
        } else {
        move.play(6);
        move.nextTurn();
        select7.innerText = gameBoard.board[6];
        }
        playerWin();
    })

const select8 = document.querySelector('#slot8');
    select8.addEventListener('click', () => {
        if (gameBoard.board[7] !== '') {
            return
        } else {
        move.play(7);
        move.nextTurn();
        select8.innerText = gameBoard.board[7];
        }
        playerWin();
    })

const select9 = document.querySelector('#slot9');
    select9.addEventListener('click', () => {
        if (gameBoard.board[8] !== '') {
            return
        } else {
        move.play(8);
        move.nextTurn();
        select9.innerText = gameBoard.board[8];
        }
        playerWin();
    })

const board = gameBoard.board;


// Factory function that creates players
const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

    return {getName, getMark};
}

// Players
const playerOne = Player(prompt('Player One\'s Name?', 'Rocket'), 'X');
const playerTwo = Player(prompt('Player Two\'s Name?', 'Ace'), 'O');

function gameMove(player) {
    return player.getMark();
}


const gameFlow = () => {
    let turn = 1;
    const play = (slot) => {if (turn % 2 === 0) {
            console.log(`${playerOne.getName()}\'s move!`);
            board.splice(slot, 1, playerTwo.getMark());
        } else {
            console.log(`${playerTwo.getName()}\'s move!`);
            board.splice(slot, 1, playerOne.getMark());
        }};

    const nextTurn = () => {
        // console.log(turn);
        turn++
    }

    return {play, nextTurn}
}

const move = gameFlow();

const winner = document.querySelector('p');

function gameOver(player) {
    console.log(player.getName() + " wins!");
    winner.innerText = (player.getName() + " wins!")
}

const playerWin = () => {
        if ((board[0] === 'X') && (board[1] === 'X') && (board[2] === 'X')) {
            return gameOver(playerOne);
        }
        if ((board[0] === 'X') && (board[3] === 'X') && (board[6] === 'X')) {
            return gameOver(playerOne);
        }
        if ((board[0] === 'X') && (board[4] === 'X') && (board[8] === 'X')) {
            return gameOver(playerOne);
        }
        if ((board[1] === 'X') && (board[4] === 'X') && (board[7] === 'X')) {
            return gameOver(playerOne);
        }
        if ((board[2] === 'X') && (board[5] === 'X') && (board[8] === 'X')) {
            return gameOver(playerOne);
        }
        if ((board[2] === 'X') && (board[4] === 'X') && (board[6] === 'X')) {
            return gameOver(playerOne);
        }
        if ((board[3] === 'X') && (board[4] === 'X') && (board[5] === 'X')) {
            return gameOver(playerOne);
        }
        if ((board[6] === 'X') && (board[7] === 'X') && (board[8] === 'X')) {
            return gameOver(playerOne);
        }
        else if ((board[0] === 'O') && (board[1] === 'O') && (board[2] === 'O')) {
            return gameOver(playerTwo);
        }
        else if ((board[0] === 'O') && (board[3] === 'O') && (board[6] === 'O')) {
            return gameOver(playerTwo);
        }
        else if ((board[0] === 'O') && (board[4] === 'O') && (board[8] === 'O')) {
            return gameOver(playerTwo);
        }
        else if ((board[1] === 'O') && (board[4] === 'O') && (board[7] === 'O')) {
            return gameOver(playerTwo);
        }
        else if ((board[2] === 'O') && (board[5] === 'O') && (board[8] === 'O')) {
            return gameOver(playerTwo);
        }
        else if ((board[2] === 'O') && (board[4] === 'O') && (board[6] === 'O')) {
            return gameOver(playerTwo);
        }
        else if ((board[3] === 'O') && (board[4] === 'O') && (board[5] === 'O')) {
            return gameOver(playerTwo);
        }
        else if ((board[6] === 'O') && (board[7] === 'O') && (board[8] === 'O')) {
            return gameOver(playerTwo);
        }
}

const reset = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        for (let i = 0; i < 9; i++) {
            board[i] = "";
        }
        select1.innerText = gameBoard.board[0];
        select2.innerText = gameBoard.board[1];
        select3.innerText = gameBoard.board[2];
        select4.innerText = gameBoard.board[3];
        select5.innerText = gameBoard.board[4];
        select6.innerText = gameBoard.board[5];
        select7.innerText = gameBoard.board[6];
        select8.innerText = gameBoard.board[7];
        select9.innerText = gameBoard.board[8];
        winner.innerText = '';
    })
}

const resetGame = reset();