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
if (BMIMark > BMIJohn) {
  console.log(`mARKS bmi(${BMIMark}) is higher tham john (${BMIJohn})`);
} else {
  console.log(`john bmi(${BMIJohn}) is higher tham mark (${BMIMark})`);
}

//if else statement
const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;
const kolasScore1 = 88;
const kolasScore2 = 91;
const kolasScore3 = 110;
const scoreDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const scoreKolas = (kolasScore1 + kolasScore2 + kolasScore3) / 3;
console.log(scoreDolphin, scoreKolas);
if (scoreDolphin > scoreKolas) {
  console.log("Dolphins win the trophy");
} else if (scoreKolas > scoreDolphin) {
  console.log("Koalas win the trophy");
} else if (scoreDolphin === scoreKolas) {
  console.log("Both win the trophy");
}
