let weather={
    "apikey":"80ff3b5c14ac8bd69091ad220842ece6",
fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "&units=metric&appid=" 
     + this.apikey
    ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
        // .catch((error)=> console.log('error'));
},

displayWeather: function(data){
    const { name  } = data;
    const { icon, description } = data.weather[0];
    const {  humidity,temp_min,temp_max,temp } = data.main;
    const { speed }=data.wind;

    const roundedTempMin=temp_min.toFixed(1);
    const roundedTempMax=temp_max.toFixed(1);
    const roundedTemp=temp.toFixed(1);

    console.log(name,icon,description,humidity,speed,temp_min,temp_max,temp);
    document.querySelector(".mintemp").innerHTML =roundedTempMin + " °C";
    document.querySelector(".maxtemp").innerHTML =roundedTempMax+ " °C";
    document.querySelector(".city").innerHTML = "Weather in" + " "+ name ;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerHTML=roundedTemp + " °C";
    document.querySelector(".humidity").innerHTML="Humidity: " + humidity+ "%";
    document.querySelector(".wind").innerHTML="Wind Speed: "+ speed+" km/h";

},
search: function() {
    this.fetchWeather(document.querySelector('.search-bar').value);
}
};


document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
       weather.search();  
    }
});



// document.querySelector(".search-bar").addEventListener('keyup', function(event) {
//     var inputValue = event.target.value;

//     if(inputValue ===  '') {
//         alert('Please enter a valid city');
//     }
// });

// input=document.querySelector(".search-bar");
// input.addEventListener("click",(e)=>{
//     if(input.value==""){
//         alert("please enter city name");
//     }
//     else{
//         weather.fetchWeather();
//     }
// });



