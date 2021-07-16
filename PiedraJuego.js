var rock = 0;
var paper = 1;
var scissors = 2;
let playerCounter = 0;
let pcCounter = 0;

let playerIndex = 0;
let pcIndex = 0;
// Botones
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const restartBtn = document.getElementById("restart-btn");
//puntos
let playerScore = document.querySelector('#score-player');
let pcScore = document.querySelector('#score-pc');
//Seleccion de los juagadores
const playerSelection = document.querySelectorAll('.player-selection');
const computerSelection = document.querySelectorAll('.pc-selection');

function winner(winner){
    let youWin = document.querySelector(winner);
    youWin.style.border = "1px solid #2ecc71";
    youWin.style.boxShadow ="#2ecc71 0px 6px 16px";
}

function loser(loser){
    let youLose = document.querySelector(loser);
    youLose.style.border = "1px solid #ff7979";
    youLose.style.boxShadow ="#ff7979 0px 6px 16px";
}

function draw(){
    let player = document.querySelector(".aside-player");
    let pc = document.querySelector(".aside-pc");
    player.style.border = "1px solid #1e90ff";
    player.style.boxShadow ="#1e90ff 0px 6px 16px";
    pc.style.border = "1px solid #1e90ff";
    pc.style.boxShadow ="#1e90ff 0px 6px 16px";
}

rockBtn.addEventListener('click', function() {
    playerSelection[playerIndex].classList.remove("active");
    playerSelection[1].classList.add("active");
    playerIndex = 1;

    var pcSelection = Math.floor(Math.random() * 3);

    if (pcSelection === rock) {
        console.log("Empate " + pcSelection);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[1].classList.add("active");
        pcIndex = 1;

        draw();
    }
    else if (pcSelection === paper) {
        console.log("Perdiste! la pc eligió " + pcSelection);
        pcCounter++;
        pcScore.textContent = String(pcCounter);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[2].classList.add("active");
        pcIndex = 2;

        winner(".aside-pc");
        loser(".aside-player");
    }
    else {
        console.log("Ganaste! la pc eligió " + pcSelection);
        playerCounter++;
        playerScore.textContent = String(playerCounter);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[3].classList.add("active");
        pcIndex = 3;
        
        winner(".aside-player");
        loser(".aside-pc");
    }
});

paperBtn.addEventListener('click', function() {

    playerSelection[playerIndex].classList.remove("active");
    playerSelection[2].classList.add("active");
    playerIndex = 2;

    var pcSelection = Math.floor(Math.random() * 3);

    if (pcSelection === rock) {
        console.log("Ganaste! la pc eligió " + pcSelection);
        playerCounter++;
        playerScore.textContent = String(playerCounter);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[1].classList.add("active");
        pcIndex = 1;
        winner(".aside-player");
        loser(".aside-pc");
    }
    else if (pcSelection === paper) {
        console.log("Empate " + pcSelection);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[2].classList.add("active");
        pcIndex = 2;
        draw();
    }
    else {
        console.log("Perdiste! la pc eligió " + pcSelection);
        pcCounter++;
        pcScore.textContent = String(pcCounter);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[3].classList.add("active");
        pcIndex = 3;

        winner(".aside-pc");
        loser(".aside-player");
    }
});

scissorsBtn.addEventListener('click', function() {

    playerSelection[playerIndex].classList.remove("active");
    playerSelection[3].classList.add("active");
    playerIndex = 3;
    
    var pcSelection = Math.floor(Math.random() * 3);

    if (pcSelection === rock) {
        console.log("Perdiste! la pc eligió " + pcSelection);
        pcCounter++;
        pcScore.textContent = String(pcCounter);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[1].classList.add("active");
        pcIndex = 1;

        winner(".aside-pc");
        loser(".aside-player");
    }
    else if (pcSelection === paper) {
        console.log("Ganaste! la pc eligió " + pcSelection);
        playerCounter++;
        playerScore.textContent = String(playerCounter);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[2].classList.add("active");
        pcIndex = 2;

        winner(".aside-player");
        loser(".aside-pc");
    }
    else {
        console.log("Empate " + pcSelection);

        computerSelection[pcIndex].classList.remove("active");
        computerSelection[3].classList.add("active");
        pcIndex = 3;

        draw();
    }
});