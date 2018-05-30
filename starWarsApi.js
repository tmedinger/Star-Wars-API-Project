const filmSelect = document.querySelector ("select");
const subCategoryForm = document.querySelector ("fieldset");
const baseURL = "https://swapi.co/api";
const subCategoryValue = document.getElementsByName ("subCategory");
const resultsTable = document.querySelector ("table");
let url;
let filmData = []


subCategoryForm.style.display = "none";

filmSelect.addEventListener("change", filmChoice);

function filmChoice (e) {
    subCategoryForm.style.display = "block"
    e.preventDefault();
    url = baseURL + "/films/" + filmSelect.value;
    fetch(url)
    .then(function(response) {
        return response.json();
    })  .then(function(json) {
        filmData = json;
        console.log(filmData);
    }); 
} 

subCategoryForm.addEventListener("change", displaySubcategory);

function displaySubcategory() {
    resultsTable.style.display = "block"
    while (resultsTable.firstChild) {
        resultsTable.removeChild(resultsTable.firstChild);
    }
    for(let v = 0; v < subCategoryValue.length; v ++) {
        if (subCategoryValue[v].checked){
            let subInfo = subCategoryValue[v].value;
            for (let x = 0; x < filmData[subInfo].length; x++) {
                let cell = document.createElement("td");
                let row = document.createElement("tr");
                let link = document.createElement("a");
                let br = document.createElement("br")
                let info = filmData[subInfo][x];
                console.log(info)
                if(x % 5 == 0) {
                    resultsTable.appendChild(row);
                    resultsTable.appendChild(br);
                    resultsTable.appendChild(cell);
                    cell.appendChild(link);
                    link.href = info;
                    link.textContent = info;
                }   else {
                    resultsTable.appendChild(cell)
                    cell.appendChild(link);
                    link.href = info;
                    link.textContent = info;
                }
            }
            break;
        } 
        }
    }
