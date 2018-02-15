import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from './FilterLink';

const Footer = (props) => {

		const uncompleted = props.todos.filter(todo => !todo.completed).length;
		const completed = props.todos.filter(todo => todo.completed).length;

		return (
			<div className="App-footer">
				<div className="count-pending">
					<span>{uncompleted} items left</span>
				</div>
				<FilterLink
					selectedFilter={props.selectedFilter}
				/>
				<div className="clear-completed">
					<a
						onClick={props.removeTodoCompletedList}
					>Clear completed ({completed})</a>
				</div>
			</div>
		)
}

Footer.propTypes = {
	selectedFilter: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired,
	removeTodoCompletedList: PropTypes.func.isRequired,
}

export default Footer
