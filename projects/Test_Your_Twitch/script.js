var clickedTime; var createdTime; var reactionTime;
            
var gameCount = 0; var min; var max; var sum;

function makeBox(){
    var rand = Math.floor(Math.random()*3000);

    setTimeout(function(){
        document.getElementById("object").style.display = "block";
        colorMaker();
        circular();
        boxJumper();
        createdTime = Date.now();
    }, rand);
}



document.getElementById("object").onclick = function() {
    clickedTime = Date.now();
    reactionTime = (clickedTime-createdTime)/1000;
    this.style.display = "none";

    document.getElementById("time").innerHTML = reactionTime + "s";

    scoreboard(reactionTime);
    gameCount++;
    document.getElementById("gameCount").innerHTML = gameCount;
    if(gameCount < 10) {
        makeBox();
    } else {
        printResult();
    }

}

document.getElementById("start").onclick = function(){
    makeBox();
    gameCount = 0;
    min = 100;
    max = 0;
    sum = 0;
}

function printResult() {
    document.getElementById("avg").innerHTML = (sum/gameCount).toFixed(3);
    document.getElementById("best").innerHTML = min.toFixed(3);
    document.getElementById("worst").innerHTML = max.toFixed(3);
}

function scoreboard(t) {
    sum = sum + t;
    if (t<min){
        min = t;
    }
    if (t>max) {
        max = t;
    }
}

function colorMaker() {
    var colors = ["#92B6D5", "#B93A32", "#AD5D5D", "#D8AE47", "#9E4624", "#B76BA3", "#006E51", "#AF9483", "#4C6A92", "#838487" ];
    i = Math.round(Math.random()*10 - 1 );
    document.getElementById("object").style.backgroundColor = colors[i];
}

function circular() {

    if (Math.random() > 0.5){
        document.getElementById("object").style.borderRadius = "50%";
    } else {
        document.getElementById("object").style.borderRadius = "0";
    }
}

function boxJumper() {
    var jumpX = Math.floor(Math.random() * 3)*150;
    var jumpY = Math.floor(Math.random() * 3)*150;
    document.getElementById("object").style.marginLeft = jumpX + "px";
    document.getElementById("object").style.marginTop = jumpY + "px";
}
