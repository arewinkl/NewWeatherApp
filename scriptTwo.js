var cityInput = document.querySelector("#city-text");
var weatherForm = document.querySelector("#weather-form");
var cityList = document.querySelector("#city-list");
var cityCountSpan = document.querySelector("#city-count");

var citiesInStorage = localStorage.getItem("city");
var cities = [];

//JSON.parse built in function to convert a string, written in JSON format, into native JavaScript objects://
if( citiesInStorage !== null){
    cities = JSON.parse(citiesInStorage)
}

//? Writes a render function that looks at state and displays items on the screen//
function renderList(){
    cityList.innerHTML = "";
    for(var i=0; i<cities.length; i++){
        var liTag = document.createElement("li");
        liTag.textContent = cities[i];
        var button = document.createElement("button");
        button.textContent = "clear";
        button.setAttribute("data-idx", i);
        liTag.appendChild(button);
        //this appends the liTag element to the cityList.//
        cityList.appendChild(liTag);
        saveToLocalStorage();
    }
}

//?writes a function that adds a new item to the array, then calls the render function.//

function addItem(e){
    e.preventDefault();
    //.trim() is a function that eliminates leading and trailing spaces.//
    var itemToAdd = cityInput.value.trim();
    if(itemToAdd.length ){
        cities.push(itemToAdd);
    }else{
        alert("Enter a city, and check the weather!");
    }
    cityInput.value = "";
    renderList();
}

//?write and eventListener for when the form is submitted//
weatherForm.addEventListener("submit", addItem)

cityList.addEventListener("click", function(e){
    e.preventDefault();
    if(e.target.matches("button") ){
         //?console log the index value of the list item.//
        var idx = e.target.getAttribute("data-idx");
       //?delete item from array by its index value.//
        cities.splice(idx, 1);
        renderList();
    }
});

function saveToLocalStorage(){
    //stringify() method converts a JavaScript object or value to a JSON string.//
    localStorage.setItem("city", JSON.stringify(cities));
}

