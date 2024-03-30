const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bdbfb257d0mshd59108d283883e1p113c87jsndd29682e95a1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		humidity.innerHTML = response.humidity 
		temp.innerHTML = response.temp 
		wind_speed.innerHTML = response.wind_speed	
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)
})