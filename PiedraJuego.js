let rock = 0;
let paper = 1;
let scissors = 2;
let playerCounter = 0;
let pcCounter = 0;
// Index de imagenes
let playerIndex = 0;
let pcIndex = 0;
// Botones
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const restartBtn = document.getElementById("restart-btn");
// puntos
const playerScore = document.querySelector('#score-player');
const pcScore = document.querySelector('#score-pc');
// Seleccion de los juagadores
const playerSelection = document.querySelectorAll('.player-selection');
const computerSelection = document.querySelectorAll('.pc-selection');
// Indicador
const borderPlayer = document.querySelector(".aside-player");
const borderPc = document.querySelector(".aside-pc");

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
    borderPlayer.style.border = "1px solid #1e90ff";
    borderPlayer.style.boxShadow ="#1e90ff 0px 6px 16px";
    borderPc.style.border = "1px solid #1e90ff";
    borderPc.style.boxShadow ="#1e90ff 0px 6px 16px";
}
// Boton Reiniciar
restartBtn.addEventListener('click', function() {
    pcCounter = 0;
    playerCounter = 0;
    pcScore.textContent = String(pcCounter);
    playerScore.textContent = String(playerCounter);

    playerSelection[playerIndex].classList.remove("active");
    playerSelection[0].classList.add("active");
    playerIndex = 0;
    computerSelection[pcIndex].classList.remove("active");
    computerSelection[0].classList.add("active");
    pcIndex = 0;

    borderPlayer.style.border = "1px solid rgb(221, 221, 221)";
    borderPlayer.style.boxShadow ="rgb(0 0 0 / 12%) 0px 6px 16px";
    borderPc.style.border = "1px solid rgb(221, 221, 221)";
    borderPc.style.boxShadow ="rgb(0 0 0 / 12%) 0px 6px 16px";
});
// Boton Piedra
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
//Boton Papel
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
//Boton tijeras
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