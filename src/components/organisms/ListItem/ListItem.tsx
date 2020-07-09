import * as React from "react";
import ListHeader from "../../molecules/ListHeader/ListHeader";
import TaskCard, { ITaskCardProps } from "../../molecules/TaskCard/TaskCard";
import EditIcon from "@material-ui/icons/Edit";
import AddCardActionPanel from "../../molecules/AddCardActionPanel/AddCardActionPanel";
import './ListItem.scss';
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../../redux/Interface";
import {Actions} from "../../../redux/enums";

export interface IListItemProps {
    taskId: string,
    listLabel: string,
    actionButtonLabel: string,
    taskCards?: Array<ITaskCardProps>,
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
    const onDropCard = (e: any, destinTaskId: string) => {
        const cardId = e.dataTransfer.getData('cardId');
        const originTaskId = e.dataTransfer.getData('taskId');
        const taskCards = state.taskList.filter( task => task.taskId === originTaskId)
            .map(task => task.taskCards)[0];
        const draggedCard = taskCards!.filter(card => card.cardId === cardId)
        const originTaskCards = taskCards!.filter(card => card!.cardId !== cardId);
        state.taskList.map(task => {
            if (task.taskId === destinTaskId) {
                task.taskCards = task.taskCards?.concat(draggedCard);
            }
        })
        state.taskList.map(task => {
            if (task.taskId === originTaskId) {
                task.taskCards = originTaskCards;
            }
        });
        return dispatch({type: Actions.DRAG_DROP_CARD, value: state.taskList});

    }

    return (
        <div className="listItem">
            <ListHeader taskId={prop.taskId} listLabel={prop.listLabel} />
            <div className="listItem--droppable" onDragOver={e => onDragOver(e)} onDrop={e => onDropCard(e, prop.taskId)}>
            {
                prop.taskCards && prop.taskCards.map( taskCard =>
                    <React.Fragment key={taskCard.cardId}>
                        <TaskCard taskId={prop.taskId} cardId={taskCard.cardId} onClickCard={taskCard.onClickCard} buttonLabel={taskCard.buttonLabel} ><EditIcon /></TaskCard>
                    </React.Fragment>)
            }
            </div>
            <AddCardActionPanel taskId={prop.taskId} onAddCard={prop.onAddCard} actionButtonLabel={prop.actionButtonLabel} addCardPlaceHolder={prop.addCardPlaceHolder} saveButtonLabel={prop.saveButtonLabel} />
        </div>
    )
}

export default ListItem;