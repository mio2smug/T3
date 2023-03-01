//  HTML Constants
const startButton = document.querySelector('#start-button');

const myGameboard = (() => {
  let gameboard = ['', '', '', '', '', '', '', '', ''];

  const render = () => {
    let boardHTML = '';
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    });
    document.querySelector('#gameboard').innerHTML = boardHTML;
  };
  return {
    render,
  };
})();

const createPlayer = (name, mark) => {
    return {name, mark}
}

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector('#player1').value, 'X'),
            createPlayer(document.querySelector('#player2').value, 'O')
        ]
        currentPlayerIndex = 0
        gameOver = false
        myGameboard.render();
    }
    return {
        start
    }
})();

startButton.onclick = () => Game.start(); //working