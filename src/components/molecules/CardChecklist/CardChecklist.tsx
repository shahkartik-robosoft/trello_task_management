import * as React from "react";
import Checkbox  from '@material-ui/core/Checkbox';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './CardChecklist.scss';
import AddCheckListDetails from "../AddChecklIstDetails/AddChecklistDetails";

export interface IChecklistItems {
    checklistItemId: string,
    checklist: string,
    isComplete: boolean,
}

export interface IChecklist {
    checklistId: string,
    checklist: string,
    checklistItems?: Array<IChecklistItems>,
}

interface ICardChecklistProps {
    checklists: Array<IChecklist>,
    addChecklistDetails: (checklist: string, checklistId: string) => void;
    updateChecklistStatus: (itemId: string, checklistId: string) => void;
    deleteChecklist: (checklistId: string) => void;
}

const CardChecklist: React.FC<ICardChecklistProps> = props => {
    const addCheckList = (checklist: string, checklistId: string) => {
        props.addChecklistDetails(checklist, checklistId);
    }

    const changeStatusOfChecklist = (itemId: string, checklistId: string) => {
        props.updateChecklistStatus(itemId, checklistId);
    }
    return (
        <div className="cardChecklist">
            {
                props.checklists.map(checklist => (
                    <div className="cardChecklist--checklist" key={checklist.checklistId}>
                        <div className="cardChecklist--header">
                            <PlaylistAddCheckIcon />
                            <span className='cardChecklist--label'>{checklist.checklist}</span>
                            <CustomButton className="btn-component--gray" onClick={() => props.deleteChecklist(checklist.checklistId)}>Delete</CustomButton>
                        </div>
                        <div className="cardChecklist--listItems">
                            {
                                checklist.checklistItems && checklist.checklistItems.map(checklistItem => (
                                    <div className="cardChecklist--listItems--Item" key={checklistItem.checklistItemId}>
                                        <Checkbox
                                            checked={checklistItem.isComplete}
                                            onChange={() => changeStatusOfChecklist(checklistItem.checklistItemId, checklist.checklistId)}
                                            name="checkedB"
                                            color="primary"
                                        />
                                        <div className={`cardChecklist--Item ${checklistItem.isComplete && `completed`}`}
                                             key={checklistItem.checklistItemId}>{checklistItem.checklist}</div>
                                    </div>
                                ))
                            }
                            <AddCheckListDetails addItemPlaceHolder="Add checklist items" saveButtonLabel="save" saveChecklist={(checkListDetails) => addCheckList(checkListDetails, checklist.checklistId)} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CardChecklist;
