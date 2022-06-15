//level1
function fullName() {
    console.log("Tanya Singh");
}
fullName();
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("Tanya", "Singh");

function add(a, b) {
    return a + b;
}
add(3, 9);

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(8, 9);

perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(2, 3);

volumeOfRectangularPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectangularPrism(1, 2, 3);

AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(3);

circumferenceOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumferenceOfCircle(22);

density = (mass, volume) => {
    return mass * volume;
}
density(2, 3);

speed = (dis, t) => {
    return dis / t
}
speed(8, 2);

weight = (mass, gravity) => {
    return mass * gravity;
}
weight(3, 5);

celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(9);

bmii = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
bmii(84,6);

checkSeasons = (month) => {
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
            console.log("invalid")
    }
}
checkSeasons("july");
//level2

swap = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y);
}
swap(1, 2);

reverse = (arr) => {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.unshift(arr[i]);
    }
    console.log(arr1);
}
reverse([6, 3, 6]);

capital = (arr) => {
    let arr_1 = [];
    arr.forEach(function (A) {
        arr_1.push(A.toUpperCase());
    })
    return arr_1;
}
capital(["Tanya", "Singh"]);

remove = (index) => {
    let n = ["Tanya", "Singh"]
    n.splice(index);
    return n;
}
remove(1);

sumOfNumber = (...args) => {
    let s = 0;
    args.forEach(function (arg) {
        s += arg
    })
    return s;
}
sumOfNumber(7, 3, 37, 2);

sumOfEven = (...args) => {
    let s1 = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            s1 += arg;
        }
    })
    return s1;
}
sumOfEven(9, 24, 5, 48)

sumOfOdd = (...args) => {
    let s2 = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            s2 += arg;
        }
    })
    return s2;
}
sumOfOdd(9, 3, 4, 2);

evenAndOdds = (n) => {
    let o = 0;
    let e = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            e++;
        } else if (i % 2 !== 0) {
            o++;
        }
    }
    return `the number of odds are ${o} \n the number of even are ${e}`
}
evenAndOdds(20);

generateRandomUserIp = () => {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    let d = Math.floor(Math.random() * 255);
    return `IP: ${a}:${b}:${c}:${d}`
}
generateRandomUserIp();

generateUserId = () => {
    let ss = "0123456789ABefenbfheghjPQRSTUVWXTZabcdefejkfhjknghiklmnopqrstuvwxyz";
    let u_id = "";
    for (let i = 0; i <= 7; i++) {
        u_id += ss[Math.floor(Math.random() * ss.length)];
    }
    return u_id;
}
generateUserId();

//level3

userIdGeneratedByUser = () => {
    let ss = "0123456789ABCDEFGenfjhrefrjTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let n = Number(prompt("no of id to generate: "));
    let ch = Number(prompt("no of characters in id: "));
    let i_id = [];
    for (i = 0; i < n; i++) {
        i_id[i] = "";
        for (k = 0; k < ch; k++) {
            i_id[i] += ss[Math.floor(Math.random() * ss.length)];
        }
    }
    console.log(i_id);
    i_id.forEach(function (i) {
        console.log(i);
    })
}
userIdGeneratedByUser();

arrayOfHexaColors = () => {
    let ss = "0123456789ABCDEF";
    let ar = [];
    for (let x = 0; x < 3; x++) {
        ar[x] = "#";
        for (let i = 0; i < 6; i++) {
            ar[x] = ar[x] + ss[Math.floor(Math.random() * ss.length)];
        }
    }

    return ar;
}
arrayOfHexaColors();

shuffleArray = (ar) => {
    let ar_1 = [];
    for (let i = 0; i < ar.length; i++) {
        let rand = Math.floor(Math.random() * ar.length - 1);
        if (ar.indexOf(rand) !== -1 && !ar_1.includes(ar[rand])) {
            ar_1.push(ar[rand]);
        }
    }
    return ar_1;
}
shuffleArray([7, 9, 2]);

factorial = (n) => {
    let factorial = 1;
    for (let i = n; i > 0; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
factorial(2);

isEmpty = (s) => {
    if (s === undefined) {
        return `It is empty`
    } else {
        return `It is not empty`
    }
}
isEmpty();

sumOfArrayEle = (arr) => {
    let s = 0;
    arr.forEach(function (a) {
        if (typeof a === "number") {
            s += a
        } else {
            s = `It is a string`;
        }
    })
    return s;
}
sumOfArrayEle([5, 6, 1]);

average = (arr) => {
    let s = 0;
    arr.forEach(function (i) {
        if (typeof i === "number") {
            s += i;
            s = arr.length / s;
        } else {
            s = `It is a string`;
        }
    })
    return s;
}
average([6, 3, 1]);

isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0 && n > 1) {
            return `${n} is a prime number`;
        } else {
            return `not prime number`;
        }
    }
}
isPrime(2);


