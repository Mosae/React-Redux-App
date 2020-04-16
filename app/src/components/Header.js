import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions/dataActions';

const Header = (props) => {
	console.log('header props', props);

	useEffect(() => {
		props.fetchData();
	}, []);

	return (
		<div>
			<h1> Stats</h1>
			{props.totalCases && <h3>"{props.totalCases}"</h3>}
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log('mapTS: ', state);
	return {
		totalCases: state.totalCases,
		isFetching: state.totalCases.isFetching,
	};
};

export default connect(mapStateToProps, { fetchData })(Header);
