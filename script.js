let firstName = "jonas";
console.log("firstName" + ":", firstName);

let country = "Portugal";
let continent = "Europe";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

//operator
const ageNow = 2037;
const ageJonas = ageNow - 1991;
const ageSara = ageNow - 2018;
console.log(ageJonas, ageSara);
console.log("age " + ageJonas * 2, ageSara / 2, 2 ** 3);
//3**2=2*2*2;

let x = 10 + 5; //15
x += 10; //here x=x+10
console.log(x);

//asignment
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("BMIMark" + " " + BMIMark);
console.log("BMIJohn" + " " + BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
