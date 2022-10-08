import React, { useState, useEffect } from "react"; 

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setLoaded(true);
		setForecast(response.data.daily);
	}

	function load() {
		let apiKey = "3743a596ca777c1b75d0b29a0dd4cdfd";
    let latitude = props.coordinates.lat;
    let logitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${logitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
	}

	if (loaded) {
	 return (
     <div className="WeatherForecast">
       <div className="row">
				{forecast.map(function(dailyForecast, index) {
					if (index < 5) {
						return (
						<div className="col" key={index}>
           		<WeatherForecastDay data={dailyForecast} />
         		</div>
					);
					} else {
						return null;
					}
				})}
       </div>
     </div>
   );
	} else {
		load();

		return null;
	}
  
}