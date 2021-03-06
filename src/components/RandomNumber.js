import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {
	updateValue() {
		let value = Math.round(Math.random() * 100);
		this.props.onUpdate(value);
	}
	
	constructor(props) {
		super(props);
		this.updateValue = this.updateValue.bind(this);
	}
	
	render() {
		return (
			<div>
				<h1>Random Number: {this.props.number}</h1>
				<button onClick={this.updateValue}>Randomize</button>
			</div>
		);
	}
}

export default RandomNumber;
