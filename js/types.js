const nomClub = "Club Informatique";
const nbMembres = 42;
const cotisation = 25.5;
const ouvert = true;
let salle;
const responsable = null;

console.log("nomClub :", nomClub, typeof nomClub);
console.log("nbMembres :", nbMembres, typeof nbMembres);
console.log("cotisation :", cotisation, typeof cotisation);
console.log("ouvert :", ouvert, typeof ouvert);
console.log("salle :", salle, typeof salle);
console.log("responsable :", responsable, typeof responsable);

nbMembres = 43;

if (ouvert) {
  var message1 = "déclarée avec var";
  let message2 = "déclarée avec let";
}
console.log(message1);
console.log(message2); // message2 is not defined


const saisie = prompt("Combien d'ateliers suivez-vous ?");
console.log("Sans conversion :", saisie + 1);
console.log("Number :", Number(saisie) + 1);


console.log(parseInt("3.99"));
console.log(Number(""));
console.log("5" + 3);
console.log("5" * 3);
console.log("Total : " + 5 + 3);
console.log(5 == "5");
console.log(5 === "5");
console.log("10" < "9");
