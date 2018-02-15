import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

	static propTypes = {
		toggleTodoList: PropTypes.func.isRequired,
		addTodoItem: PropTypes.func.isRequired
	};

	state = {
		name: ''
	}

	onNameChange = (e) => {
		let name = e.target.value
		this.setState({ name  })
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		this.props.addTodoItem(this.state.name);
		this.setState({ name: '' });
	}

	render(){

		return (
			<div className="App-header">
				<div className="header-textbox">
					<input
						type="checkbox"
						onChange={(e) => this.props.toggleTodoList(e.target.checked)}
					/>
				</div>
				<div className="header-form">
					<form onSubmit={this.onSubmitForm}>
						<input
							type="text"
							value={this.state.name}
							onChange={this.onNameChange}
						/>
					</form>
				</div>
			</div>
		)
	}
}
