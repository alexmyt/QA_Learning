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

/**
 * Input from console
 *  
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Input your age: ", (answer) => {
  rl.close();
  checkAge(answer);
});
*/

console.log('\n-----\nFunction checkAge testing\n-----\n');

checkAge(0);
checkAge(17);
checkAge(18);
checkAge(59);
checkAge(60);
checkAge(61);
checkAge(.35);
checkAge('35');
checkAge('.35');
checkAge('0');
checkAge('-1');
checkAge('.5e2');
checkAge(1e1000);
checkAge('0xff');
checkAge('0b111');
checkAge('');
checkAge(' ');
checkAge("c.17");
checkAge(true);
checkAge(false);
checkAge(undefined);
checkAge({});
checkAge([]);
checkAge([1]);

function checkAge(age_1, age_2 = 18, age_3 = 60) {

  for (let i=0; i < arguments.length; i++){
    if (isNaN(arguments[i]) || isNaN(parseFloat(arguments[i])) || typeof arguments[i] === 'object'){
      console.log(`Argument age_${i+1} must be a number, not ${typeof arguments[i]}. Value passed: ${arguments[i]}`);
      return;
    }
  }

  if (age_1 < age_2) {
    console.log(age_1, `You don’t have access cause your age is ${age_1} It’s less then ${age_2}`);
  } else if (age_1 >= age_2 && age_1 < age_3) {
    console.log(age_1, "Welcome !");
  } else if (age_1 > age_3) {
    console.log(age_1, "Keep calm and look Culture channel");
  } else {
    console.log(age_1, "Technical work");
  }

}