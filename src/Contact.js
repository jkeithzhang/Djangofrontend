import React from 'react';
import './App.css';

class Contact extends React.Component {
	render() {
		return (
			<li className="list-group-item">{this.props.contact.name} {this.props.contact.phone}</li>
		)
	}

}
export default Contact;