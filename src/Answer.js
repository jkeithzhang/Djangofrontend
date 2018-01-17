import React, { Component } from 'react';
import './App.css';

class Answer extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  isLoading: true,
	  questions: []
	};
  }

  render() {
	const {isLoading, questions} = this.state;
	return(
		<div>
			Hello
		</div>
	)
  }
}
export default Answer;