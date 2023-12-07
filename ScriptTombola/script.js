const tab = document.getElementById("divTabella");
const numberOfTheCell = document.getElementsByTagName("h3");
const cell = document.getElementsByTagName("divNumbers");
const extractedNumber = document.getElementById("spanId");

// creo un array di numeri da 1 a 90 da richiamare random poi succesivamente

const Numbers = [];

for (i = 1; i <= 90; i++) {
  Numbers.push(i);
}

console.log(Numbers);

// creo la tabella della tombola

const tabCreation = function () {
  for (let i = 1; i <= Numbers.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("divNumbers");
    const numberOfTheCell = document.createElement("h3");
    numberOfTheCell.innerText = i;
    cell.appendChild(numberOfTheCell);
    tab.appendChild(cell);
  }
};

tabCreation();

console.log(numberOfTheCell);
//funzione per chiamare numeri random da 1 a 90 prova per vedere se il bottone va, ma servirà un array di numeri da 1 a90 per non chiamare mai lo stesso numero...

const callRandomNumber = function () {
  extractedNumber.innerText = Numbers[Math.floor(Math.random() * 90) + 1];
  for (let i = 0; i <= numberOfTheCell.length; i++) {
    if (extractedNumber.innerText === numberOfTheCell[i].innerText) {
      numberOfTheCell[i].classList.add("selectNumber");
    }
  }
};

const button = document.getElementById("callButton");

button.addEventListener("click", callRandomNumber);
