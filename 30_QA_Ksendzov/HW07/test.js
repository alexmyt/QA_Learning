let item_1 = 5;
console.log(item_1);
let item_2 = 3;
console.log(item_2);
let item_3 = item_1 + item_2;
console.log(item_3);
let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5 = item_3;

let item_6 = 15;
let item_6_type = typeof item_6;
console.log(`item_6 == ${item_6} item_6_type == ${item_6_type}`);

let item_7 = item_6.toString();
let item_7_type = typeof item_7;
console.log(`item_7 == ${item_7} item_7_type == ${item_7_type}`);

let age_1 = 30;
let age_2 = 18;
let age_3 = 60;

if (age_1 < age_2) {
  console.log(`You don't have access cause your age is ${age_1} It's less then ${age_2}`);
} else if (age_1 >= age_2 && age_1 < age_3) {
  console.log("Welcome !");
} else if (age_1 > age_3) {
  console.log("Keep calm and look Culture channel");
} else {
  console.log("Technical work");
}

checkAge("17q");
checkAge(18);
checkAge(61);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input your age: ", (answer) => {
  rl.close();
  checkAge(answer);
});


function checkAge(age_1, age_2 = 18, age_3 = 60) {

  if (typeof age_1 !== "number") {
    if (parseInt(age_1) != age_1){
      console.log(`First argument must be a number, not ${typeof age_1}`);
      return;
    } else {
      age_1 = parseInt(age_1);
    }
  }

  if (age_1 < age_2) {
    console.log(`You don’t have access cause your age is ${age_1} It’s less then ${age_2}`);
  } else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !");
  } else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }

}