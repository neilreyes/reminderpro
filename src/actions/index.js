import { ADD_REMINDER , DELETE_REMINDER } from '../constants';

// Action creator
export const addReminder = (text) =>{
    const action = {
        type: ADD_REMINDER,
        text
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