import * as React from "react";
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import CloseIcon from "@material-ui/icons/Close";
import {ITaskCardProps} from "../../molecules/TaskCard/TaskCard";
import CardLabels, { ILabels } from "../../molecules/CardLabels/CardLabels";
import CardDescription, {ICardDescriptionProps} from "../../molecules/CardDescription/CardDescription";
import CardChecklist, {IChecklist} from "../../molecules/CardChecklist/CardChecklist";
import './CardDetailsModal.scss';
import Text from "../../atoms/Text/Text";
import CardDetailsActionPanel, {PopOptions} from "../../molecules/CardDetailsActionPanel/CardDetailsActionPanel";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../../redux/Interface";
import {Actions} from "../../../redux/enums";

export interface ICardDetailsModalProps {
    card: ITaskCardProps;
    cardLabels: Array<ILabels>;
    cardDescription: ICardDescriptionProps;
    cardChecklist: Array<IChecklist>;
}
const CardDetailsModal: React.FC<ICardDetailsModalProps> = props => {
    const state = useSelector((state: IState) => state);
    const taskId = useSelector((state: IState) => state.cardSelected.taskId);
    const dispatch = useDispatch();

    const addDescription = (description: string) => {
        state.taskList.map(task => {
            if (task.taskId === taskId) {
                task.taskCards!.map(card => card.cardDescription.description = description);
            }
        });
        return dispatch({type: Actions.ADD_DESCRIPTION, value: state.taskList});
    }

    const actionPanelActions = (param: PopOptions, value: (Array<ILabels> | string)) => {
        state.taskList.map(task => {
            if (task.taskId === taskId) {
                task.taskCards!.map(card => {
                    if (param === 'LABELS') {
                        card.cardLabels = card.cardLabels.concat(value as Array<ILabels>);
                    } else if (param === 'CHECKLIST') {
                        card.cardChecklist = card.cardChecklist.concat([{ checklist: (value as string), checklistId: (value as string).split(' ').join('_') }]);
                    }
                });
            }
        });
        return dispatch({type: `UPDATE_${param}`, value: state.taskList});
    }

    const saveChecklistDetails = (checklistDetails: string, checklistId: string) => {
        state.taskList.map(task => {
            if (task.taskId === taskId) {
                task.taskCards!.map(card => {
                    card.cardChecklist.map(checklist => {
                        if(checklist.checklistId === checklistId) {
                            if (checklist.checklistItems) {
                                checklist.checklistItems.push(checklistDetails);
                            } else {
                                checklist.checklistItems = [checklistDetails];
                            }
                        }
                    })
                })
            }
        });
        return dispatch({type: Actions.ADD_CHECKLIST_DETAILS, value: state.taskList});
    }

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
                        <div style={{ margin: '20px' }}><CardChecklist checklists={props.cardChecklist} addChecklistDetails={saveChecklistDetails} /></div>
                </div>
                <CardDetailsActionPanel onClick={actionPanelActions} />
            </div>
        </div>
    )
}

export default CardDetailsModal;
