let container = document.getElementById("container");
let modal = document.getElementById("modal");
let player_choice_div = document.getElementById("player_choice");


// create grid 
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
let player_choice;

const chooseXorO = (e) => {
    let player_choiceX = document.createElement("button");
    let player_choiceO = document.createElement("button");

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

chooseXorO()



const game = () => {

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
                    // console.log("X WINS", " winning row: ", rows)
                    winner = player2
                    isGame = false
                } else if (rows[0].innerHTML === 'O' && rows[1].innerHTML === 'O' && rows[2].innerHTML === 'O'){
                    // console.log("O WINS", " winning row: ", rows)
                    winner = player1
                    isGame = false 
                }
            })
        })
    })

    // NO WINNER

    let noWinner = setInterval(function(){
        const isActive = (currentCell) => currentCell.classList.contains("active");
        if (cellsArray.every(isActive)) {
            winner = "No winner"
            clearInterval(noWinner)
        }
    }, 1000)

    return winner
}


game()


let start = setInterval(function(){
    // console.log("Is game true (going): ", isGame)
    // console.log("The player is: ", player_choice)
    console.log("winner is: ", winner)
    if (isGame === false){
        // console.log("The winner is " + winner)
        cells.forEach(cell => {
            cell.classList.add("active")
            // modal.style.display = "block";
        })

    // no winner logic 
    // const isEveryRowEmpty = (row) => row.innerHTML !== "";
    // if (winrows.every(isEveryRowEmpty)){
    //     console.log("NO WINNER")
    // }

    clearInterval(start)
    }
}, 500)




// todo:
// declare winner modal
// wait a little for modal... its too fast
// style modal 
// Play again logic and btn
// clean it up 
// REMOVE EVEYTHING THAT IS NOT NEEDED (EXTRA CODE)
// CSS styling
