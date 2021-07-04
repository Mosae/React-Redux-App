import axios from 'axios';

export const FETCH_CASES_FAILURE = 'FETCH_CASES_FAILURE';

// async operation to fetch data

export const fetchData = () => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_CASES_START' });
		axios
			.get('https://api.covid19api.com/summary')
			.then((res) => {
				console.log('Success:', res.data);
				dispatch({
					type: 'FETCH_CASES_SUCCESS',
					payload: res.data.Global.TotalConfirmed,
				});
			})
			.catch((err) => {
				console.log('Failed:', err);
				dispatch({
					type: 'FETCH_CASES_FAILURE',
					payload: ` ${err}`,
				});
			});
	};
};
