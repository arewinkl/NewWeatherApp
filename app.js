
//add some event listeners

const search = document.getElementById("city-text");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
    const currentVal = search.value;
    
    weather.getCurrent(currentVal).then((data) => {
        //calls a ui method//
        ui.populateUI(data);
        //calls savetols which is local storage//
        ui.saveToLS(data);
    });
});

//here is an advent listener for local storage

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLS();
    ui.populateUI(dataSaved);
});


class Fetch {
    async getCurrent(input){
        const myKey = "0c8d761ec4efbbb0c661c09fe9727d66";

        //make a request to the api url//

        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=${myKey}`
        );
        const data = await response.json();
        console.log(data);

        return data;
    }
}

class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
        this.defaultCity = "London"
    }

    populateUI(data) {
            //destructures vars//
            //adds them to the inner HTML//
            var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        this.uiContainer.innerHTML = `

                <p class="card-name">Favorite City: ${data.name}</p>
                <img class="images" src=${icon}></img>
                <p class="weather-con"> Weather conditions: ${data.weather[0].description}</p>
                <p class="temperature-con">Temperature: ${Math.floor(data.main.temp)}</p>
                <p class="weather-con"> High of ${Math.floor(data.main.temp_max)}, Low of ${Math.floor(data.main.temp_min)}</p>
                <p class="weather-con"> Wind speed: ${data.wind.speed}</p>
            

             `;
    }

    clearUI() {
        uiContainer.innerHTML ="";
    }

    saveToLS(data) {
        localStorage.setItem("city", JSON.stringify(data))
    }

    getFromLS() {
        if (localStorage.getItem("city" == null)){
            return this.defaultCity;
        } else {
            this.city = JSON.parse(localStorage.getItem("city"));
        }

        return this.city;
    }

    clearLS() {
        localStorage.clear();
    }
}
const weather = new Fetch();
const ui = new UI();
