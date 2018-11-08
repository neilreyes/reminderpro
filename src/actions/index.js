import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

// Action creator
export const addReminder = (text, dueDate) =>{
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }

    console.log('action in addReminder: ', action);

    return action;
}

// Delete reminder action creator;
export const deleteReminder = (id) =>{
    const action = {
        type: DELETE_REMINDER,
        id
    }

    console.log('deleting an actions: ', action);

    return action;
}

// Clear reminder action creator;
export const clearReminders = () =>{
    const action = {
        type: CLEAR_REMINDERS,
    }

    return action;
}