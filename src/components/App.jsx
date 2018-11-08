import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addReminder = this.addReminder.bind(this);
    this.deleteReminder = this.deleteReminder.bind(this);
    this.renderReminders = this.renderReminders.bind(this);
    this.state = {
      text: '',
    };
  }

  handleTextChange(event){
    this.setState({
      text: event.target.value,
    });
  }

  addReminder(event){
    this.props.addReminder(this.state.text);
  }

  deleteReminder(id){
    console.log('deleting in application', id);
    console.log('this.props', this.props);

    this.props.deleteReminder(id);
  }

  renderReminders(){
    const { reminders } = this.props;

    return (
      <ul className="list-group col-12">
        {
          reminders.map((reminder, index)=>{
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div
                  className="list-item delete-button"
                  onClick={()=>{this.deleteReminder(reminder.id)}}
                >
                  &#x2715;
                </div>
              </li>
            );
          })
        }
      </ul>
    );
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
        { this.renderReminders() }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    reminders: state,
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder} )(App);
