import axios from 'axios';

export const FETCH_CASES_FAILURE = 'FETCH_CASES_FAILURE';

// async operation to fetch data

export const fetchData = () => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_CASES' });
		axios
			.get('https://api.covid19api.com/summary')
			.then((res) => {
				console.log('Success:', res);
			})
			.catch((err) => {
				console.log('Failed:', err);
			});
	};
};
