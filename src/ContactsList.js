import React from 'react';
import Contact from './Contact.js'
import './App.css';

let contacts = [
	{
		name: 'Carter',
		phone: '111 554 1155',
		id: 1
	},
	{
		name: 'Vince',
		phone: '115 555 1155',
		id: 2
	},
	{
		name: 'Kobe',
		phone: '111 556 1155',
		id: 3
	}
]
class ContactsList extends React.Component {
	constructor() {
		super();
		this.state = {
		  search: '',
		  contacts: contacts
		};
	}

	updateSearch(event) {
		this.setState({
			search: event.target.value
		})
	}

	addContact(event) {
		event.preventDefault();
		this.setState({
			contacts: this.state.contacts.concat({
				name: this.refs.name.value,
				phone: this.refs.phone.value,
				id: 4
			})
		})
		this.refs.name.value=''
		this.refs.phone.value=''

	}

	render() {
		let filteredContacts = this.state.contacts.filter((contact)=>{
			return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
		})
		return(
			<div>
			    <div className="input-group">
				  	<input type="text" placeholder="Search" className="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
			    </div>
			    <form onSubmit={this.addContact.bind(this)}>
			    	<input type="text" ref="name" />
			    	<input type="text" ref="phone" />
			    	<button type="submit">Add New Contact</button>
			    </form>
				<ul className="list-group">
					{
						filteredContacts.map((contact)=>{
							return	<Contact contact={contact} key={contact.id} />
						})
					}
				</ul>
			</div>
		)
	}

}
export default ContactsList;