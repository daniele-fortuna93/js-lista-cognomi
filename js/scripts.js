//  Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi, stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana"
// della lista in cui il nuovo utente si trova.

// 1. Richiesta cognome utente
do {
  var cognome = prompt("Inserisci il tuo cognome");
  // 2. Controllo che non ci siano numeri all'inizio o che la stringa non sia vuota
} while (  !isNaN(parseInt(cognome[0]))  ||  cognome.length == 0  )

// 3. Trasformo la prima lettera del cognome dell'utente in maiuscolo
cognome = cognome[0].toUpperCase() + cognome.substring(1);

// 4. Lista cognomi
var listaCognomi = ["Rossi", "Biondi", "Bianchi", "Neri", "Verdi"];

// 4. Inserimento cognome nella listaCognomi
listaCognomi.push(cognome);

// 6. Ordino la lista
listaCognomi.sort();

console.log(listaCognomi);

// 8. Stampo la posizione del cognome nella lista
var j = 0;
while ( cognome != listaCognomi[j] ) {
  j++
}
console.log("Il tuo cognome è nella posizione " + ++j + " nella lista.");
