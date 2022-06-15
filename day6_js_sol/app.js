//level1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let x = 0;
while (x < 10) {
    x++;
    console.log(x);
}
let y = 0;
do {
    y++;
    console.log(y)
} while (y < 10)

for (let i = 10; i <= 10; i--) {
    console.log(i);
}
let z = 10;
while (z > 0) {
    z--;
    console.log(z);
}
let i = 10;
do {
    i--;
    console.log(i)
} while (i > 0)
let n = Number(prompt("enter number: "));
let str = "";
for (let i = 0; i < n; i++) {
    str += "#";
    console.log(str)
}
let n2 = Number(prompt("enter number: "));
for (let i = 0; i <= n2; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}


for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


for (let i = 0; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0 && i > 1) {
            console.log(i);
        }
    }
}


let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

let e = 0;
let o = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        e += i;
    } else if (i % 2 > 0) {
        o += i
    }
}
console.log(`the sum of all even number is ${e}. the sum of all odd numbers is ${o}`)

let arr = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        arr[0] += i;
    } else if (i % 2 > 0) {
        arr[1] += i;
    }
}
console.log(arr);

let random_n = [];
for (let i = 5; random_n.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (random_n.indexOf(random) === -1) {
        random_n.push(random);
    }
}
console.log(random_n);

let ss = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let random_ss = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * ss.length);
    random_ss += ss[random];
}
console.log(random_ss);
//level2

let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let country_land = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("LAND")) {
        country_land.push(countries[i]);
    } else {
        console.log("All these countries are without land");
    }
}

let country_ia = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("IA")) {
        country_ia.push(countries[i]);
    } else {
        console.log("All these countries are without ia");
    }
}

let country_length = [];
for (let i = 0; i < countries.length; i++) {
    country_length.push(countries[i].length);
}
console.log(country_length);
let mx = Math.max.apply(null, country_length);
console.log(countries[country_length.indexOf(mx)]);


let country_fiveChar = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countr_fiveChar.push(countries[i]);
    }
}
console.log(country_fiveChar);

let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
}
console.log(webTechsLength);
let mxx = Math.max.apply(null, webTechsLength);
console.log(mxx)
console.log(webTechs[webTechsLength.indexOf(mxx)]);

let new_web = [];
for (let i = 0; i < webTechs.length; i++) {
    new_web.push([webTechs[i], webTechs[i].length])
}
console.log(new_web)

let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 0);
}
console.log(mern)

let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i])
}
for (let tech of techs) {
    console.log(tech);
}

let ff = ['banana', 'orange', 'mango', 'lemon'];
for (let i = ff.length - 1; i >= 0; i--) {
    console.log(ff[i]);
}