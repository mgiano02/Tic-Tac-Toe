// Create module for gameBoard and displayController
// Create factory function for players

// gameBoard = {
//     row1 : [],
//     row2 : [],
//     row3 : [],
// }

// const row1 = ['space1','space2','space3'];
// const row2 = ['space4','space5','space6'];
// const row3 = ['space7','space8','space9'];


const gameBoard = (() => {
    const board = [];
    return {board};
})()

// Factory function that creates players
const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

    return {getName, getMark};
}

// Players
const playerOne = Player('Rocket', 'X');
const playerTwo = Player('Ace', 'O');

function gameOver(player) {
    console.log(player.getName() + " wins!");
}

const gameFlow = (() => {
    const p1Move = () => console.log("Player one move!");
    const p2Move = () => console.log("Player two move!");

    return {p1Move, p2Move};
})()