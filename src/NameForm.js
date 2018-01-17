import React, { Component } from 'react';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();


  }

  render() {
    return (
      <div className="col-md-8 offset-md-2 myForm">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.value} onChange={this.handleChange}/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your input with anyone else.</small>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default NameForm;