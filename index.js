const form = document.querySelector("form");
const nameText = document.getElementById("nameText");

window.addEventListener("DOMContentLoaded", () => {
  const secondCounter = sessionStorage.getItem("counter", counter);
  const nameListFromStorage = localStorage.getItem("nameList");
  if (nameListFromStorage) {
    nameList.push(...JSON.parse(nameListFromStorage));
  }
  svuotaLavagna(nameList); // Update displayed list of names
});
let nameList = [];

const svuotaLavagna = (nameList) => {
  const listaNomi = document.getElementById("listaNomi");
  listaNomi.innerHTML = "";

  nameList.forEach((nameText) => {
    const li = document.createElement("li");
    li.textContent = nameText;
    listaNomi.appendChild(li);
  });
};

form.onsubmit = (event) => {
  event.preventDefault();

  const savedName = nameText.value;
  nameList.push(savedName);
  nameText.value = "";

  localStorage.setItem("nameList", JSON.stringify(nameList));

  console.log(nameList);
  svuotaLavagna(nameList);
};

const cancella = document.getElementById("cancella");
cancella.addEventListener("click", () => {
  localStorage.removeItem("nameList");
  nameList = [];
  svuotaLavagna(nameList);
});

svuotaLavagna(nameList);

let counter = 0;

sessionStorage.setItem("counter", counter);

const seconds = () => {
  counter++;
  console.log(counter);
  timer(counter);
};
setInterval(seconds, 1000);

const counterDiv = document.getElementById("counter");

const timer = (counter) => {
  counterDiv.innerHTML = counter;
};
