// Definisco la Variabile Somma
let sum = 0;
let count = 0;

/*
// Calcolo la Somma
for (let i = 0; i < 5; i++) {

    const newNumber = Number(prompt("Inserisci un numero: "));
    sum += newNumber;

}

alert("La somma è: " + sum);
*/

while (count < 10) {
    let newNumber = Number(prompt("Inserisci un numero: "));
    sum += newNumber;
    count++
};

alert("La somma dei numeri è: " + sum);
