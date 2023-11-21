// Start Game links to game.html
function startGame() {
    console.log("Game has started");
    window.open("game.html",'_blank');
    
}
// Rules links to gamerules.html
function getInstructions() {
    console.log("Show instructions");
    window.open("gamerules.html",'_blank');  
}
// *** GAMEPLAY ***
// shuffle arrays method
function shuffle(arr) {
//     var j, x, i;
//   for (i = arr.length - 1; i > 0; i--) {
//     j = Math.floor (Math.random () * (i + 1));
//     x = arr[i];
//     arr [i] = arr[j];
//     arr[j] = x;
//   }
    //Fisher-Yates shuffle
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
}
// declaring pics for matching
var pics = ["computer.jpg","alexa.jpg","jbl.jpg","phone.jpg","ps4.jpg","jbl.jpg","xbox.jpg","tv.jpg","alexa.jpg","wii.jpg","computer.jpg","phone.jpg","ps4.jpg","xbox.jpg","tv.jpg","wii.jpg"];
// shuffling pic array
shuffle(pics);
// output pics into table
for (var pic in pics) {
    document.getElementById("pic"+pic).setAttribute("src","img/"+pics[pic]);
}
// make each button the question mark to hide pics
$("img").each(function(){
    var question = "questionmark.jpg";
    $(this).attr("src","img/"+question);
});

$("img").click(function() {
    var id = $(this).attr('id');
    id = id.substring(id.length-2);
    $(this).attr("src","img/"+pics[id]);
});





