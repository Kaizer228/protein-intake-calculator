let Kilogram = document.getElementById("Kilogram");
let proteinPreference = document.getElementById("proteinPreference");
let Result = document.getElementById("Result");
let Calculate = document.getElementById("Calculate");
let Min = 0.8;
let Mod = 1.2;
let High = 1.6;
let Med_High = 2.0;
let BodyBuilder = 2.7;

Calculate.addEventListener("click", function () {
  let kilogramValue = parseFloat(Kilogram.value);

  if (Kilogram.value == 0) {
    alert("Enter your weight");
  }
  if (proteinPreference.value === "") {
    alert("Select your ideal protein intake");
  }
  if (proteinPreference.value === "Min") {
    var Formula = kilogramValue * Min;
  } else if (proteinPreference.value === "Mod") {
    var Formula = kilogramValue * Mod;
  } else if (proteinPreference.value === "High") {
    var Formula = kilogramValue * High;
  } else if (proteinPreference.value === "Med High") {
    var Formula = kilogramValue * Med_High;
  } else if (proteinPreference.value === "BodyBuilder") {
    var Formula = kilogramValue * BodyBuilder;
  }

  Result.innerHTML = `Your suggested protein intake per day is ${Formula.toFixed()} grams💪🏼`;
  Kilogram.value = '';
});