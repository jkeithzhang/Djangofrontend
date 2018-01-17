import React, { Component } from 'react';
import './App.css';

class Question extends React.Component {
  constructor(props) {
	super(props);
	this._addByOne = this._addByOne.bind(this)
	this.fetchData = this.fetchData.bind(this)//why is this unneccessary, refer: https://github.com/goatslacker/alt/issues/283
	this.state = {
	  isLoading: true,
	  questions: [],
	  count: 0
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

  _addByOne() {
	this.setState({
		count: this.state.count + 1
	})
  }

  render() {
	const {isLoading, questions} = this.state;
	return(
		<div>
			<p>{this.state.count}</p>
			<button onClick={this._addByOne}>Click me!</button>
			{
				questions.map(q=> {
					return  <div className="name-card col-md-6 row" key={q.pk}>
							<a href={'/question/'+ q.pk}>
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