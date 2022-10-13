/*

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/

//Definisco invitati
let nomeUtente = prompt("Come ti chiami?");
let listaInvitati = [
    "Manuel Galeone",
    "Antonio Cassano",
    "Mauro Icardi",
    "The Rock",
    "Antonio Conte"
];

//Controllo tra i Nominativi
let isAccepted = false;

let i = 0;
while (i < listaInvitati.length) {
    const element = listaInvitati[i];

    //Creo la Condizione: se è vero che il Nome c'è, allora do il Benvenuto
    if (nomeUtente === element) {

        isAccepted = true;
        console.log(isAccepted);
        console.log("Benvenuto!")
        
    } else {
        console.log(isAccepted);
    };
    i++;

};