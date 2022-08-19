function doRefresh(){
    let player1 = Math.floor(Math.random()*6 + 1);
    let player2 = Math.floor(Math.random()*6 + 1);
    
    if(player1>player2){
        document.getElementById("result_heading").textContent="🚩 Player 1 Wins!";
    }
    else if(player1<player2){
        document.getElementById("result_heading").textContent="Player 2 Wins! 🚩";
    }
    else{
        document.getElementById("result_heading").textContent="Draw!";
    }
    console.log("player1= "+player1+" player2= "+player2);

    var image1Source = "images/dice" + player1 + ".png";
    var image2Source = "images/dice" + player2 + ".png";

    document.getElementById("player1_img").setAttribute("src", image1Source);
    document.getElementById("player2_img").setAttribute("src", image2Source);
}

document.getElementById("btn").onclick = doRefresh;