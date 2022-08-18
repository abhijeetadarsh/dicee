let player1 = Math.floor(Math.random()*6 + 1);
let player2 = Math.floor(Math.random()*6 + 1);

if(player1>player2){
    document.getElementById("result_heading").textContent="Player 1 Wins! 🚩";
}
else if(player1<player2){
    document.getElementById("result_heading").textContent="Player 2 Wins! 🚩";
}
else{
    document.getElementById("result_heading").textContent="Draw!";
}


switch (player1) {
    case 1:
        document.getElementById("player1_img").src="images/dice1.png";
        break;
    case 2:
        document.getElementById("player1_img").src="images/dice2.png";
        break;
    case 3:
        document.getElementById("player1_img").src="images/dice3.png";
        break;
    case 4:
        document.getElementById("player1_img").src="images/dice4.png";
        break;
    case 5:
        document.getElementById("player1_img").src="images/dice5.png";
        break;
}

switch (player2) {
    case 1:
        document.getElementById("player2_img").src="images/dice1.png";
        break;
    case 2:
        document.getElementById("player2_img").src="images/dice2.png";
        break;
    case 3:
        document.getElementById("player2_img").src="images/dice3.png";
        break;
    case 4:
        document.getElementById("player2_img").src="images/dice4.png";
        break;
    case 5:
        document.getElementById("player2_img").src="images/dice5.png";
        break;
}
console.log("player1= "+player1+" player2= "+player2);