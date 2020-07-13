import * as React from "react";
import ListItem  from '../../organisms/ListItem/ListItem';
import './ItemsView.scss';
import AddTaskActionPanel from "../../molecules/AddTaskActionPanel/AddCardActionPanel";
import {IState, ITask} from "../../../context/Interface";
import {Actions} from "../../../context/enums";
import {TrelloContext} from "../../../context/trelloContext";

export interface IItemsProps {
    listItems?: Array<ITask>,
    addNewTask?: (taskName: string) => void;
}

const ItemsView: React.FC<IItemsProps> = props => {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;
    const addCard = (cardName: string, taskId: string) => {
        state!.taskList.map((task: ITask) => {
            if(task.taskId === taskId) {
                const card = {
                    buttonLabel: cardName,
                    cardId: cardName.split(' ').join('_'),
                    taskId,
                };
                const cardDetails = {
                    card,
                    cardLabels: [],
                    cardDescription: {
                        cardDescription: '',
                        addDescription: (description: string) => {},
                    },
                    cardChecklist: [],
                }
                if (task.taskCards) {
                    task.taskCards.push(cardDetails)
                } else {
                    task.taskCards = [cardDetails]
                }
                return dispatch!({type: Actions.ADD_CARD, value: state!.taskList});
            }
        });
    }
    const addNewTask = (taskName: string) => {
        const item: ITask = {
            listLabel: taskName,
            taskId: taskName.split(' ').join('_'),
            taskCards: [],
        };
        state!.taskList.push(item);
        return dispatch!({ type: Actions.ADD_TASK, value: state!.taskList });
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
