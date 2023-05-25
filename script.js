const getWeather=(city)=>{ 
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b75ced1511msh9c551f30cb73c24p10a6d3jsn560f2f07826d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
	cityName.innerHTML = city
async function go() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result)


        
		temp.innerHTML=  result.temp
		humidity.innerHTML = result.humidity
		wind_speed.innerHTML = result.wind_speed
		
		}

	catch (error) {
		console.error(error);
	}

} go();

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Nagpur")