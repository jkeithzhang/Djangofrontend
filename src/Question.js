import React, { Component } from 'react';
import './App.css';

class Question extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  isLoading: true,
	  questions: []
	};
  }

  componentDidMount() {
	this.fetchData();
  }

  componentWillUnmount() {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentWillMount() {

  }

  fetchData() {
	this.setState({
	  isLoading: true,
	  questions: []
	})
    const targetUrl = 'http://127.0.0.1:8000/polls'
	fetch(targetUrl)
	.then(response=>response.json())
	.then(parsedJSON=>JSON.parse(parsedJSON))
	.then(questions=>this.setState({
	  questions,
	  isLoading: false
	}))
	.catch(error=>console.log('parsing failed', error))
  }

  render() {
	const {isLoading, questions} = this.state;
	return(
		<div>
			{
				questions.map(q=> {
					return  <div className="name-card col-md-6 row" key={q.pk}>
							<a href="">
								{q.fields.question_text}
							</a>
						</div>
				})
			}
		</div>
	)
  }
}
export default Question;