const tab = document.getElementById("divTabella");
const numberOfTheCell = document.querySelector("h3");

const tabCreation = function () {
  for (i = 1; i <= 90; i++) {
    const cell = document.createElement("div");
    cell.classList.add("divNumbers");
    const numberOfTheCell = document.createElement("h3");
    numberOfTheCell.innerText = i;
    cell.appendChild(numberOfTheCell);
    tab.appendChild(cell);
  }
};

tabCreation();

//funzione per chiamare numeri random da 1 a 90, ma credo mi servirà un array di numeri da 1/90 per non chiamare mai lo stesso numero...

const callRandomNumber = function () {
  const CalledNumber = Math.floor(Math.random() * 90) + 1;

  console.log(CalledNumber);
};

const button = document.getElementById("callButton");

button.addEventListener("click", callRandomNumber);
