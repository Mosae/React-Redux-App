const initialState = {
	totalCases: '1234',
	totalRecoveries: '123',
	isFetching: false,
	error: '',
};
const dataReducer = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {
		case 'FETCH_CASES':
			return {
				...state,
				isFetching: true,
			};
		default:
			return state;
	}
};

export default dataReducer;
