const autorizedEmails = ["example1@gmail.com", "example2@hotmail.com", "example3@yahoo.com"];

const email = prompt("Inserisci il tuo indirizzo email:");

if (autorizedEmails.includes(email)) {
  console.log("Accesso consentito.");
} else {
  console.log("Accesso negato. L'indirizzo email inserito non è autorizzato.");
}


const dadoPlayer = Math.floor(Math.random() * 6) + 1;
const dadoComputer = Math.floor(Math.random() * 6) + 1;

console.log("Il giocatore ha fatto un " + dadoPlayer + ".");
console.log("Il computer ha fatto un " + dadoComputer + ".");

if (dadoPlayer > dadoComputer) {
  console.log("Il giocatore ha vinto!");
} else if (dadoPlayer < dadoComputer) {
  console.log("Il computer ha vinto.");
} else {
  console.log("Pareggio!");
}
