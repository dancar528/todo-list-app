import * as TodoActionTypes from '../actiontypes/todo';

const initialState = {
	todos: [
		{
			name: 'Wash dishes',
			id: 1,
			completed: false,
			editing: false
		},
		{
			name: 'Iron',
			id: 2,
			completed: true,
			editing: false
		}
	],
	selectedFilter: 'ALL'
}

const todosReducer = (state = initialState, action) => {

	switch (action.type){
		case TodoActionTypes.ADD_TODO_ITEM:

			const addTodoItem = [...state.todos, {
				name: action.name,
				id: action.id,
				completed: false,
				editing: false
			}];

			return {
				...state,
				todos: addTodoItem
			}

		case TodoActionTypes.REMOVE_TODO_ITEM:

			const removeTodoItem = [
				...state.todos.slice(0, action.index),
				...state.todos.slice(action.index + 1)
			]

			return {
				...state,
				todos: removeTodoItem
			}

		case TodoActionTypes.SELECT_FILTER:
			return {
				...state,
				selectedFilter: action.filter
			}


		case TodoActionTypes.TOGGLE_TODO_LIST:
			const toggleTodoList = state.todos.map((todo) => {
				return {
					...todo,
					completed: action.completed
				}
			})

			return {
				...state,
				todos: toggleTodoList
			}

		case TodoActionTypes.UPDATE_TODO_SELECTED_ITEM:
			const updateTodoCompleted = state.todos.map((todo, index) => {
				if (index === action.index){
					return {
						...todo,
						completed: !todo.completed
					}
				}
				return todo
			})

			return {
				...state,
				todos: updateTodoCompleted
			}

		case TodoActionTypes.REMOVE_TODO_COMPLETED_LIST:

			const removeTodoCompletedList =  state.todos.filter( todo => !todo.completed);

			return {
				...state,
				todos: removeTodoCompletedList
			}

		case TodoActionTypes.SET_TODO_EDIT_ITEM:
			const setTodoEditItem = state.todos.map((todo, index) => {
				if (index === action.index){
					return {
						...todo,
						editing: true
					}
				}
				return todo
			})

			return {
				...state,
				todos: setTodoEditItem
			}

		case TodoActionTypes.UPDATE_TODO_NAME_ITEM:
			const updateTodoNameItem = state.todos.map((todo, index) => {
				if (index === action.index){
					return {
						...todo,
						name: action.name,
						editing: false
					}
				}
				return todo
			})

			return {
				...state,
				todos: updateTodoNameItem
			}

		case TodoActionTypes.SET_TODO_CANCEL_EDIT_ITEM:

			const setTodoCancelEditItem = state.todos.map((todo, index) => {
				if (index === action.index){
					return {
						...todo,
						editing: false
					}
				}
				return todo
			})

			return {
				...state,
				todos: setTodoCancelEditItem
			}
		default:
			return state;
	}
}

export default todosReducer

/*
{
type: 'ADD_TODO_ITEM', name: 'asdfsdfsdf'
}
*/
