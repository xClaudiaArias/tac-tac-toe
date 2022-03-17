let container = document.getElementById("container");
let player_choice_div = document.getElementById("player_choice");
let playAgainDiv = document.getElementById("play-again-div")
let heroimg = document.getElementById('heroimg');
let startGameBtn = document.getElementById("start-game-btn");
let instructionsBtn = document.getElementById("instructions-btn");
let closeInstructionsBtn = document.getElementById("close-instructions");
let playerChoiceContainer = document.getElementById("player_choice_container");
let closePlayerChoiceBtn = document.getElementById("close-player-choice");
let winnerP = document.getElementById("winner-p");
let closePlayAgain = document.getElementById("close-play-again");
// MODALS 
let instructionsModal = document.getElementById("instructions-modal");

instructionsBtn.addEventListener("click", function(){
    instructionsModal.style.display = "flex";
})

// close btn instructions 
closeInstructionsBtn.addEventListener("click", function(){
    instructionsModal.style.display = "none";
})

// to exit modals outside 
window.onclick = function(event) {
    if (event.target == instructionsModal) {
        instructionsModal.style.display = "none";
    }

    if (event.target == playerChoiceContainer) {
        playerChoiceContainer.style.display = "none";
    }
}

// CHOOSE X OR O start game 
startGameBtn.addEventListener("click", function(){
    playerChoiceContainer.style.display = "flex";
})

closePlayerChoiceBtn.addEventListener("click", function(){
    playerChoiceContainer.style.display = "none";
})

closePlayAgain.addEventListener("click", function(){
    playAgainDiv.style.display = "none";
})


for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div")
    cell.classList.add("cell")
    cell.classList.add("c-" + i)
    container.appendChild(cell)
}

// players 
let player1 = 'O';
let player2 = 'X';

// individual cells 
let c0 = document.querySelector(".c-0");
let c1 = document.querySelector(".c-1");
let c2 = document.querySelector(".c-2");
let c3 = document.querySelector(".c-3");
let c4 = document.querySelector(".c-4");
let c5 = document.querySelector(".c-5");
let c6 = document.querySelector(".c-6");
let c7 = document.querySelector(".c-7");
let c8 = document.querySelector(".c-8");

//  WINNING ROWS 
// horizontal 
const winrows = [[c0,c1,c2],[c3,c4,c5],[c6,c7,c8],
// hor 
[c0,c3,c6],[c1,c4,c7],[c2,c5,c8],
// accross
[c2,c4,c6],[c0,c4,c8]
]

let cells = document.querySelectorAll('.cell');
let cellsArray = Array.from(cells);

let isGame = true
let winner;

// this is for switching 
let player_choice;

// this is for who the player is 
let player;

let player_choiceX = document.createElement("button");
let player_choiceO = document.createElement("button");

player_choiceO.classList.add("choice");
player_choiceX.classList.add("choice");



const chooseXorO = () => {

    player_choiceX.textContent = 'X';
    player_choiceO.textContent = "O";

    player_choice_div.appendChild(player_choiceX)
    player_choice_div.appendChild(player_choiceO)


    player_choiceO.addEventListener("click", function(e) {
        return player_choice = "O";
    })

    player_choiceX.addEventListener("click", function(e) {
        return player_choice = "X";
    })
}




const game = () => {
    container.style.display = "grid";
    // click cells 
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            cell.innerHTML = player_choice;
            // changing players 
            if (player_choice === 'O'){
                player_choice = player2
                cell.classList.add("active")     
            } else if (player_choice === 'X'){
                player_choice = player1
                cell.classList.add("active")
            }

            // winning feature

            winrows.forEach(rows => {
                if (rows[0].innerHTML === 'X' && rows[1].innerHTML === 'X' && rows[2].innerHTML === 'X'){
                    winner = player2
                    isGame = false
                    playAgainDiv.style.display = "block";
                    rows[0].style.backgroundColor = "rgb(255, 146, 182)";
                    rows[1].style.backgroundColor = "rgb(255, 146, 182)"; 
                    rows[2].style.backgroundColor = "rgb(255, 146, 182)"; 
                    rows[0].style.color = "white";
                    rows[1].style.color = "white"; 
                    rows[2].style.color = "white"; 
                } else if (rows[0].innerHTML === 'O' && rows[1].innerHTML === 'O' && rows[2].innerHTML === 'O'){
                    winner = player1
                    isGame = false 
                    playAgainDiv.style.display = "block";
                    rows[0].style.backgroundColor = "rgb(255, 146, 182)";
                    rows[1].style.backgroundColor = "rgb(255, 146, 182)"; 
                    rows[2].style.backgroundColor = "rgb(255, 146, 182)"; 
                    rows[0].style.color = "white";
                    rows[1].style.color = "white"; 
                    rows[2].style.color = "white"; 
                }
            })
        })
    })

    // NO WINNER

    let noWinner = setInterval(function(){
        const isActive = (currentCell) => currentCell.classList.contains("active");
        if (cellsArray.every(isActive)) {
            winner = "No winner"
            playAgainDiv.style.display = "flex";
            isGame = false
            clearInterval(noWinner)
        }
    }, 1000)

    return winner
}


// STARTS GAME AFTER PLAYER MADE CHOICE 

function startGame() {
    heroimg.style.display = "none";
    startGameBtn.style.display = "none";

    player_choice_div.style.display = "block";
    chooseXorO()

    let choice = document.querySelectorAll(".choice")

    choice.forEach(c => {
        c.addEventListener("click", function(e) {
            container.style.display = "grid";
            player = e.target.innerHTML;
            player_choice_div.innerHTML = `<p class="chosen">You chose: ${e.target.innerHTML}</p>`
            game()
        })
    })
}

const announceWinner = () => {
    if (winner === "X" && player === "X") {
        return "Congratulations. YOU'RE THE WINNER!"
    } else if (winner === "O" && player === "O") {
        return "Congratulations. YOU'RE THE WINNE!"
    } else if (winner === "No winner") {
        return "There is no winner"
    } else {
        return "YOU LOST. Winner is: " +  winner
    }
}


let start = setInterval(function(){

    if (isGame === false){
        cells.forEach(cell => {
            cell.classList.add("active")
        })
    
    winnerP.innerHTML = announceWinner();
    clearInterval(start)
    }
}, 500)


// PLAY AGAIN 
const playAgain = () => {
    document.location.reload(container)
}
