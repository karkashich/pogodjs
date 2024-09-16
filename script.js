let weather = {
    apiKey: "16e6d89d1a356ebab71e8feb97dc49c0",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&lang=ru&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("Данные не найдены.");
            throw new Error("Данные не найдены.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
        console.log(weather);
    },


    displayWeather: function (data) {

      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity, feels_like } = data.main;
      const { speed } = data.wind;
    //   const {feels_like} = data.main;
      console.log(1, data);//инфа по городу

      document.querySelector(".city").innerText = "Погода в " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Влажность: " + humidity + "%";
      document.querySelector(".feels_like").innerText = "Ощущается как: " + feels_like + "°C";
      document.querySelector(".wind").innerText = "Скорость ветра: " + speed + " Км/ч";
      document.querySelector(".weather").classList.remove("loading");

      // document.body.style.backgroundImage ="url('https://source.unsplash.com/1920x1080/?" + name + "')";
      document.body.style.backgroundImage = src("back.jpg")
    },

    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },

  };
  

  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
weather.fetchWeather("Северодвинск");