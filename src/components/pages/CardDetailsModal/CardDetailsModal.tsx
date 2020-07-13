import * as React from "react";
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import CloseIcon from "@material-ui/icons/Close";
import {ITaskCardProps} from "../../molecules/TaskCard/TaskCard";
import CardLabels, { ILabels } from "../../molecules/CardLabels/CardLabels";
import CardDescription, {ICardDescriptionProps} from "../../molecules/CardDescription/CardDescription";
import CardChecklist, {IChecklist, IChecklistItems} from "../../molecules/CardChecklist/CardChecklist";
import './CardDetailsModal.scss';
import Text from "../../atoms/Text/Text";
import CardDetailsActionPanel, {PopOptions} from "../../molecules/CardDetailsActionPanel/CardDetailsActionPanel";
import {Actions} from "../../../context/enums";
import {TrelloContext} from "../../../context/trelloContext";

export interface ICardDetailsModalProps {
    card: ITaskCardProps;
    cardLabels: Array<ILabels>;
    cardDescription: ICardDescriptionProps;
    cardChecklist: Array<IChecklist>;
}
const CardDetailsModal: React.FC<ICardDetailsModalProps> = props => {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;
    const { taskId, cardId } = state!.cardSelected;

    const addDescription = (description: string) => {
        state!.taskList.map(task => {
            if (task.taskId === taskId) {
                task.taskCards!.map(card => {
                    if (card.card.cardId === cardId) {
                        card.cardDescription.description = description
                    }
                });
            }
        });
        return dispatch!({type: Actions.ADD_DESCRIPTION, value: state!.taskList});
    }

    const actionPanelActions = (param: PopOptions, value: (Array<ILabels> | string)) => {
        state!.taskList.map(task => {
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
        return dispatch!({type: `UPDATE_${param}`, value: state!.taskList});
    }

    const saveChecklistDetails = (checklistDetails: string, checklistId: string) => {
        state!.taskList.map(task => {
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
        return dispatch!({type: Actions.ADD_CHECKLIST_DETAILS, value: state!.taskList});
    }

    const updateChecklistStatus = (itemId: string, checklistId: string) => {
        state!.taskList.map(task => {
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
        return dispatch!({type: Actions.UPDATE_CHECKLIST_STATUS, value: state!.taskList});
    }

    const deleteChecklist = (checklistsId: string) => {
        let filteredChecklist: Array<IChecklist>;
        state!.taskList.map(task => {
            if (task.taskId === taskId) {
                    task.taskCards!.map(card => {
                    filteredChecklist = card.cardChecklist.filter(checklist => checklist.checklistId !== checklistsId);
                })
            }
        })
        state!.taskList.map(task => {
            if (task.taskId === taskId) {
                task.taskCards!.map( taskCard => {
                    if (taskCard.card.cardId === cardId) {
                        taskCard.cardChecklist = filteredChecklist;
                    }
                })
            }
        })
        return dispatch!({type: Actions.DELETE_CHECKLIST, value: state!.taskList});
    };

    return (
        <div className="cardDetailsModal">
            <div className="cardDetailsModal--header">
                <RemoveFromQueueIcon/>
                <Text style={{ flex: 2, marginLeft: '20px' }} textLabel={props.card.buttonLabel} color="black" fontSize="xl" />
                <CloseIcon />
            </div>
            <div className="cardDetailsModal--cardDetails">
                <div className="cardDetailsModal--details">
                    <div style={{ margin: '20px', marginLeft: '60px' }}><CardLabels labels={props.cardLabels} /></div>
                    <div style={{ margin: '20px' }}><CardDescription description={props.cardDescription.description} addDescription={addDescription} /></div>
                        <div style={{ margin: '20px' }}><CardChecklist checklists={props.cardChecklist} addChecklistDetails={saveChecklistDetails} updateChecklistStatus={updateChecklistStatus} deleteChecklist={deleteChecklist} /></div>
                </div>
                <CardDetailsActionPanel onClick={actionPanelActions} />
            </div>
        </div>
    )
}

export default CardDetailsModal;
