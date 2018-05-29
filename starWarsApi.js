const dropdown = document.querySelector (".dropdown");
const filmSelect = document.querySelector ("select");
const subCategoryForm = document.querySelector ("fieldset");
const baseURL = "https://swapi.co/api";
const subCategoryValue = document.getElementsByName ("subCategory");
let url;



subCategoryForm.style.display = "none";

filmSelect.addEventListener("change", filmChoice);

function filmChoice (e) {
    subCategoryForm.style.display = "block"
    e.preventDefault();
    url = baseURL + "/films/" + filmSelect.value;
    fetch(url)
    .then(function(result) {
        return result.json();
    })  .then(function(json) {
        displaySubcategory(json);
        console.log(json);
        return json;
    });
}
subCategoryForm.addEventListener("change", displaySubcategory);

function displaySubcategory(json) {
    for(let v = 0; v < subCategoryValue.length; v ++) {
        if (subCategoryValue[v].checked){
            console.log(subCategoryValue[v].value);
            console.log(json.characters);
            // console.log(json.subCategoryValue[v].value) 
            break;
        } 
        }
    }
