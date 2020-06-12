// ELEMENTI NECESSARI AL FUNZIONAMENTO
// Generatore di numeri casuali
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Array necessari
randomNumber = [];
userNumber = [];
guessedNumber = [];

// Un alert espone 5 numeri casuali.
for (var i = 1; i <= 5; i++) {
  var generatatedNumber = getRandomIntInclusive(1, 100);
  alert(generatatedNumber);
  randomNumber.push(generatatedNumber);
}
console.log(randomNumber);

// Da li parte un timer di 30 secondi.
setTimeout(timer, 30);
function timer() {
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
  for (var j = 1; j <= 5; j++) {
    var userNumber = parseInt(prompt('Quali numeri da 1 a 100, sono comparsi? Rispondi subito!'));
     if (randomNumber.includes(userNumber)) {
       guessedNumber.push(userNumber);
    }
  }
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// EXTRA divisione in 3 categorie in base alle indovinate
if (guessedNumber.length == 0) {
          alert("it's official! You Suck!")
        } else if (guessedNumber.length <= 3) {
            alert('Toasty! ' + guessedNumber.length +  ' numeri: ' + guessedNumber);
          } else if (guessedNumber.length == 5) {
              alert('Elder God! ' + guessedNumber.length +  ' numeri: ' + guessedNumber)
            }
};
