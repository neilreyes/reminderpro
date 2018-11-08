import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter((reminder)=>reminder.id !== id);
    console.log('new reduced reminders', reminders);

    return reminders
};

// Reminders Reducer
const reminders = ( state = [], action ) => {
    let reminders = null;

    switch (action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminder as state: ', reminders);

            return reminders;
            break;
        
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);

            return reminders;
            break;

        default:
            return state;
    }
}

export default reminders;