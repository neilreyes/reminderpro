import { ADD_REMINDER } from '../constants';

// Action creator
export const addReminder = (text) =>{
    const action = {
        type: ADD_REMINDER,
        text
    }

    console.log('action in addReminder', action);

    return action;
}