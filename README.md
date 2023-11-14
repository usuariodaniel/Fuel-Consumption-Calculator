# Fuel Consumption Calculator

This is a simple fuel consumption calculator written in JavaScript. It calculates the amount of fuel consumed and the cost of the fuel based on the type of fuel used (Gasoline or Alcohol) and the distance to be traveled.

## How to Use

1. Define the price of gasoline and alcohol, the distance in kilometers that the car can travel with one liter of fuel, the distance to be traveled, and the type of fuel to be used.

2. The program will then calculate the number of liters of fuel consumed by dividing the distance to be traveled by the distance that can be traveled with one liter of fuel.

3. The program checks the type of fuel used. If it's "Gasoline", it calculates the amount of money spent by multiplying the number of liters consumed by the price of gasoline. If it's "Alcohol", it does the same but with the price of alcohol.

4. If the type of fuel is neither "Gasoline" nor "Alcohol", the program logs an error message.

## How it Works

1. The code starts by defining constants for the price of gasoline, alcohol, the distance in kilometers that the car can travel with one liter of fuel, the distance to be traveled, and the type of fuel to be used.

```javascript
const priceGas = 5.82;
const priceAlcohol = 3.49;
const kmLiters = 45;
const kmDistance = 21;
const kindOfUel = "Diesel";
```

2. It then calculates the number of liters of fuel consumed by dividing the distance to be traveled by the distance that can be traveled with one liter of fuel.

```javascript
const litersConsumed = kmDistance / kmLiters;
```

3. The code then checks the type of fuel used. If it's "Gasoline", it calculates the amount of money spent by multiplying the number of liters consumed by the price of gasoline. If it's "Alcohol", it does the same but with the price of alcohol.

```javascript
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
}
```

4. The `parseFloat(amountSpent.toFixed(2))` part of the code is used to round the amount spent to two decimal places.

5. If the type of fuel is neither "Gasoline" nor "Alcohol", the code logs an error message.

```javascript
else {
 console.log("Invalid Value: Enter Gasoline or Alcohol");
}
```

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge
