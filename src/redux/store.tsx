import * as React from 'react';
// import { createStore, applyMiddleware, compose } from "redux";
import { createStore, Store as reduxStore } from 'redux';
// import thunkMiddleware from "redux-thunk";
import {IState} from './Interface';
import {Provider} from 'react-redux';
import {Actions} from './enums';

const initState: IState = {
    taskList: [],
    cardSelected: {
        taskId: '',
        cardId: ''
    },
};

export const Store: reduxStore<IState> = createStore(reducer, initState);
function reducer(state = initState, action: any): IState {
    switch (action.type) {
        case Actions.ADD_CARD:
        case Actions.ADD_TASK:
        case Actions.RENAME_TASK:
        case Actions.DRAG_DROP_CARD:
        case Actions.ADD_DESCRIPTION:
        case Actions.UPDATE_LABELS:
        case Actions.UPDATE_CHECKLIST:
        case Actions.ADD_CHECKLIST_DETAILS:
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



export const StoreProvider:React.FC = ({ children }: any) => {
    return <Provider store={Store}>{children}</Provider>
}