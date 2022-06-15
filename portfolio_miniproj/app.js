var arr = ["HTML", "CSS", "JS","REACT","NODE"];
var interval = 1000;
setInterval(again,5000);
function again(){
    arr.forEach(function ani(el, index) {
  setTimeout(function () {
     document.getElementById("demo").innerHTML= el;
  }, index * interval);

});
}
// function myStopFunction() {
//   clearInterval(myInterval);
// }

var arr_1 = ["Motivator", "Programmer", "Motivational speaker"];
var interval = 1000;
setInterval(again_1,3000);
function again_1(){
    arr_1.forEach(function bni(el, index) {
  setTimeout(function () {
     document.getElementById("demo_2").innerHTML= el;
  }, index * interval);

});
}
// const cont = document.querySelector("#demo_3");
// console.log(cont);

var arr_2 = ["./assets/book-svgrepo-com.svg", "./assets/fire-svgrepo-com.svg", "./assets/speaker-svgrepo-com.svg"];
var interval = 1000;
setInterval(again_2,3000);
function again_2(){
    arr_2.forEach(function cni(el, index) {
  setTimeout(function () {
     document.getElementById("demo_3").setAttribute("src",el);
  }, index * interval);

});
}
