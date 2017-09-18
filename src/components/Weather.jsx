import React from 'react';
import MainStat from './MainStat.jsx';
import WeatherIcon from './WeatherIcon.jsx';

export default function Weather(props) {
	const { results } = props;
	const icon = results.weather[0].icon;
	return (
		<div className="weather">
			<div className="row">
				<div className="col-xs-12 col-sm-6 text-center">
					<WeatherIcon results={results} />
				</div>
				<div className="col-xs-12 col-sm-6 text-center">
					<h2 className="weather-title">Currently:</h2>
					<h1 className="weather-temp-current">
						{Math.floor(results.main.temp * 9 / 5 - 459.67)} &#8457;
					</h1>
					<ul className="weather-temp-hi-lows">
						<li>
							High <span>{Math.floor(results.main.temp_max * 9 / 5 - 459.67)}&#8457;</span>
						</li>
						<li>
							Low <span>{Math.floor(results.main.temp_min * 9 / 5 - 459.67)}&#8457;</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-3">
					<MainStat
						title="Humidity"
						value={results.main.humidity}
						maxValue={100}
						unitOfMeasure="%"
					/>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3">
					<MainStat
						title="Visibility"
						value={Math.floor(results.visibility / 1000 / 1.609344)}
						maxValue={50}
						unitOfMeasure="mi"
					/>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3">
					<MainStat title="Clouds" value={results.clouds.all} maxValue={100} unitOfMeasure="%" />
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3">
					<MainStat
						title="Wind"
						value={results.wind.speed}
						maxValue={360}
						unitOfMeasure="mph"
						progressBar={false}
					/>
				</div>
			</div>
		</div>
	);
}
