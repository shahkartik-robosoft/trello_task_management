import * as React from "react";
import ListHeader from "../../molecules/ListHeader/ListHeader";
import TaskCard, { ITaskCardProps } from "../../molecules/TaskCard/TaskCard";
import EditIcon from "@material-ui/icons/Edit";
import AddCardActionPanel from "../../molecules/AddCardActionPanel/AddCardActionPanel";
import './ListItem.scss';
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../../redux/Interface";
import {Actions} from "../../../redux/enums";
import {ICardDetailsModalProps} from "../../pages/CardDetailsModal/CardDetailsModal";

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
    const state = useSelector((state: IState) => state);
    const dispatch = useDispatch();
    const onDragOver = (e: any) => {
        e.preventDefault();
    }
    const onDropCard = (e: any, destinTaskId: string, index: number) => {
        const cardId = e.dataTransfer.getData('cardId');
        const originTaskId = e.dataTransfer.getData('taskId');
        const taskCards = state.taskList.filter( task => task.taskId === originTaskId)
            .map(task => task.taskCards)[0];
        const draggedCard = taskCards!.filter(card => card.card.cardId === cardId)
        const originTaskCards = taskCards!.filter(card => card!.card.cardId !== cardId);
        state.taskList.map(task => {
            if (task.taskId === destinTaskId) {
                task.taskCards?.splice(index, 0, ...draggedCard);
                // task.taskCards = task.taskCards?.concat(draggedCard);
            }
        })
        state.taskList.map(task => {
            if (task.taskId === originTaskId) {
                task.taskCards = originTaskCards;
            }
        });
        return dispatch({type: Actions.DRAG_DROP_CARD, value: state.taskList});
    }

    const selectCard = (cardId: string, taskId: string) => {
        return dispatch({ type: Actions.SELECT_CARD, value: {cardId, taskId }});
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