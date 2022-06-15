let div = document.querySelector("div")
const url = 'https://restcountries.com/v3.1/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data;
        countries.forEach(country => {
            if (country.name.toLowerCase() === "India") {
                let box = document.createElement("div")
                box.textContent = country.name
                box.style.width = "150px";
                box.style.height = "120px";
                box.style.backgroundColor = "green";
                box.style.margin = "8px";
                div.appendChild(box);
            }
            let box = document.createElement("div")
            box.textContent = country.name
            box.style.width = "150px";
            box.style.height = "120px";
            box.style.backgroundColor = "aqua";
            box.style.margin = "8px";
            div.appendChild(box);
        })

    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await');
fetchData();