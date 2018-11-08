import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addReminder = this.addReminder.bind(this);
    this.state = {
      text: '',
    };
  }

  handleTextChange(event){
    console.log('handleTextChange :', event.target.value);

    this.setState({
      text: event.target.value,
    });
  }

  addReminder(event){
    console.log('(addReminder) this state: ', this);
    this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <div className="App container">
        <h1>ReminderPro</h1>

        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              type="text"
              onChange={this.handleTextChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.addReminder}
          >
            Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, {addReminder} )(App);
