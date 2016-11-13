import React from 'react';

class ContactCreator extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: "",
			phone: ""
		};
	}
	
	handleChange(e) {
		var nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}
	
	handleClick() {
		this.props.onInsert(this.state.name, this.state.phone);
		this.setState({
			name: "",
			phone: ""
		});
	}
	
	render() {
		return (
			<div>
				<legend>이름<input 
				type="text" 
				name="name" 
				placeholder="name" 
				value={this.state.name} 
				onChange={this.handleChange.bind(this)}/></legend>
				<legend>전화번호<input type="text" 
				name="phone" 
				placeholder="'-'빼고 입력해주세요." 
				value={this.state.phone} 
				onChange={this.handleChange.bind(this)}/></legend>
				<button onClick={this.handleClick.bind(this)}>입력</button>
			</div>
		);
	}
}

export default ContactCreator;
