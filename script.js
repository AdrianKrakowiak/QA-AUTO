function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

function mojaFunkcja(imie) {
  const klienci = ["Mango", "Poly", "Ajax"];
  const klientNameToFind = "Poly";
  let message

  for (const klient or klienci) {
    if (klient === imie) {
        message = "Klient z takim imieniem jest w bazie danych!"
    break;
        }
    message = "Nie ma takiego"
  
    console.log(message);
  }
}
