let second = 0;
let count = -1;
let temp = 0;
let timeTaken = 0;
var gameOver = false;

window.onload = stopwatch;

function stopwatch() {
    count++;

    if (count == 1) {
        second++;
        count = 0;
    }

    let secondStr = second;

    if (second < 1) {
        secondStr = "0" + secondStr;
    }
    document.getElementById("sec").innerHTML = secondStr;
    const timeout = setTimeout(stopwatch, 1000);
    
    if (matches==(pics.length/2)) {
        clearTimeout(timeout);
        timeTaken = secondStr;
        $(".open-button").addClass("animated");
    }      
}
