import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class TextInput extends Component{

  static propTypes = {
    setTodoEditItem: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    updateTodoNameItem: PropTypes.func.isRequired,
    setTodoCancelEditItem: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired
  };

  state = {
    name: this.props.name
  };

  setTodoEditItem = () => {
    this.props.setTodoEditItem(this.props.index);
  };

  handleKeyDown = (e) => {

    switch (e.key){
      case 'Enter':
        return this.props.updateTodoNameItem(this.props.index, this.state.name)
      case 'Escape':
        return  this.cancelEditing();
    }
  };

  cancelEditing = () => {

    this.setState({ name: this.props.name });
    return this.props.setTodoCancelEditItem(this.props.index);
  };

  handleOnChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleOnBlur = () => {

    return this.cancelEditing();
  };

  handleOver = (e) => {
    console.log('over');
  }

  render(){

      if (!this.props.editing){
        return (
          <label
            onDoubleClick={this.setTodoEditItem}
          >
            {this.state.name}
          </label>
        )
      } else {
        return (
          <input className="change-name"
            type="text"
            onKeyDown={this.handleKeyDown}
            value={this.state.name}
            onChange={this.handleOnChange}
            onBlur={this.handleOnBlur}
            autoFocus={true}
            onMouseOver={this.handleOver}
          />
        )
      }
  }
}
