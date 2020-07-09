import * as React from "react";
import ListHeader from "../../molecules/ListHeader/ListHeader";
import TaskCard, { ITaskCardProps } from "../../molecules/TaskCard/TaskCard";
import EditIcon from "@material-ui/icons/Edit";
import AddCardActionPanel from "../../molecules/AddCardActionPanel/AddCardActionPanel";
import './ListItem.scss';

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
    return (
        <div className="listItem">
            <ListHeader taskId={prop.taskId} listLabel={prop.listLabel} />
            {
                prop.taskCards && prop.taskCards.map( taskCard =>
                    <React.Fragment key={taskCard.cardId}>
                        <TaskCard cardId={taskCard.cardId} onClickCard={taskCard.onClickCard} buttonLabel={taskCard.buttonLabel} ><EditIcon /></TaskCard>
                    </React.Fragment>)
            }
            <AddCardActionPanel taskId={prop.taskId} onAddCard={prop.onAddCard} actionButtonLabel={prop.actionButtonLabel} addCardPlaceHolder={prop.addCardPlaceHolder} saveButtonLabel={prop.saveButtonLabel} />
        </div>
    )
}

export default ListItem;