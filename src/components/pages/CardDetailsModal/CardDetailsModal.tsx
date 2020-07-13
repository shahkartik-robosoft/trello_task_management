import * as React from "react";
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import CloseIcon from "@material-ui/icons/Close";
import {ITaskCardProps} from "../../molecules/TaskCard/TaskCard";
import CardLabels, { ILabels } from "../../molecules/CardLabels/CardLabels";
import CardDescription, {ICardDescriptionProps} from "../../molecules/CardDescription/CardDescription";
import CardChecklist, {IChecklist} from "../../molecules/CardChecklist/CardChecklist";
import './CardDetailsModal.scss';
import Text from "../../atoms/Text/Text";
import CardDetailsActionPanel, {PopOptions} from "../../molecules/CardDetailsActionPanel/CardDetailsActionPanel";
import {TrelloContext} from "../../../context/trelloContext";
import {
    dispatchActionPanelActions,
    dispatchAddDescription, dispatchDeleteChecklist,
    dispatchSaveChecklistDetails, dispatchUpdateChecklistStatus
} from "../../../context/actions";

export interface ICardDetailsModalProps {
    card: ITaskCardProps;
    cardLabels: Array<ILabels>;
    cardDescription: ICardDescriptionProps;
    cardChecklist: Array<IChecklist>;
}
const CardDetailsModal: React.FC<ICardDetailsModalProps> = props => {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;

    const addDescription = (description: string) => {
        dispatchAddDescription(description, state!, dispatch);
    }

    const actionPanelActions = (param: PopOptions, value: (Array<ILabels> | string)) => {
        dispatchActionPanelActions(param, value, state!, dispatch);
    }

    const saveChecklistDetails = (checklistDetails: string, checklistId: string) => {
        dispatchSaveChecklistDetails(checklistDetails, checklistId, state!, dispatch);
    }

    const updateChecklistStatus = (itemId: string, checklistId: string) => {
        dispatchUpdateChecklistStatus(itemId, checklistId, state!, dispatch);
    }

    const deleteChecklist = (checklistsId: string) => {
        dispatchDeleteChecklist(checklistsId, state!, dispatch);
    };

    return (
        <div className="cardDetailsModal">
            <div className="cardDetailsModal--header">
                <RemoveFromQueueIcon/>
                <Text style={{ flex: 2, marginLeft: '20px' }} textLabel={props.card.buttonLabel} color="black" fontSize="xl" />
                <CloseIcon />
            </div>
            <div className="cardDetailsModal--cardDetails">
                <div className="cardDetailsModal--details">
                    <div style={{ margin: '20px', marginLeft: '60px' }}><CardLabels labels={props.cardLabels} /></div>
                    <div style={{ margin: '20px' }}><CardDescription description={props.cardDescription.description} addDescription={addDescription} /></div>
                        <div style={{ margin: '20px' }}><CardChecklist checklists={props.cardChecklist} addChecklistDetails={saveChecklistDetails} updateChecklistStatus={updateChecklistStatus} deleteChecklist={deleteChecklist} /></div>
                </div>
                <CardDetailsActionPanel onClick={actionPanelActions} />
            </div>
        </div>
    )
}

export default CardDetailsModal;
