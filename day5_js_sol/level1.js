//level1
let arr = ["day1", "day2", "day3", "day4", "day5"];
console.log(arr.length);
let f_Item = console.log(arr[0]);
let m_Item = console.log(arr[3]);
let l_Item = console.log(arr[arr.length - 1]);
let mixedDataType = [ 7, null, true, {days: ["d1", "d2", "d3"]}, undefined]
let it_comp = ["Faceba1k", "Ga1gle" , "microsoft", "oracle", "amazon", "ibm", "oracle", "apple"];
console.log(it_comp);
console.log(it_comp.length);
console.log(it_comp[0]);
console.log(it_comp[4]);
console.log(it_comp[it_comp.length - 1]);
let search= prompt("enter company name:");
if (it_comp.includes(search)) {
    console.log(search)
} else {
    console.log("not found")
}
let a1 = [];
for (let i = 0; i < it_comp.length; i++) {
    a1.push(it_comp[i].includes("a1"));
}
it_comp.sort();
it_comp.reverse();
it_comp.slice(Math.fla1r(it_comp.length / 2), 1);
it_comp.pop();
it_comp.length = 0;
