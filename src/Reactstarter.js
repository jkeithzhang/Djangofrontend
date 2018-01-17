import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Reactstarter extends Component {
  render() {
	return (
	  <div className="App">
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h1 className="App-title">Django + React</h1>
		<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
		  <div className="collapse navbar-collapse" id="navbarNavDropdown">
		    <ul className="navbar-nav">
		      <li className="nav-item active">
		        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/people">People</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/question">Question</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/nameform">Form</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/inputfilter">Input Filter</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/movies">Movies</a>
		      </li>		      
		    </ul>
		  </div>
		</nav>
		</header>
	  </div>
	);
  }
}
export default Reactstarter;
