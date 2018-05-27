const dropdown = document.querySelector (".dropdown");
const filmSelect = document.querySelector ("select");
const form = document.querySelector ("form");
const fieldSet = document.querySelector ("fieldset");

form.style.display = "none";

filmSelect.addEventListener("change", filmChoice);

function filmChoice () {
    form.style.display = "block"
}