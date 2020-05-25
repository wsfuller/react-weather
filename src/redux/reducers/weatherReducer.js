const INITIAL_STATE = {
	weather: {
		coord: {
			lat: null,
			lon: null
		},
		main: {
			temp: 0,
			humidity: 0
		},
		sys: {
			sunrise: 0,
			sunset: 0
		},
		weather: [{ icon: null, main: '', id: 0 }],
		clouds: { all: 0 },
		visibility: 0,
		wind: {
			deg: 0,
			speed: 0
		}
	},
	loading: true
}

export default function reducer(
	state = INITIAL_STATE,
	action
) {
	switch (action.type) {
		case 'FETCHING_WEATHER': {
			return {
				...state,
				loading: true
			};
		}
		case 'FETCHED_WEATHER_SUCCESSFUL': {
			return {
				...state,
				weather: action.payload,
				loading: false
			};
		}
		case 'FETCHED_WEATHER_REJECTED': {
			return {
				...state,
				weather: action.payload,
				loading: false
			};
		}
		default: {
			return {...state};
		}
			
	}
}