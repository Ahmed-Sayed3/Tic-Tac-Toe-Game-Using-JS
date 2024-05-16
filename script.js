// Variables
var counter = 0;
var canPlay = true;
var player = 'X';
var winSquares = [];
var title = document.querySelector('.title')  //Dynamic Title
var squars = document.getElementsByClassName('square')

//Toggle Function ==> Means switch automatically to other player
function togglePlayer(turn, element) {
    if (turn === "X") {
        element.textContent = 'X';
        player = 'O';
        title.textContent = 'O'
    }
    else {
        element.textContent = 'O';
        player = 'X';
        title.textContent = 'X'
    }
}

// Function To Reload After 4Sc When End To Play Again 
function reset() {
    setInterval(function () { title.textContent += '.'; }, 1000);
    // squars.array.forEach(element => {
    //     element.textContent = "";
    // });
    // canPlay = true;
    setTimeout(function () {location.reload();}, 3000);
}

// Botton To Restart The Game
rest.onclick = function () {
    title.textContent = "The Game Will Restart"
    reset();
}

// Function To Change Title When Any Player Win 
function winner() {
    canPlay = false;
    console.log(winSquares);
    title.textContent = `${player === "X" ? "O" : "X"} is winner`;
    for (var i = 0; i < winSquares.length; i++)
        document.getElementById(`item${(winSquares[i]) + 1}`).style.background = '#76b5c5';
    reset();
}

onclick
// Function To select Who win By Get it 3 parameter(index of square)
function checkWinningCondition(a, b, c) {
    if (squars[a].textContent == squars[b].textContent &&
        squars[b].textContent == squars[c].textContent && squars[a].textContent != "") {
        winSquares = [a, b, c];
        return true;
    }
    return false;
}

//Condition To Select Who 's Win Or The Game End With Draw  
function isHasWinner() {
    if (counter > 8) {
        title.textContent = `Draw`;
        reset();
        return false;
    } else {
        if (checkWinningCondition(0, 1, 2)) {
            return true;
        } else if (checkWinningCondition(3, 4, 5)) {
            return true;
        } else if (checkWinningCondition(6, 7, 8)) {
            return true;
        } else if (checkWinningCondition(0, 3, 6)) {
            return true;
        } else if (checkWinningCondition(1, 4, 7)) {
            return true;
        } else if (checkWinningCondition(2, 5, 8)) {
            return true;
        } else if (checkWinningCondition(0, 4, 8)) {
            return true;
        } else if (checkWinningCondition(2, 4, 6)) {
            return true;
        } else {
            return false;
        }
    }
}

// Event Include Click Event And Fire Funcion After The 5th Clicked   
for (let i = 0; i < squars.length; i++) {
    squars[i].addEventListener('click', function () {

        if (this.textContent == "" && canPlay) {
            player === "X" ? togglePlayer("X", this) : togglePlayer("O", this);
            console.log(counter);
            if (++counter > 4)
                isHasWinner() ? winner() : null;
        }
    })
}
