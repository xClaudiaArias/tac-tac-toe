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

// let isGame = true

// const game = () => {
//     // choose turn 
//     let whosturn = Math.floor(Math.random() * 2);
//     if (whosturn === 0){
//         whosturn = player1;
//     } else if (whosturn === 1){
//         whosturn = player2
//     }

//     // click cells 
//     let cells = document.querySelectorAll('.cell');
//     cells.forEach(cell => {
//         cell.addEventListener('click', function() {
//             cell.innerHTML = whosturn;
//             if (whosturn === '0'){
//                 whosturn = player2
//                 cell.classList.add("active")     
//             } else if (whosturn === 'x'){
//                 whosturn = player1
//                 cell.classList.add("active")
//             }

//             // winning feature WORKS
//             winrows.forEach(rows => {
//                 if (rows[0].innerHTML === 'x' && rows[1].innerHTML === 'x' && rows[2].innerHTML === 'x'){
//                     console.log("X WINS", " winning row: ", rows)
//                     // alert("X WINS")
//                     // isGame = false
//                 } else if (rows[0].innerHTML === '0' && rows[1].innerHTML === '0' && rows[2].innerHTML === '0'){
//                     console.log("0 WINS", " winning row: ", rows)
//                     // alert("0 WINS")
//                     // isGame = false
//                 }
//             })
//         })
//     })
// }


// start game 



// game()



// todo:
// Stop the game
// Play again logic and btn
// clean it up 
// REMOVE EVEYTHING THAT IS NOT NEEDED (EXTRA CODE)
// ONLY ONE PLAYER CAN WIN LOGIC
// NO ONE WINS LOGIC
// CSS styling



let cells = document.querySelectorAll('.cell');
let isGame = true
let winner;

const game = () => {
    // choose turn 
    let whosturn = Math.floor(Math.random() * 2);
    if (whosturn === 0){
        whosturn = player1;
    } else if (whosturn === 1){
        whosturn = player2
    }

    // click cells 
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            cell.innerHTML = whosturn;
            if (whosturn === '0'){
                whosturn = player2
                cell.classList.add("active")     
            } else if (whosturn === 'x'){
                whosturn = player1
                cell.classList.add("active")
            }

            // winning feature WORKS

                winrows.forEach(rows => {
                    if (rows[0].innerHTML === 'x' && rows[1].innerHTML === 'x' && rows[2].innerHTML === 'x'){
                        console.log("X WINS", " winning row: ", rows)
                        // alert("X WINS")
                        winner = player2
                        isGame = false
                    } else if (rows[0].innerHTML === '0' && rows[1].innerHTML === '0' && rows[2].innerHTML === '0'){
                        console.log("0 WINS", " winning row: ", rows)
                        // alert("0 WINS")
                        winner = player1
                        isGame = false 
                    }
                })
        })
    })

    return winner
}


game()


let start = setInterval(function(){
    console.log("Is game true (going): ", isGame)
    if (isGame === false){
        console.log("The winner is " + winner)
        cells.forEach(cell => {
            cell.classList.add("active")
        })
        clearInterval(start)
    }
}, 500)