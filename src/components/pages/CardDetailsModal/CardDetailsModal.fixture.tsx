import * as React from "react";
import CardDetailsModal from "./CardDetailsModal";
import { ITaskCardProps } from "../../molecules/TaskCard/TaskCard";
import {labels} from "../../molecules/CardLabels/CardLabels.fixture";
import {checklists} from "../../molecules/CardChecklist/CardChecklist.fixture";

const card: ITaskCardProps = {
    taskId: "1",
    cardId: "1",
    buttonLabel: "card 1"
};


const CardDetailsModalCosmos = () => {
    return (
        <CardDetailsModal card={card}
                          cardLabels={labels}
                          cardDescription={{description: 'Description of card is mentioned here', addDescription: (desc) => {}}}
                          cardChecklist={checklists} />
    )
};

export default CardDetailsModalCosmos;