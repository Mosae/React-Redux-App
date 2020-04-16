import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions/dataActions';

const Header = (props) => {
	useEffect(() => {
		props.fetchData();
	}, []);

	return (
		<div>
			<h1> World Wide Covid-19 Stats</h1>
			Total Cases: {props.totalCases && <h3>"{props.totalCases}"</h3>}
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log('mapTS: ', state);
	return {
		totalCases: state.totalCases,
		isFetching: state.totalCases.isFetching,
		error: state.totalCases.error,
	};
};

export default connect(mapStateToProps, { fetchData })(Header);
