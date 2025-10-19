const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function calculateResult() {
  const expression = display.value.trim();

  if (expression.includes("+")) {
    const parts = expression.split("+").map((s) => s.trim());
    const sortedKey = parts.sort().join("+");

    if (combinations[sortedKey]) {
      const options = Array.isArray(combinations[sortedKey])
        ? combinations[sortedKey]
        : [combinations[sortedKey]];
      const randomIndex = Math.floor(Math.random() * options.length);
      display.value = options[randomIndex];
    } else {
      display.value = "Sei Frocio";
    }
  } else if (expression.includes("-")) {
    const parts = expression.split("-").map((s) => s.trim());
    const key = parts.join("-"); // e.g., "Carlo Pio-Carlo Pio"

    if (combinations[key] && Array.isArray(combinations[key])) {
      const options = combinations[key];
      const randomIndex = Math.floor(Math.random() * options.length);
      display.value = options[randomIndex];
    } else {
      display.value = "Sei Frocio";
    }
  } else {
    display.value = "Sei Frocio"; // fallback for input without + or -
  }
}

const combinations = {
  "Anatra+Leone": "Anatra e il Gay",
  "Gino+Leone": "Gaygino",
  "Leone+Barber": "Barbaleone",
  "Leone+Diedro": "Leonego",
  "Leone+Carlo Pio": "Carleone",
  "Leone+Ektur": "Leonektur",
  "Leone+Rugebi": "Gaygebi",
  "Leone+Teoria": "Teorikarol",
  "Leone+Tommis": "Borsarelleone",
  "Barber+Gino": "Barbagino",
  "Barber+Ektur": "Mattiektur",
  "Barber+Diedro": "Barbdiego",
  "Barber+Anatra": "Barbaanatra",
  "Barber+Rugebi": "Barbagebi",
  "Barber+Carlo Pio": "Barbapio",
  "Barber+Teoria": "Barbateory",
  "Barber+Tommis": "Barbatommis",
  "Diedro+Ektur": "Diektur",
  "Anatra+Ektur": "Anatrektur",
  "Ektur+Gino": "Giktur",
  "Ektur+Rugebi": "Eugeniektur",
  "Carlo Pio+Ektur": "Carlektur",
  "Ekltur+Tommis": "Tommiektur",
  "Anatra+Diedro": "Dieganatra",
  "Diedro+Rugebi": "Rugdiego",
  "Carlo Pio+Diedro": "Diego e Pio",
  "Diedro+Teoria": "Diegetto",
  "Diedro+Tommis": "Tommiego",
  "Anatra+Rugebi": "Rugebianatra",
  "Anatra+Carlo Pio": "Carlanatra",
  "Anatra+Teoria": "Teorianatra",
  "Anatra+Tommis": "Borsanatra",
  "Carlo Pio+Rugebi": "Rugepio",
  "Rugebi+Teoria": "Eugeoria",
  "Rugebi+Tommis": "Magistri",
  "Carlo Pio+Teoria": "Teocarlo",
  "Carlo Pio+Tommis": "Carissimi",
  "Teoria+Tommis": "Dottori",
  "Carlo Pio+Diedro+Tommis": "Inter",
  "Carlo Pio+Rugebi+Teoria": "Scientifici Umani",
  "Diedro+Ektur+Tommis": "Classici",
  "Leone+Gino+Barber+Teoria": "LGBT",
  "Anatra+Gino+Leone": "Plebei",
  "Carlo Pio-Carlo Pio": ["Carlo", "Pio"],
};
