import { ADD_REMINDER } from '../constants';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

// Reminders Reducer
const reminders = ( state = [], action ) => {
    let reminders = null;

    switch (action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminder as state: ', reminders);

            return reminders;
            break;
        default:
            return state;
    }
}

export default reminders;