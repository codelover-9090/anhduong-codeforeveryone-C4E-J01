//https://docs.google.com/document/d/1akWl9Y1IRQEYIn8H9JST0PYD0pjvDj_5iAs-MmDD9oE/edit?fbclid=IwAR1UBr0iZ5qeYpbWHgXRiq7ui3ot5K55MCOXN4gy4UmPoe72VjDJNFsd8Lc

//FUNCTION EXERCISE 
//1.

function calcDogAge(yourpuppysage) {
    let dogYrs = 7*yourpuppysage;
    let output = 'Your doggie is ' + dogYrs + ' years old in dog years'
    console.log(output)
}

calcDogAge(3);
calcDogAge(9);
calcDogAge(10);


//2.
function calcSupply(age, amountPerDay){
    let maxAge = 99;
    let amountConsumed = (amountPerDay * 365) * (maxAge - age);
    let output1 = 'You will need ' + amountConsumed + ' dishes of pizza to last you until the ripe old age of ' + maxAge;
    console.log(output1);
}
  
  calcSupply(19, 1);
  calcSupply(20, 0.3);
  calcSupply(21, 2);


//3.
//a.
let π = 3.14159
function calcCircumference(radius){ 
    let Circumference = radius*2*π;
    let output2 = 'The Circumference is ' + Circumference ;
    console.log(output2);
}
//b.
function calcArea(radius){
    let Area = radius**2*π
    let output3 = 'The Area is ' + Area;
    console.log(output3);
}
calcCircumference(5);
calcArea(7.6);


//4.
function CelsiusToFahrenheit(celsiusValue){
    let conversion1 = celsiusValue * 9 / 5 + 32;
    let output4 = celsiusValue + '°C is ' + conversion1 + '°F' ;
    console.log(output4);
}

function FahrenheitToCelsius(fahrenheitValue){
    let conversion2 = fahrenheitValue - 32 * 5 / 9;
    let output5 = fahrenheitValue + '°F is ' + conversion2 + '°C'
    console.log(output5);
}
CelsiusToFahrenheit(18);
FahrenheitToCelsius(56.7);


