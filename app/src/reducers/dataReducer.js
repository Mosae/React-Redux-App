const initialState = {
	totalCases: '1234',
	totalRecoveries: '123',
	isFetching: false,
	error: '',
};

export const dataReducer = (state = initialState, action) => {
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
