import * as React from "react";
import {IState} from "./Interface";

interface ItaskState {
    state: IState;
    dispatch: React.Dispatch<any>;
}

export const initState: IState = {
    taskList: [],
    cardSelected: {
        taskId: '',
        cardId: ''
    },
};


export const TrelloContext = React.createContext<ItaskState | null>(null);

