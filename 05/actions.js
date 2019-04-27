export const ADD_TASK = "ADD_TASK";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const TOGGLE_TASK = "TOGGLE_TASK";

export function addTask(event) {
    event.preventDefault();
    return {
        type: ADD_TASK
    }
}

export function inputChange(event) {
    return {
        type: INPUT_CHANGE,
        payload: { input: event.target.value }
    }
}

export function toggleTask(event, id) {
    return {
        type: TOGGLE_TASK,
        payload: { id }
    }
}