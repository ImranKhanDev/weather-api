const API_KEY = `856a9426a3fbf3b034c23b2d95abf0f1`;

const searchTemperature = () => {
      const city = document.getElementById('city-name').value;
      city.innerText = '';
      console.log(city)

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      
      console.log(url);
      fetch(url)
            .then(res => res.json())
            .then(data=>displayTemperature(data))
             

}
const setInnerText = (id, text) => {
      document.getElementById(id).innerText = text;
      // console.log(text)
      
}
const displayTemperature = temperature => {
      console.log(temperature)
      
      setInnerText('city', temperature.name);
      setInnerText('temp', temperature.main.temp)
      setInnerText('condition', temperature.weather[0].main)
      // setInnerText('')
      //  console.log(temperature);
      // set weather icon
      const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

      const imgIcon = document.getElementById('weather-img');

      imgIcon.setAttribute('src', url);
      
}