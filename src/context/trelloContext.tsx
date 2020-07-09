import * as React from "react";
import {IListItemProps} from "../components/organisms/ListItem/ListItem";
import {listItem} from "../components/pages/ItemsView/ItemsView.fixture";
import {ADD_CARD, ADD_TASK, reducer, RENAME_TASK} from "./reducer";

type voidFunction = (value: any) => void;

interface ITrelloContext {
    taskList?: Array<IListItemProps>,
    addCard?: voidFunction,
    addTask?: voidFunction,
    renameTask?: voidFunction,
}



const initialState: ITrelloContext = {
    taskList: listItem,
    /*addCard: (value: any) => {
        console.log('add Card  ', value);
        // dispatch({ type: ADD_CARD, value });
    },
    addTask: (value: any) => {
        console.log('add Task  ', value);
        // dispatch({ type: ADD_TASK, value });
    },
    renameTask: (value: any) => {
        console.log('rename task  ', value);
        // dispatch({ type: RENAME_TASK, value });
    },*/
}

export const TrelloContext = React.createContext<
    {state: ITrelloContext,dispatch: React.Dispatch<any>;}
    >({state: initialState, dispatch: (type: any) => null});

export const TrelloProvider:React.FC = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = {
        tasksList: state.tasksList,
        addCard: (value: any) => {
            console.log('add Card  ', value);
            dispatch({ type: ADD_CARD, value });
        },
        addTask: (value: any) => {
            console.log('add Task  ', value);
            dispatch({ type: ADD_TASK, value });
        },
        renameTask: (value: any) => {
            console.log('rename task  ', value);
            dispatch({ type: RENAME_TASK, value });
        },
    };


    return (
        <TrelloContext.Provider value={{state, dispatch}}>
            {children}
        </TrelloContext.Provider>
    )
}
