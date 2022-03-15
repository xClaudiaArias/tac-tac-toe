let container = document.getElementById("container");
let modal = document.getElementById("modal");
let player_choice_div = document.getElementById("player_choice");
let playAgainDiv = document.getElementById("play-again-div")
let heroimg = document.getElementById('heroimg');
let startGameBtn = document.getElementById("start-game-btn");

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

    player_choiceO.textContent = "O";
    player_choiceX.textContent = 'X';

    player_choice_div.appendChild(player_choiceO)
    player_choice_div.appendChild(player_choiceX)


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
                } else if (rows[0].innerHTML === 'O' && rows[1].innerHTML === 'O' && rows[2].innerHTML === 'O'){
                    winner = player1
                    isGame = false 
                    playAgainDiv.style.display = "block";
                }
            })
        })
    })

    // NO WINNER

    let noWinner = setInterval(function(){
        const isActive = (currentCell) => currentCell.classList.contains("active");
        if (cellsArray.every(isActive)) {
            winner = "No winner"
            playAgainDiv.style.display = "block";
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
            console.log('You chose: ', e.target.innerHTML)
            player_choice_div.innerHTML = `<p class="chosen">You chose: ${e.target.innerHTML}</p>`
            game()
        })
    })
}

function announceWinner () {
    let winnerModal = document.createElement('div');
    let winnerModalH1 = document.createElement('H1');

    console.log(player_choice, ' i am player_choice')
    console.log(player1, player2, ' player1, player2')
    console.log(player, ' playyaaaaaaa')

    if (winner === "X" && player === "X") {
        console.log("Congratulations. YOU'RE THE WINNER:  Winner iss: X")
    } else if (winner === "O" && player === "O") {
        console.log("Congratulations. YOU'RE THE WINNER: Winner is: O")
    } else if (winner === "No winner") {
        console.log("There is no winner");
    } else {
        console.log("YOU LOST. Winner is: ", winner)
    }
}


let start = setInterval(function(){
    console.log("winner is: ", winner)
    if (isGame === false){
        cells.forEach(cell => {
            cell.classList.add("active")
        })
    announceWinner()
    clearInterval(start)
    }
}, 500)


// PLAY AGAIN 
const playAgain = () => {
    document.location.reload(container)
}




// todo:
// MODALS:
// instructions modal 
// Start Game for choosing modal 
// announce winner AND play again modal
// nav page 
// logo 
// hero img 
// clean it up 
// REMOVE EVEYTHING THAT IS NOT NEEDED (EXTRA CODE, CONSOLE.LOGS, ETC...)
// CSS STYLING:
    // make tic tac grid
    // navabar 
    // elemnts inside 
    // style modals 

// note: BONUS POINTS FOR GETTING COMPUTER TO PLAY WITH YOU

