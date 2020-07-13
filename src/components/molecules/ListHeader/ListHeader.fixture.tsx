import * as React from "react";
import ListHeader from "./ListHeader";
import './ListHeader.scss';
import {initState, TrelloContext} from "../../../context/trelloContext";
import {reducer} from "../../../context/reducer";

const ListHeaderCosmos = () => {
    const [state, dispatch] = React.useReducer(reducer, initState);
    return (
        <TrelloContext.Provider value={{ state, dispatch}}>
            <div>
                <ListHeader taskId="1" listLabel="list 1" />
            </div>
        </TrelloContext.Provider>
    )
}

export default ListHeaderCosmos;
