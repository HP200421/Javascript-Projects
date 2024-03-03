const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the default behaviour elemnt from triggering
    const height = Number.parseInt(document.getElementById("height").value);
    const weight = Number.parseInt(document.getElementById("weight").value);
    const results = document.getElementById("results")
    console.log("here")
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});

