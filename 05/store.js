import { createStore } from 'redux';

import { ADD_TASK, TOGGLE_TASK, INPUT_CHANGE } from './actions.js'

function initialStore() {
    return {
        currentTask: "",
        tasks: []
    }
}

function reducer(state, action) {
    const newState = Object.assign({}, state);

    switch(action.type) {
        case ADD_TASK:
        newState.tasks.push({ name: newState.currentTask, finished: false });
        newState.currentTask = "";
        return JSON.parse(JSON.stringify(newState));

        case TOGGLE_TASK:
        newState.tasks[action.payload.id].finished = !newState.tasks[action.payload.id].finished;
        return JSON.parse(JSON.stringify(newState));

        case INPUT_CHANGE:
        newState.currentTask = action.payload.input;
        return JSON.parse(JSON.stringify(newState));
    }

    return state;
}

const store = createStore(reducer, initialStore(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;