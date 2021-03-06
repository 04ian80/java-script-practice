"use strict";
//1 make a string out of an array
const fruits = ["apple", "banana", "orange"];
const fruitsString = fruits.join("-"); //๋ด๊ฐ ํผ๊ฑฐ: fruits.toString();
console.log(fruitsString);

//2 make an array out of a string
const fruit = "๐, ๐ฅ, ๐, ๐";
const fruitArray = fruit.split(","); //fruit.split("")๋ฅผ ํ ๋ ์๋ฐ์ดํ ๊ฐ์ด๋ฐ์ ์คํ์ด์ค๋ฅผ ์ค์ผ ํ๋ค.
console.log(fruitArray);

//3 make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const result2 = array.reverse();
console.log(result2);

//4 make new array without the first two elements
const array2 = [1, 2, 3, 4, 5];
const result3 = array2.slice(2, 5);
console.log(result3);
console.log(array2);

//๋ณด๊ธฐ
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

array;
// 5 find a student with the score 90
const findNinety = students.find((ninety) => ninety.score === 90);
console.log(findNinety); // find ๋ฉ์๋๋ 90์ ์ธ ์์ ์ค ์ฒซ๋ฒ์งธ๋ง ์ถ๋ ฅ.
//๋ด๊ฐ ์ด ๋ฉ์๋๋ filter. ์๋ํ๋ฉด ์ฌ๋ฌ๊ฐ๋ฅผ ์ถ์ถํด๋ด๊ณ  ์ถ์๋๋ find๋ฅผ ์ฐ๋ฉด ์๋จ.

// 6 make an array of enrolled students
const result = students.filter((student) => student.enrolled);
console.log(result); //enrolled๋ง ์จ๋ enrolled๊ฐ ๋์๋์ง ์๋์๋์ง true ์ false๋ก ๊ตฌ๋ถ ํ  ์ ์๊ธฐ ๋๋ฌธ์ ๊ตณ์ด ===true๋ฅผ ์ฐ์ง ์์๋ ๋จ.

// 7 make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const findScore = students.map((student) => student.score);
console.log(findScore); //๊ฐ์ฒด ๋ฐฐ์ด์์ ์์ฑ ๊ฐ์ ๋ฐฐ์ด๋ก ์ถ์ถ

// 8 check if there is a student with the score lower than 50
const ifLowerThan50 = students.some((student) => student.score < 50);
console.log(ifLowerThan50); //๋ฐฐ์ด์์ ํน์  ๊ฐ์ฒด ์ฐพ๊ธฐ.

// 9 compute students' average score
const result4 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result4 / students.length);

function average(findScore) {
  let sum = 0;
  for (let i = 0; i < findScore.length; i++) {
    sum += findScore[i];
  }
  return sum / findScore.length;
}
console.log(average(findScore));

// 10 make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const stringScore = findScore.join();
console.log(stringScore);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const result5 = findScore.sort((a, b) => a - b).join();
console.log(result5);
