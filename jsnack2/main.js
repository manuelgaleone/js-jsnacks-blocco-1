//Chiedo due parole all'Utente
let userWord = prompt("Dammi una Parola:");
let secondUserWord = prompt("Dammi un'altra Parola':");

//Calcolo quale sia la più lunga
if (userWord.length > secondUserWord.length) {

    alert("La Parola più lunga è: " + userWord);

} else {
    
    alert("La Parola più lunga è: " + secondUserWord);

};