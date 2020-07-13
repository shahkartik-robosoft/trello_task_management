import * as React from "react";
import ListHeader from "../../molecules/ListHeader/ListHeader";
import TaskCard  from "../../molecules/TaskCard/TaskCard";
import EditIcon from "@material-ui/icons/Edit";
import AddCardActionPanel from "../../molecules/AddCardActionPanel/AddCardActionPanel";
import './ListItem.scss';
import {Actions} from "../../../context/enums";
import {ICardDetailsModalProps} from "../../pages/CardDetailsModal/CardDetailsModal";
import {TrelloContext} from "../../../context/trelloContext";
import {dispatchOnDropCard} from "../../../context/actions";

export interface IListItemProps {
    taskId: string,
    listLabel: string,
    actionButtonLabel: string,
    taskCards?: Array<ICardDetailsModalProps>,
    addCardPlaceHolder: string,
    saveButtonLabel: string,
    onAddCard: (cardName: string, taskId: string) => void;
}
const ListItem: React.FC<IListItemProps> = prop => {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;
    const onDragOver = (e: any) => {
        e.preventDefault();
    }
    const onDropCard = (e: any, destinTaskId: string, index: number) => {
        dispatchOnDropCard(e, destinTaskId, index, state!, dispatch);
    }

    const selectCard = (cardId: string, taskId: string) => {
        return dispatch!({ type: Actions.SELECT_CARD, value: {cardId, taskId }});
    }

    return (
        <div className="listItem">
            <ListHeader taskId={prop.taskId} listLabel={prop.listLabel} />
            <div className="listItem--droppable">
            {
                prop.taskCards && prop.taskCards.map( (taskCard, index) =>
                    <div key={taskCard.card.cardId} onDragOver={e => onDragOver(e)} onDrop={e => onDropCard(e, prop.taskId, index)}>
                        <TaskCard taskId={prop.taskId} cardId={taskCard.card.cardId} onClickCard={() => selectCard(taskCard.card.cardId, prop.taskId)} buttonLabel={taskCard.card.buttonLabel} ><EditIcon /></TaskCard>
                    </div>)
            }
            </div>
            <AddCardActionPanel taskId={prop.taskId} onAddCard={prop.onAddCard} actionButtonLabel={prop.actionButtonLabel} addCardPlaceHolder={prop.addCardPlaceHolder} saveButtonLabel={prop.saveButtonLabel} />
        </div>
    )
}

export default ListItem;