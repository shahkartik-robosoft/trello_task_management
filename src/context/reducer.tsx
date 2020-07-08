export const ADD_CARD = 'ADD_CARD';
export const ADD_TASK = 'ADD_TASK';
export const RENAME_TASK = 'RENAME_TASK';

export function reducer(state: any, action: any) {
    switch (action) {
        case ADD_CARD:
        case ADD_TASK:
        case RENAME_TASK:
            return action.value
        default:
            return state
    }
}