import * as React from "react";
import LabelList from "./LabelList";
import {initState, TrelloContext} from "../../../context/trelloContext";
import {reducer} from "../../../context/reducer";

const LabelListCosmos = () => {
    const [state, dispatch] = React.useReducer(reducer, initState);
    return (
        <TrelloContext.Provider value={{ state, dispatch}}>
            <div>
                <LabelList taskId="1" textLabel="To Do" />
            </div>
        </TrelloContext.Provider>
        )
}

export default LabelListCosmos;
