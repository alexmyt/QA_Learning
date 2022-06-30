// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

/** 
 * Output to console stepwise exponentiation to a power of two
 * @param {integer} maxPow  - the power to erection
 * @param {integer} minPow  - thhe power from erection
*/
const printPow = function (maxPow = 10, minPow = 1) {

  // Check params
  maxPow = parseInt(maxPow);
  if (isNaN(maxPow)) return;

  minPow = parseInt(minPow);
  if (isNaN(minPow)) return;

  // Step of erection
  let step = maxPow > 0 ? 1 : -1;

  let i = minPow;
  while (i != maxPow + step) {
    console.log(`${i}: ${Math.pow(2, i)}`);

    i += step;
  }
}

printPow(3);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой 
// строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
//
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться
//  в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)

/**
 * 
 * @param {integer} count 
 * @param {string} smile 
 */
const printSmile = function (count = 5, smile = ':)') {
  count = parseInt(count);
  if (isNaN(count)) return;

  count = Math.abs(count);

  for (let i = 1; i <= count; i++)
    console.log(smile.repeat(i));
}

printSmile();

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль,
// сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

/**
 * 
 * @param {string} word 
 */
function getWordStructure(word) {

  if (typeof word !== 'string') {
    console.log('Not a string: ', word);
    return;
  }

  // use array only for comfortable addition new elements 
  let vowels = String.prototype.concat([
    'аеёийоуэюя',   // russian
    'aeiou',        // english
  ]);
  
  let chars = String.prototype.concat(
    'а-яё',       // russian
    'a-z'         // english
  )

  let vowels_re = new RegExp(`[${vowels}]`,'g');
  let chars_re = new RegExp(`[^${chars}]`,'g');

  let word_lowercaseLetters = word.toLowerCase().replaceAll(chars_re, '');
  let word_consonant = word_lowercaseLetters.replaceAll(vowels_re, '');

  let consonant_count = word_consonant.length;
  let vowels_count = word_lowercaseLetters.length - consonant_count;

  console.log(`Слово "${word}" состоит из  ${vowels_count} гласных и ${consonant_count} согласных букв`)
}

getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');
getWordStructure('СорОка-бЕлобока кашу варила');

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Variant 1

/**
 * 
 * @param {string} word 
 */
function isPalindrom(word){
  
  // verify for argument type
  if (typeof word !== 'string') {
    console.log('Not a string: ', word);
    return;
  }

  // lowercase and very naive cleanup string
  let word_lc = word.toLowerCase().replaceAll(/[\s\.,]/g,'');
  let word_reverse = word_lc.split('').reverse().join('');
  
  return word_lc == word_reverse;

}

// Variant 2: about twice fast as variant 1

/**
 * 
 * @param {string} word 
 */
function isPalindrom2(word){

  // verify for argument type
  if (typeof word !== 'string') {
    console.log('Not a string: ', word);
    return;
  }

  // lowercase and very naive cleanup string
  let word_lc = word.toLowerCase().replaceAll(/[\s\.,]/g,'')

  length = word_lc.length;

  for (let i = 0; i < length /2 ; i++ ){
    if(word_lc[i] != word_lc[length-i-1]) return false;
  }

  return true;

}

console.log(isPalindrom('Abba'));
console.log(isPalindrom('abba'));
console.log(isPalindrom('А роза упала на лапу азора'));
console.log(isPalindrom('A man, a plan, a canal. Panama'));

// prefomance test
for(let i=1; i<100000; i++)
  isPalindrom2('A man, a plan, a canal. Panama')