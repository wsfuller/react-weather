import React from 'react';
import Paper from 'material-ui/Paper';
import GoogleMapReact from 'google-map-react';
import config from '../helpers/config.js';
import Weather from './Weather.jsx';

export default function SearchResults(props) {
	let { results } = props;
	let center = {
		lat: results.coord.lat,
		lng: results.coord.lon
	};
	return (
		<section className="search-results">
			<Paper className="container">
				<div className="row">
					<div className="col-xs-12">
						<h1 className="section-title">
							Results for: {results.name}
						</h1>
					</div>
					<div className="col-xs-12 col-sm-6">
						<Weather results={results} />
					</div>
					<div className="col-xs-12 col-sm-6">
						<GoogleMapReact
							bootstrapURLKeys={{
								key: config.GOOGLE_MAPS_API_KEY
							}}
							center={center}
							defaultZoom={11}
						/>
					</div>
				</div>
			</Paper>
		</section>
	);
}
