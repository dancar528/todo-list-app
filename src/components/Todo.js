import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput'

const Todo = (props) => {

//console.log(props)
	/*const onDoubleClick = (e) => {
		let i = e.target.value

		console.log(i)
	};*/

	return (
			<li
				className="content-list-item"
				style={{
					textDecoration: props.completed ? 'line-through' : 'none'
				}}
			>
				<input
					type="checkbox"
					checked={props.completed}
					onChange={() => props.updateTodoSelectedItem(props.index)}
				/>
				<TextInput
					setTodoEditItem={props.setTodoEditItem}
					name={props.name}
					index={props.index}
					updateTodoNameItem={props.updateTodoNameItem}
					setTodoCancelEditItem={props.setTodoCancelEditItem}
					editing={props.editing}
				/>
				<a
					className="remove-list-item"
					onClick={(e) => { props.removeTodoItem(props.index)}}
				>X</a>
			</li>
	)
}

Todo.propTypes = {
	name: PropTypes.string.isRequired,
	updateTodoSelectedItem: PropTypes.func.isRequired,
	setTodoEditItem: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	updateTodoNameItem: PropTypes.func.isRequired,
	setTodoCancelEditItem: PropTypes.func.isRequired,
	editing: PropTypes.bool.isRequired
}

export default Todo
