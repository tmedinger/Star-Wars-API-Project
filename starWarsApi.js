const filmSelect = document.querySelector ("select");
const subCategoryForm = document.querySelector ("fieldset");
const baseURL = "https://swapi.co/api";
const subCategoryValue = document.getElementsByName ("subCategory");
let url;
var filmData;


subCategoryForm.style.display = "none";

filmSelect.addEventListener("change", filmChoice);

function filmChoice (e) {
    subCategoryForm.style.display = "block"
    e.preventDefault();
    url = baseURL + "/films/" + filmSelect.value;
    fetch(url)
    .then(function(response) {
        filmData = response.json();
        return filmData;
    })  .then(function(filmData) {
        // displaySubcategory(filmData);
        console.log(filmData);
        return filmData;
    }); 
} 

subCategoryForm.addEventListener("change", displaySubcategory);

function displaySubcategory(filmData) {
    for(let v = 0; v < subCategoryValue.length; v ++) {
        if (subCategoryValue[v].checked){
            console.log(subCategoryValue[v].value);
            console.log(filmData.characters);
            // console.log(json.subCategoryValue[v].value) 
            break;
        } 
        }
    }