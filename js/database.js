// // add name and scores to the database
// var usernameInput = "";
// $("#save").click(saveToLeaderboard());
// function saveToLeaderboard() {
//     console.log("Saving to leaderboard");
//     usernameInput = document.getElementById("nombre").value;
//     db.collection('playerScores').add({
//         username: usernameInput,
//         time: timeTaken,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     })
//         .then(docRef => {
//             console.log("Document written with ID: ", docRef.id);
//         })
//         .catch(error => {
//             console.error("Error adding document: ", error);
//         });
//     // window.location.href = leaderboard.html;
// }

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

