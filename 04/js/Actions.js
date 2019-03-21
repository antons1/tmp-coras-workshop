export const NEW_TASK_INPUT = "NEW_TASK_INPUT";
export const NEW_TASK_SUBMIT = "NEW_TASK_SUBMIT";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const newTaskChanged = (newText) => ({
    type: NEW_TASK_INPUT,
    payload: { newText }
});

export const newTaskSubmitted = () => ({
    type: NEW_TASK_SUBMIT
});

export const toggleTask = (name) => ({
    type: TOGGLE_TASK,
    payload: { name }
});

export const removeTask = (name) => ({
    type: REMOVE_TASK,
    payload: { name }
});