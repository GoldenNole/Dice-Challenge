
const player1 = diceRoll("1");
const player2 = diceRoll("2");

winner(player1,player2);

function winner(player1, player2){
    if(player1 > player2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if(player1 < player2){
        document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
    }
    else if(player1 === player2){
        document.querySelector("h1").innerHTML = "Draw";
    }
}
function diceRoll(player){
    let randomNum = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img"+player).setAttribute("src", "images/dice"+randomNum+".png");
    return(randomNum);
}
