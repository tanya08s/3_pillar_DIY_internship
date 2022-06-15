//level1
let age = Number(prompt("age:"));
if (age > 18) {
    console.log("you are old enough to drive")
} else {
    console.log(`you are left with ${18-age} years to drive`)
}
let your_age = Number(prompt("age:"));
if (age > your_age) {
    console.log("I'm older than you with ${age - your_age}")
} else {
    console.log(`you are ${your_age - age} years older than me`)
}
let a = Number(prompt("no:"));
let b = Number(prompt("no:"));
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}
let n = Number(prompt("enter number: "))
if (n % 2 === 0) {
    console.log(`${n} is an even number`)
} else if (n % 2 !== 0) {
    console.log(`${n} is an odd number`)
}

//level2
let marks = Number(prompt("enter marks: "));
switch (true) {
    case marks > 80:
        console.log("A");
        break;
    case marks > 70:
        console.log("B");
        break;
    case marks > 60:
        console.log("C");
        break;
    case marks > 50:
        console.log("D");
        break;
    case (marks < 50):
        console.log("F");
        break;
    default:
        console.log("no marks assigned")
}
let month = prompt("enter month: ");
switch (month) {
    case "september":
    case "october":
    case "November":
        console.log("Autumn");
        break;
    case "december":
    case "january":
    case "febuary":
        console.log("Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("Summer");
        break;
    default:
        console.log("invalid Month")
}

//level3
let m = prompt("enter month: ");
switch (m) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${m} has 31 days`)
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${m} has 30 days`)
        break;
    case "febuary":
        console.log(`${m} has 29 days`)
        break;
    default:
        console.log("invalid month");
}