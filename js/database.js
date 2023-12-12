// const firebaseConfig = {
//     apiKey: "AIzaSyAsYoFfwUbzeJgKNGnp9m0uNQQukx7gecE",
//     authDomain: "database1-9a23b.firebaseapp.com",
//     projectId: "database1-9a23b",
//     storageBucket: "database1-9a23b.appspot.com",
//     messagingSenderId: "86486126439",
//     appId: "1:86486126439:web:1012829861c6359505a9c2",
//     measurementId: "G-8D43VGFTBB"
// };
// add name and scores to the database
var username = document.getElementById("name").value;
console.log(username);
if (gameOver) {
    db.collection("playerScores").add({
        name: playerName,
        time: time
    });
    // Read data from the database
    if (playerName != null) {
        db.collection("playerScores").orderBy("time").limit(5).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().item}`);
            });
        });
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    $(".open-button").show();
    // window.location.href = "leaderboard.html";
}
