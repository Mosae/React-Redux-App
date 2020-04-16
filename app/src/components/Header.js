import React, { useEffect } from 'react';

import { fetchData } from '../actions/dataActions';

const MainHeader = (props) => {
	console.log(props);

	useEffect(() => {
		props.fetchData();
	}, []);

	return (
		<div>
			<h1>Rochester MN, Covid-19 Stats</h1>
		</div>
	);
};

export default MainHeader;
