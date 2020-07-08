import * as React from "react";
import ListHeader from "../../molecules/ListHeader/ListHeader";
import TaskCard, { ITaskCardProps } from "../../molecules/TaskCard/TaskCard";
import EditIcon from "@material-ui/icons/Edit";
import AddCardActionPanel from "../../molecules/AddCardActionPanel/AddCardActionPanel";
import './ListItem.scss';

export interface IListItemProps {
    listLabel: string,
    actionButtonLabel: string,
    taskCards: Array<ITaskCardProps>,
    addCardPlaceHolder: string,
    saveButtonLabel: string,
}
const ListItem: React.FC<IListItemProps> = prop => {
    return (
        <div className="listItem">
            <ListHeader listLabel={prop.listLabel} />
            {
                prop.taskCards.length > 0 && prop.taskCards.map( taskCard => <TaskCard onClickCard={taskCard.onClickCard} buttonLabel={taskCard.buttonLabel} ><EditIcon /></TaskCard>)
            }
            <AddCardActionPanel actionButtonLabel={prop.actionButtonLabel} addCardPlaceHolder={prop.addCardPlaceHolder} saveButtonLabel={prop.saveButtonLabel} />
        </div>
    )
}

export default ListItem;