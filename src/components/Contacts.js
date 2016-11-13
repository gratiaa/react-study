import React from 'react';
import ReactDOM from 'react-dom';
import ContactCreator from './ContactCreator';
import update from 'react-addons-update';

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			contactData: [
			{
				"name": "Young",
				"phone": "01072471992",
			}],
			selectedKey: -1
		};
	}
	
	_onSelect(key) {
		if(key==this.state.selectedKey) {
			console.log("Key select cancelled");
			this.setState({
				selectedKey: -1
			});
			return;
		}
		
		this.setState({
			selectedKey: key
		});
		console.log(key + " is selected");
	}
	
	_isSelected(key) {
		if(this.state.selectedKey == key) {
			return true;
		} else {
			return false;
		}
	}
	
	_insertContact(name, phone) {
		let newState = update(this.state, {
			contactData: {
				$push: [{"name": name, "phone": phone}]
			}
		});
		this.setState(newState);
	}
	
	render() {
		return (
			<section>
				<h2 style={{
				backgroundColor: "black",
				color: "white",
			}}>Contacts</h2>
				<ul>
					{this.state.contactData.map((contact, i) => {
						return (
							<ContactInfo name={contact.name}
							phone={contact.phone}
							key={i}
							contactKey={i}
							isSelected={this._isSelected.bind(this)(i)}
							onSelect={this._onSelect.bind(this)}/>
						);
					})}
				</ul>
				<ContactCreator onInsert={this._insertContact.bind(this)}/>
			</section>
		);
	}
}

class ContactInfo extends React.Component {
	handleClick() {
		this.props.onSelect(this.props.contactKey);
	}
	
    render() {
		let getStyle = isSelect => {
			if(!isSelect) return;
			
			let style = {
				fontWeight: "bold",
				backgroundColor: "#4efcd8"
			};
			
			return style;
		}
		return (
			<li style={getStyle(this.props.isSelected)} onClick={this.handleClick.bind(this)}>{this.props.name} {this.props.phone}</li>
		);
    }
}

export default Contacts;