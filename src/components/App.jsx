import React, { Component } from 'react';
import '../App.css';

class App extends Component {
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
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
          >
            Add Reminder
          </button>
        </div>
      </div>
    );
  }
}

export default App;
