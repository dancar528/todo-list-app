import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from '../components/TodoList';
import * as TodoActions from '../actions/todo';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {

  setFilter = (todos, filter) => {
    switch (filter){
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed)
      case 'PENDING':
        return todos.filter((todo) => !todo.completed)
      case 'ALL':
      default:
        return todos
    }
  }

  render(){

    const addTodoItem = bindActionCreators(TodoActions.addTodoItem, this.props.dispatch);
    const removeTodoItem = bindActionCreators(TodoActions.removeTodoItem, this.props.dispatch);
    const selectedFilter = bindActionCreators(TodoActions.selectFilter, this.props.dispatch);
    const toggleTodoList = bindActionCreators(TodoActions.toggleTodoList, this.props.dispatch);
    const updateTodoSelectedItem = bindActionCreators(TodoActions.updateTodoSelectedItem, this.props.dispatch);
    const updateTodoNameItem = bindActionCreators(TodoActions.updateTodoNameItem, this.props.dispatch);
    const removeTodoCompletedList = bindActionCreators(TodoActions.removeTodoCompletedList, this.props.dispatch);
    const setTodoEditItem = bindActionCreators(TodoActions.setTodoEditItem, this.props.dispatch);
    const setTodoCancelEditItem = bindActionCreators(TodoActions.setTodoCancelEditItem, this.props.dispatch);

    return (
      <div className="App">
        <div className="container">
          <div className="wrapper">
            <Header
              addTodoItem={addTodoItem}
              toggleTodoList={toggleTodoList}
            />
            <TodoList
              todos={this.setFilter(this.props.todos, this.props.filter)}
              removeTodoItem={removeTodoItem}
              updateTodoSelectedItem={updateTodoSelectedItem}
              setTodoEditItem={setTodoEditItem}
              updateTodoNameItem={updateTodoNameItem}
              setTodoCancelEditItem={setTodoCancelEditItem}
            />
          </div>
          <Footer
            selectedFilter={selectedFilter}
            todos={this.props.todos}
            removeTodoCompletedList={removeTodoCompletedList}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.selectedFilter
  }

}

export default connect(mapStateToProps)(App)
