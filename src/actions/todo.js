import * as TodoActionTypes from '../actiontypes/todo'

let nextTodoId = 3

export const addTodoItem = (name) => {

	return {
		type: TodoActionTypes.ADD_TODO_ITEM,
		id: nextTodoId++,
		name
	}
}

export const removeTodoItem = (index) => {

	return {
		type: TodoActionTypes.REMOVE_TODO_ITEM,
		index
	}
}

export const selectFilter = (filter) => {

	return {
		type: TodoActionTypes.SELECT_FILTER,
		filter
	}
}

export const toggleTodoList = (completed) => {

	return {
		type: TodoActionTypes.TOGGLE_TODO_LIST,
		completed
	}
}

export const updateTodoSelectedItem = (index) => {

	return {
		type: TodoActionTypes.UPDATE_TODO_SELECTED_ITEM,
		index
	}
}

export const updateTodoNameItem = (index, name) => {
	return {
		type: TodoActionTypes.UPDATE_TODO_NAME_ITEM,
		index,
		name
	}
}

export const removeTodoCompletedList = () => {

	return {
		type: TodoActionTypes.REMOVE_TODO_COMPLETED_LIST,
	}
}

export const setTodoEditItem = (index) => {

	return {
		type: TodoActionTypes.SET_TODO_EDIT_ITEM,
		index
	}
}

export const setTodoCancelEditItem = (index) => {
	return {
		type: TodoActionTypes.SET_TODO_CANCEL_EDIT_ITEM,
		index
	}
}
/*export const updateTodoItem = (index, item) => {
	type: UPDATE_TODO_ITEM,
	item
}*/
