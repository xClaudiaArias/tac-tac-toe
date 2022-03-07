let container = document.getElementById("container");

// create grid 
for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div")
    cell.classList.add("cell")
    cell.classList.add("c-" + i)
    container.appendChild(cell)
}

// players 

let player1 = '0';
let player2 = 'x';

let player1choice = []
let player2choice = []

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
const winrows = [[c0,c1,c2],[c3,c4,c5],[c6,c7,c7],
// hor 
[c0,c3,c6],[c1,c4,c7],[c2,c5,c8],
// accross
[c2,c4,c6],[c0,c4,c8]
]

const game = () => {
    let whosturn = Math.floor(Math.random() * 2);

    if (whosturn === 0){
        whosturn = player1;
    } else if (whosturn === 1){
        whosturn = player2
    }

    let cells = document.querySelectorAll('.cell');
        let chosenCells = []


    cells.forEach(cell => {
        cell.addEventListener('click', function(e) {
            console.log(e, 'e1')
            cell.innerHTML = whosturn;
            if (whosturn === '0'){
                player1choice.push(cell)
                chosenCells.push(cell)
                whosturn = player2

                cell.classList.add("active")     
            } else if (whosturn === 'x'){
                player2choice.push(cell)
                chosenCells.push(cell)
                whosturn = player1

                cell.classList.add("active")
            }

            // winning feature WORKS
            winrows.forEach(rows => {
                if (rows[0].innerHTML === 'x' && rows[1].innerHTML === 'x' && rows[2].innerHTML === 'x'){
                    console.log("X WINS", " winning row: ", rows)
                    alert("X WINS")
                } else if (rows[0].innerHTML === '0' && rows[1].innerHTML === '0' && rows[2].innerHTML === '0'){
                    console.log("0 WINS", " winning row: ", rows)
                    alert("0 WINS")
                }
            })
        })
    })
}

game()

// todo:
// Stop the game
// Play again logic and btn
// clean it up 

