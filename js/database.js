function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    $(".open-button").show();
    window.location.href = "leaderboard.html";
}

function saveName() {
    playerName = document.getElementById("name").value;
}