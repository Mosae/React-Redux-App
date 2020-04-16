import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions/dataActions';

const MainHeader = (props) => {
	console.log(props);

	useEffect(() => {
		//props.fetchData();
	}, []);

	return (
		<div>
			<h1>Rochester MN, Covid-19 Stats</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log('mapTS: ', state);
	return {};
};

export default connect(mapStateToProps, { fetchData })(MainHeader);
