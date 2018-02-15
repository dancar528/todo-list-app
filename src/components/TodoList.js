import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {

		return(

				<ul className="content-list">
					{props.todos.map((todo, index) => (
						<Todo
							key={todo.id}
							name={todo.name}
							removeTodoItem={props.removeTodoItem}
							completed={todo.completed}
							index={index}
							updateTodoSelectedItem={props.updateTodoSelectedItem}
							setTodoEditItem={props.setTodoEditItem}
							updateTodoNameItem={props.updateTodoNameItem}
							setTodoCancelEditItem={props.setTodoCancelEditItem}
							editing={todo.editing}
						/>
					))}
				</ul>

		)
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	removeTodoItem: PropTypes.func.isRequired,
	updateTodoSelectedItem: PropTypes.func.isRequired,
	setTodoEditItem: PropTypes.func.isRequired,
	updateTodoNameItem: PropTypes.func.isRequired,
	setTodoCancelEditItem: PropTypes.func.isRequired
}

export default TodoList
