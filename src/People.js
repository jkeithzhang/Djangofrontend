import React, { Component } from 'react';
import './App.css';

class People extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  isLoading: true,
	  contacts: []
	};
  }

  componentDidMount() {
	const contactsDate = localStorage.getItem('contactsDate') && new Date(parseInt(localStorage.getItem('contactsDate')))
	const now = new Date();
	const age = Math.round((now - contactsDate)/(1000*60));

	const oldFlag = age>=1;

	if(oldFlag) {
	  this.fetchData();
	} else {
	  console.log(`use local storage that are ${age} minutes old`);
	}
  }

  componentWillUnmount() {

  }

  componentWillUpdate(nextProps, nextState) {
	localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
	localStorage.setItem('contactsDate', Date.now());
  }

  componentWillMount() {
	localStorage.getItem('contacts') && this.setState({
	  contacts: JSON.parse(localStorage.getItem('contacts')),
	  isLoading: false
	})
  }

  fetchData() {
	this.setState({
	  isLoading: true,
	  contacts: []
	})
	const targetUrl = 'https://randomuser.me/api/?results=10'
	fetch(targetUrl)
	.then(response=>response.json())
	.then(parsedJSON=>parsedJSON.results.map(user=>(
		{
		  name:`${user.name.first} ${user.name.last}`,
		  username: `${user.login.username}`,
		  email: `${user.email}`,
		  location: `${user.location.street}, ${user.location.city}`,
		  pic: `${user.picture.medium}`,
		  tel: `${user.phone}`

		}
	  )))
	.then(contacts=>this.setState({
	  contacts,
	  isLoading: false
	}))
	.catch(error=>console.log('parsing failed', error))
  }

  render() {
	const {isLoading, contacts} = this.state;
	return(
	  <div className={`content row ${isLoading? 'is-loading' : ''}`}>
		{
		  contacts.map(contact=> {
			return  <div className="name-card col-md-5 row" key={contact.name}>
				  <div className="col-md-4">
					<img src={contact.pic}/>
				  </div>
				  <div className="col-md-8">
					<span>
					  <p>{contact.name}</p>
					  <p>{contact.email}</p>
					  <p>{contact.tel}</p>
					</span>
					<p>{contact.location.street} {contact.location.city}</p>
				  </div>
				</div>
		  })
		}
		<div className="loader">
		  <p>Content loading...</p>
		</div>
	  </div>
	)
  }
}
export default People;