import { createStore } from 'redux';

import { CURRENT_TASK_INPUT_CHANGE, NEW_TASK_SUBMITTED, TASK_FINISHED, TASK_UNFINISHED } from './actions';

function getEmptyStore() {
    return {
        currentTask: "",
        tasks: []
    }
}

function getStateFromLocalStorage() {
    if(localStorage.getItem("todo-app"))
        return JSON.parse(localStorage.getItem("todo-app"));
    
    return getEmptyStore();
}

function saveStateToLocalStorage(state) {
    localStorage.setItem("todo-app", JSON.stringify(state));
}

function todo(state, action) {
    const newState = {...state, tasks: [...state.tasks]};

    switch(action.type) {
        case CURRENT_TASK_INPUT_CHANGE:
        newState.currentTask = action.payload.newCurrentTask;
        break;

        case NEW_TASK_SUBMITTED:
        newState.tasks.push({ name: state.currentTask, finished: false });
        newState.currentTask = "";
        break;

        case TASK_FINISHED:
        newState.tasks[action.payload.id].finished = true;
        break;

        case TASK_UNFINISHED:
        newState.tasks[action.payload.id].finished = false;
        break;
    }

    return newState;
}

const store = createStore(todo, getStateFromLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => saveStateToLocalStorage(store.getState()));
export default store;