import * as React from "react";
import ListItem  from '../../organisms/ListItem/ListItem';
import './ItemsView.scss';
import AddTaskActionPanel from "../../molecules/AddTaskActionPanel/AddCardActionPanel";
import {ITask} from "../../../context/Interface";
import {TrelloContext} from "../../../context/trelloContext";
import {dispatchAddCard, dispatchAddNewTask} from "../../../context/actions";

export interface IItemsProps {
    listItems?: Array<ITask>,
    addNewTask?: (taskName: string) => void;
}

const ItemsView: React.FC<IItemsProps> = props => {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;
    const addCard = (cardName: string, taskId: string) => {
        dispatchAddCard(cardName, taskId, state!, dispatch);
    }
    const addNewTask = (taskName: string) => {
        dispatchAddNewTask(taskName, state!, dispatch);
    }
    return (
        <div className="itemsView">
            {
                state!.taskList && state!.taskList
                .map( (listItem: ITask) => <React.Fragment key={listItem.taskId}>
                                                <ListItem listLabel={listItem.listLabel}
                                                              taskCards={listItem.taskCards}
                                                              onAddCard={addCard}
                                                              taskId={listItem.taskId}
                                                              actionButtonLabel="Add Another Card"
                                                              saveButtonLabel="Add Card"
                                                              addCardPlaceHolder="Enter a Title for this card..." />
                                            </React.Fragment>)
                }
            <AddTaskActionPanel addItemPlaceHolder="Enter list title..." actionButtonLabel="+ Add Another List" saveButtonLabel="Add List" saveTask={addNewTask} />
        </div>
    )
}

export default ItemsView;
