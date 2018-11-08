import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
  constructor(props){
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addReminder = this.addReminder.bind(this);
    this.deleteReminder = this.deleteReminder.bind(this);
    this.clearReminders = this.clearReminders.bind(this);
    this.renderReminders = this.renderReminders.bind(this);
    this.renderClearReminder = this.renderClearReminder.bind(this);

    this.state = {
      text: '',
      date: '',
    };
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addReminder(event){
    event.preventDefault();
    this.props.addReminder(this.state.text, this.state.date);
    this.setState({
      text: '',
      date: '',
    });
  }

  deleteReminder(id){
    this.props.deleteReminder(id);
  }

  clearReminders(){
    this.props.clearReminders();
  }
  
  renderClearReminder(){
    const { reminders } = this.props;
    
    if( reminders.length > 1 ){
      return (
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.clearReminders}
        >
          Clear All
        </button>
      )
    }
  }

  renderReminders(){
    const { reminders } = this.props;

    return (
      <ul className="list-group col-12">
        {
          reminders.map((reminder, index)=>{
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <h3>{reminder.text}</h3>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
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

        <form
          onSubmit={this.addReminder}
        >
          <div className="form-group">
            <input
              value={this.state.text}
              className="form-control"
              placeholder="I have to..."
              type="text"
              name="text"
              onChange={this.handleInputChange}
            />

            <input
              value={this.state.date}
              className="form-control"
              type="datetime-local"
              name="date"
              onChange={this.handleInputChange}
            />
            <button
              className="btn btn-success"
            >
              Add Reminder
            </button>
          </div>
        </form>
        { this.renderReminders() }
        { this.renderClearReminder() }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    reminders: state,
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders} )(App);
