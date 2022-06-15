let body = document.querySelector("body")
let div = document.querySelector("div")
for (let x = 0; x <= 100; x++) {
    if (x % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = x;
        box.style.width = "170px";
        box.style.height = "100px";
        box.style.backgroundColor = "green";
        box.style.margin = "6px";
        div.appendChild(box);
    } else {
        let box = document.createElement("div")
        box.textContent = x;
        box.style.width = "170px";
        box.style.height = "100px";
        box.style.backgroundColor = "yellow";
        box.style.margin = "6px";
        div.appendChild(box);
    }
}