import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = (props) => {

	return (
		<div className="filter-link">
			<a onClick={() => props.selectedFilter('ALL')}
			>All</a>
			<a onClick={() => props.selectedFilter('PENDING')}
			>Active</a>
			<a onClick={() => props.selectedFilter('COMPLETED')}
			>Completed</a>
		</div>
	)
}

FilterLink.propTypes = {
	selectedFilter: PropTypes.func.isRequired
}

export default FilterLink
