import * as React from "react";
import ListItem  from '../../organisms/ListItem/ListItem';
import './ItemsView.scss';
import AddTaskActionPanel from "../../molecules/AddTaskActionPanel/AddCardActionPanel";
import {IState, ITask} from "../../../redux/Interface";
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../../redux/enums";

export interface IItemsProps {
    listItems: Array<ITask>,
    addNewTask: (taskName: string) => void;
}

const ItemsView: React.FC<IItemsProps> = props => {
    const state = useSelector((state: IState) => state);
    const dispatch = useDispatch();
    const addCard = (cardName: string, taskId: string) => {
        state.taskList.map(task => {
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
                return dispatch({type: Actions.ADD_CARD, value: state.taskList});
            }
        });
    }
    return (
        <div className="itemsView">
            {
                props.listItems && props.listItems
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
            <AddTaskActionPanel addItemPlaceHolder="Enter list title..." actionButtonLabel="+ Add Another List" saveButtonLabel="Add List" saveTask={props.addNewTask} />
        </div>
    )
}

export default ItemsView;
