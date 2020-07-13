import {IState, ITask} from "./Interface";
import {Actions} from "./enums";
import {PopOptions} from "../components/molecules/CardDetailsActionPanel/CardDetailsActionPanel";
import {ILabels} from "../components/molecules/CardLabels/CardLabels";
import {IChecklist, IChecklistItems} from "../components/molecules/CardChecklist/CardChecklist";

export const dispatchAddCard = (cardName: string, taskId: string, state: IState, dispatch: any) => {
    state.taskList.map((task: ITask) => {
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

export const dispatchAddNewTask = (taskName: string, state: IState, dispatch: any) => {
    const item: ITask = {
        listLabel: taskName,
        taskId: taskName.split(' ').join('_'),
        taskCards: [],
    };
    state.taskList.push(item);
    return dispatch({ type: Actions.ADD_TASK, value: state.taskList });
}

export const dispatchOnDropCard = (e: any, destinTaskId: string, index: number, state: IState, dispatch: any) => {
    const cardId = e.dataTransfer.getData('cardId');
    const originTaskId = e.dataTransfer.getData('taskId');
    const taskCards = state.taskList.filter( task => task.taskId === originTaskId)
        .map(task => task.taskCards)[0];
    const draggedCard = taskCards!.filter(card => card.card.cardId === cardId)
    const originTaskCards = taskCards!.filter(card => card!.card.cardId !== cardId);
    state.taskList.map(task => {
        if (task.taskId === destinTaskId) {
            task.taskCards?.splice(index, 0, ...draggedCard);
        }
    })
    state.taskList.map(task => {
        if (task.taskId === originTaskId) {
            task.taskCards = originTaskCards;
        }
    });
    return dispatch({type: Actions.DRAG_DROP_CARD, value: state.taskList});
}

export const dispatchOnDropTask = (e: any, destinTaskId: string, dropIndex: number, state: IState, dispatch: any) => {
    const taskId =  e.dataTransfer.getData('taskId');
    const taskIndex =  e.dataTransfer.getData('index');
    let destinTaskIndex=0;
    state.taskList.forEach((task, index) => {
        if(task.taskId === destinTaskId) {
            destinTaskIndex = index;
        }
    });
    const task = state.taskList.splice(taskIndex, 1);
    state.taskList.splice(destinTaskIndex, 0, task[0]);
    return dispatch({type: Actions.DRAG_DROP_TASK, value: state.taskList});

}

export const dispatchAddDescription = (description: string, state: IState, dispatch: any) => {
    const { taskId, cardId } = state.cardSelected;
    state.taskList.map(task => {
        if (task.taskId === taskId) {
            task.taskCards!.map(card => {
                if (card.card.cardId === cardId) {
                    card.cardDescription.description = description
                }
            });
        }
    });
    return dispatch({type: Actions.ADD_DESCRIPTION, value: state.taskList});
}

export const dispatchActionPanelActions = (param: PopOptions, value: (Array<ILabels> | string), state: IState, dispatch: any) => {
    const { taskId, cardId } = state.cardSelected;
    state.taskList.map(task => {
        if (task.taskId === taskId) {
            task.taskCards!.map(card => {
                if (card.card.cardId === cardId) {
                    if (param === 'LABELS') {
                        card.cardLabels = card.cardLabels.concat(value as Array<ILabels>);
                    } else if (param === 'CHECKLIST') {
                        card.cardChecklist = card.cardChecklist.concat([{
                            checklist: (value as string),
                            checklistId: (value as string).split(' ').join('_')
                        }]);
                    }
                }
            });
        }
    });
    return dispatch({type: `UPDATE_${param}`, value: state.taskList});
}

export const dispatchSaveChecklistDetails = (checklistDetails: string, checklistId: string, state: IState, dispatch: any) => {
    const { taskId, cardId } = state.cardSelected;
    state.taskList.map(task => {
        if (task.taskId === taskId) {
            task.taskCards!.map(card => {
                if (card.card.cardId === cardId) {
                    card.cardChecklist.map(checklist => {
                        if (checklist.checklistId === checklistId) {
                            const checklistItem: IChecklistItems = {
                                checklist: checklistDetails,
                                checklistItemId: checklistDetails.split(' ').join('_'),
                                isComplete: false
                            }
                            if (checklist.checklistItems) {
                                checklist.checklistItems.push(checklistItem);
                            } else {
                                checklist.checklistItems = [checklistItem];
                            }
                        }
                    })
                }
            })
        }
    });
    return dispatch({type: Actions.ADD_CHECKLIST_DETAILS, value: state.taskList});
}

export const dispatchUpdateChecklistStatus = (itemId: string, checklistId: string, state: IState, dispatch: any) => {
    const { taskId, cardId } = state.cardSelected;
    state.taskList.map(task => {
        if (task.taskId === taskId) {
            task.taskCards!.map(card => {
                if (card.card.cardId === cardId) {
                    card.cardChecklist.map(checklist => {
                        if (checklist.checklistId === checklistId) {
                            checklist.checklistItems?.map(checklistItem => {
                                if (checklistItem.checklistItemId === itemId) {
                                    checklistItem.isComplete = !checklistItem.isComplete;
                                }
                            })
                        }
                    })
                }
            })
        }
    });
    return dispatch({type: Actions.UPDATE_CHECKLIST_STATUS, value: state.taskList});
}

export const dispatchDeleteChecklist = (checklistsId: string, state: IState, dispatch: any) => {
    const { taskId, cardId } = state.cardSelected;
    let filteredChecklist: Array<IChecklist>;
    state.taskList.map(task => {
        if (task.taskId === taskId) {
            task.taskCards!.map(card => {
                filteredChecklist = card.cardChecklist.filter(checklist => checklist.checklistId !== checklistsId);
            })
        }
    })
    state.taskList.map(task => {
        if (task.taskId === taskId) {
            task.taskCards!.map( taskCard => {
                if (taskCard.card.cardId === cardId) {
                    taskCard.cardChecklist = filteredChecklist;
                }
            })
        }
    })
    return dispatch({type: Actions.DELETE_CHECKLIST, value: state.taskList});
};