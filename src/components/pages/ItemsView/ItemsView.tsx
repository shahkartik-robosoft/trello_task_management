import * as React from "react";
import ListItem  from '../../organisms/ListItem/ListItem';
import './ItemsView.scss';
import AddTaskActionPanel from "../../molecules/AddTaskActionPanel/AddCardActionPanel";
import {ITask} from "../../../context/Interface";
import {TrelloContext} from "../../../context/trelloContext";
import {dispatchAddCard, dispatchAddNewTask, dispatchOnDropCard, dispatchOnDropTask} from "../../../context/actions";

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
    const onDragOver = (e: any) => {
        e.preventDefault();
    }
    const onDropTask = (e: any, destinTaskId: string, index: number) => {
        dispatchOnDropTask(e, destinTaskId, index, state!, dispatch);
    }
    const dragTask = (e: any, taskId: string, index: number) => {
        e.dataTransfer.setData("index", index);
        e.dataTransfer.setData("taskId", taskId);
    }
    return (
        <div className="itemsView">
            {
                state!.taskList && state!.taskList
                .map( (listItem: ITask, index: number) => <div draggable={true}
                                                onDragStart={e => dragTask(e, listItem.taskId, index)}
                                                               onDragOver={e => onDragOver(e)}
                                                               onDrop={e => onDropTask(e, listItem.taskId, index)}
                                                style={{ margin: '15px', cursor: 'pointer' }}
                                                key={listItem.taskId}>
                                                <ListItem listLabel={listItem.listLabel}
                                                              taskCards={listItem.taskCards}
                                                              onAddCard={addCard}
                                                              taskId={listItem.taskId}
                                                              actionButtonLabel="Add Another Card"
                                                              saveButtonLabel="Add Card"
                                                              addCardPlaceHolder="Enter a Title for this card..." />
                                            </div>)
                }
            <AddTaskActionPanel addItemPlaceHolder="Enter list title..." actionButtonLabel="+ Add Another List" saveButtonLabel="Add List" saveTask={addNewTask} />
        </div>
    )
}

export default ItemsView;
