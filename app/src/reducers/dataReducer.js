const initialState = {
	totalCases: '',
	isFetching: false,
	error: '',
};
const dataReducer = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {
		case 'FETCH_CASES_START':
			return {
				...state,
				isFetching: true,
			};
		case 'FETCH_CASES_SUCCESS':
			return {
				...state,
				totalCases: action.payload,
				error: '',
			};
		case 'FETCH_CASES_FAILURE':
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default dataReducer;
