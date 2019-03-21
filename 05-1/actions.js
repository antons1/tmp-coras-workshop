export const CURRENT_TASK_INPUT_CHANGE = "CURRENT_TASK_INPUT_CHANGE";
export const NEW_TASK_SUBMITTED = "NEW_TASK_SUBMITTED";
export const TASK_FINISHED = "TASK_FINISHED";
export const TASK_UNFINISHED = "TASK_UNFINISHED";

export function currentTaskInputChange(event) {
    return {
        type: CURRENT_TASK_INPUT_CHANGE,
        payload: { newCurrentTask: event.target.value }
    }
}

export function newTaskSubmitted(event) {
    event.preventDefault();
    return { type: NEW_TASK_SUBMITTED }
}

export function toggleTask(event, id) {
    return {
        type: event.target.checked ? TASK_FINISHED : TASK_UNFINISHED,
        payload: { id }
    }
}