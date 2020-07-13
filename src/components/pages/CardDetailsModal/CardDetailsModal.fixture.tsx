import * as React from "react";
import CardDetailsModal from "./CardDetailsModal";
import { ITaskCardProps } from "../../molecules/TaskCard/TaskCard";
import {labels} from "../../molecules/CardLabels/CardLabels.fixture";
import {checklists} from "../../molecules/CardChecklist/CardChecklist.fixture";
import {reducer} from "../../../context/reducer";
import {initState, TrelloContext} from "../../../context/trelloContext";

const card: ITaskCardProps = {
    taskId: "1",
    cardId: "1",
    buttonLabel: "card 1"
};


const CardDetailsModalCosmos = () => {
    const [state, dispatch] = React.useReducer(reducer, initState);
    return (
        <TrelloContext.Provider value={{ state, dispatch}}>
        <CardDetailsModal card={card}
                          cardLabels={labels}
                          cardDescription={{description: 'Description of card is mentioned here', addDescription: (desc) => {}}}
                          cardChecklist={checklists} />
        </TrelloContext.Provider>
    )
};

export default CardDetailsModalCosmos;