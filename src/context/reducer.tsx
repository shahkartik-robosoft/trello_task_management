import {Actions} from "./enums";

export function reducer(state: any, action: any) {
    switch (action.type) {
        case Actions.ADD_CARD:
        case Actions.ADD_TASK:
        case Actions.RENAME_TASK:
        case Actions.DRAG_DROP_CARD:
        case Actions.DRAG_DROP_TASK:
        case Actions.ADD_DESCRIPTION:
        case Actions.UPDATE_LABELS:
        case Actions.UPDATE_CHECKLIST:
        case Actions.ADD_CHECKLIST_DETAILS:
        case Actions.UPDATE_CHECKLIST_STATUS:
        case Actions.DELETE_CHECKLIST:
            return {
                ...state,
                taskList: action.value
            }
        case Actions.SELECT_CARD:
            return  {
                ...state,
                cardSelected: action.value
            }
        case Actions.RESET:
            return {
                ...state,
                taskList: []
            }
        default:
            return state
    }
}