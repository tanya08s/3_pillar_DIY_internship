// level 1
let challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.slice(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
let s = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
console.log(s.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charCodeAt("J"));
console.log(challenge.charAt(15));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let s1 = "You cannot end a sentence with because because because is a conjunction";
console.log(s1.indexOf("because"))
console.log(s1.lastIndexOf("because"));
console.log(s1.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));
console.log(challenge.match("a"));
let conc = "30 Days Of "
console.log(conc.concat("JavaScript"));
console.log(challenge.repeat(2));

//level 2
let t = "There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(t);
let text = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(text.search("love"));

//level 3
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence1.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));
let text2 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let sal = text2.match(/\d+/g);
let totalAnnualIncome = 0;
sal.forEach(i => {
    totalAnnualIncome += Number(i);
})
console.log(totalAnnualIncome);
let z = "Love is the best thing in this world.Some found their love and some are still looking for their love";
let p = /love/gi
console.log(z.match(p).length);
let x = 'You cannot end a sentence with because because because is a conjunction'
let p1 = /because/gi
console.log(x.match(p1).length);

