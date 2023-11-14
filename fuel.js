const priceGas = 5.82;
const priceAlcohol = 3.49;
const kmLiters = 45;
const kmDistance = 21;
const kindOfUel = "Diesel";

const litersConsumed = kmDistance / kmLiters;

if (kindOfUel === "Gasoline") {
  let amountSpent = litersConsumed * priceGas;
  amountSpent = parseFloat(amountSpent.toFixed(2));
  console.log(
    "The fuel is " +
      kindOfUel +
      " and the amount spent to travel " +
      kmDistance +
      "km is R$" +
      amountSpent
  );
} else if (kindOfUel === "Alcohol") {
  let amountSpent = litersConsumed * priceAlcohol;
  amountSpent = parseFloat(amountSpent.toFixed(2));
  console.log(
    "The fuel is " +
      kindOfUel +
      " and the amount spent to travel " +
      kmDistance +
      "km is R$" +
      amountSpent
  );
} else {
  console.log("Invalid Value: Enter Gasoline or Alcohol");
}
