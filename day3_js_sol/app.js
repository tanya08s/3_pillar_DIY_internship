//level1
let fName = "abc";
let lName = "def";
let country = "usa";
let city = "abd";
let age = 19;
let isMarried = true;
let year = 2022;
let a1 = [fName, lName, country, city, age, isMarried, year, name, s, conc, techComp, sent, text, salaries, totalAnnualIncome, sentence];
a1.forEach(i => {
    console.log(typeof(i));
});
console.log("10" === 10)
console.log(parseInt(9.8) === 10);
let truthy = [true, 1, "victor"];
let falsy = [false,undefined,null]

//level 2

let base = Number(prompt("enter base"));
let height = Number(prompt("enter height"));
let area = 0.5 * base * height;
console.log(`area is ${area}`);
let A = Number(prompt("enter side A"));
let B = Number(prompt("enter side B"));
let C = Number(prompt("enter side C"));
let peri = A + B + C;
console.log(`the perimeter is ${peri}`)
let l = Number(prompt("enter length"));
let w = Number(prompt("enter width"));
let area_rect = l * w;
let peri_rect = 2 * (l + w);
console.log(`the area is ${area_rect} , the perimeter is ${peri_rect}`)
const pi = 3.14
let r = Number(prompt("enter radius: "));
let area_c = pi * r * r;
let circumference = 2 * pi * r;
console.log(`area of the circle is ${area_c} , the circumference is ${circumference}`)
let hrs = Number(prompt("enter hours"));
let rate = Number(prompt("enter rate"));
let pay = hrs * rate;
console.log(`your pay is ${pay}`)
let aa = Number(prompt("age: "));
if (aa > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${aa}, you will be allowed to drive after ${18 - aa} years.`)
}
const f_Name = "Tanya"
const l_Name = "Singh"
f_Name.length > l_Name.length ? console.log(`your first Name is longer than your family name`) : console.log(`your last name is longer than your name`);

//level3
let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`year:${date.getMonth()}`);
console.log(`year:${date.getDate()}`);
console.log(`year:${date.getDay()}`);
console.log(`year:${date.getHours()}`)
console.log(`year:${date.getMinutes()}`)
console.log(`year:${date.getSeconds()}`);
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);
