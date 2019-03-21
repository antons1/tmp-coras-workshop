import { createStore, combineReducers } from 'redux';

import { NEW_TASK_INPUT, NEW_TASK_SUBMIT, TOGGLE_TASK, REMOVE_TASK } from './Actions';

const defaultState = {
    currentTask: "",
    tasks: []
}

function Todo(state, action) {
    if(state === undefined) return defaultState;

    const { type, payload } = action;
    const newState = Object.assign({}, state);

    switch(type) {
        case NEW_TASK_INPUT:
        const { newText } = payload;
        newState.currentTask = newText;
        break;

        case NEW_TASK_SUBMIT:
        newState.tasks.push({ name: state.currentTask, finished: false });
        newState.currentTask = "";
        break;

        case TOGGLE_TASK:
        const toToggle = state.tasks.findIndex((task) => task.name === payload.name);
        newState.tasks[toToggle].finished = !newState.tasks[toToggle].finished;
        break;

        case REMOVE_TASK:
        const  toRemove = state.tasks.findIndex((task) => task.name === payload.name);
        newState.tasks.splice(toRemove, 1);
        break;
    }

    return JSON.parse(JSON.stringify(newState));
}

const rootReducer = combineReducers({ todo: Todo });
export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
