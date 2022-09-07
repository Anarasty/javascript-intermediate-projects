const firstName = [
  "Gabrielle",
  "Charlie",
  "Adele",
  "Marie",
  "Chantelle",
  "Violet",
  "Mollie",
  "Rita",
  "Josh",
  "Morgan",
  "Albert",
  "Felix",
  "Herbert",
  "Todd",
  "Taylor",
  "Elias",
  "Bruce",
  "Jackson",
  "Tony",
  "Mitchell",
];

const lastName = [
  "Forrest",
  "Erickson",
  "Navarro",
  "Rios",
  "Stewart",
  "Rogers",
  "Bowers",
  "Morris",
  "Hopkins",
  "Arnold",
  "Bishop",
  "Matthews",
  "Knowles",
  "Harrison",
  "Griffin",
  "Lewis",
  "Robinson",
  "Oliver",
  "Myers",
  "Hamilton",
];

function getName() {
  const randomName =
    firstName[Math.floor(Math.random() * firstName.length)] +
    " " +
    lastName[Math.floor(Math.random() * lastName.length)];
  return randomName;
}

function nameQty() {
  const userQty = document.querySelector(".qty").value;
  document.querySelector('.nameList').innerHTML = '';
  if (userQty > 10) {
    document.querySelector(".nameList").innerHTML = "ERROR! TOO LONG!";
  } else {
    for (let i = 0; i < userQty; i++) {
      document.querySelector(".nameList").innerHTML += getName() + "<br>";
    }
  }
}
