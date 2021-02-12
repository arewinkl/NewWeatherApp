




$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&APPID=0c8d761ec4efbbb0c661c09fe9727d66",
    function(data) {
    console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        var temp = Math.floor(data.main.temp);
        var city = data.name;
        var weather=data.weather[0].description;
        var wind = data.wind.speed;

        $('.icon').attr( 'src', icon);
        $('.city').append(city);
        $('.weather').append(weather);
        $('.temp').append(temp);
        $('.wind').append(wind)

    }

   
);
$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=imperial&APPID=0c8d761ec4efbbb0c661c09fe9727d66",
    function(data) {
    console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        var temp = Math.floor(data.main.temp);
        var city = data.name;
        var weather=data.weather[0].description;
        var wind = data.wind.speed;

        $('.img').attr( 'src', icon);
        $('.town').append(city);
        $('.weath').append(weather);
        $('.temperat').append(temp);
        $('.speed').append(wind)

    }
);

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID=0c8d761ec4efbbb0c661c09fe9727d66",
    function(data) {
    console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        var temp = Math.floor(data.main.temp);
        var city = data.name;
        var weather=data.weather[0].description;
        var wind = data.wind.speed;

        $('.oneimg').attr( 'src', icon);
        $('.onetown').append(city);
        $('.oneweath').append(weather);
        $('.onetemperat').append(temp);
        $('.onespeed').append(wind)

    }
);

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Paris&units=imperial&APPID=0c8d761ec4efbbb0c661c09fe9727d66",
    function(data) {
    console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        var temp = Math.floor(data.main.temp);
        var city = data.name;
        var weather=data.weather[0].description;
        var wind = data.wind.speed;

        $('.twoimg').attr( 'src', icon);
        $('.twotown').append(city);
        $('.twoweath').append(weather);
        $('.twotemperat').append(temp);
        $('.twospeed').append(wind)

    }
);

$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&APPID=0c8d761ec4efbbb0c661c09fe9727d66",
    function(data) {
    console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(icon);
        var temp = Math.floor(data.main.temp);
        var city = data.name;
        var weather=data.weather[0].description;
        var wind = data.wind.speed;

        $('.threeimg').attr( 'src', icon);
        $('.threetown').append(city);
        $('.threeweath').append(weather);
        $('.threetemperat').append(temp);
        $('.threespeed').append(wind)

    }
);