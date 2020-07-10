import * as React from "react";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './CardChecklist.scss';
import AddCheckListDetails from "../AddChecklIstDetails/AddChecklistDetails";

export interface IChecklist {
    checklistId: string,
    checklist: string,
    checklistItems?: Array<string>,
}

interface ICardChecklistProps {
    checklists: Array<IChecklist>,
    addChecklistDetails: (checklist: string, checklistId: string) => void;
}

const CardChecklist: React.FC<ICardChecklistProps> = props => {
    const addCheckList = (checklist: string, checklistId: string) => {
        props.addChecklistDetails(checklist, checklistId);
    }
    return (
        <div className="cardChecklist">
            {
                props.checklists.map(checklist => (
                    <div className="cardChecklist--checklist" key={checklist.checklistId}>
                        <div className="cardChecklist--header">
                            <PlaylistAddCheckIcon />
                            <span style={{ flex: 2, marginLeft: '10px' }}>{checklist.checklist}</span>
                            <CustomButton className="btn-component--gray">Delete</CustomButton>
                        </div>
                        <div className="cardChecklist--listItems">
                            {
                                checklist.checklistItems && checklist.checklistItems.map(checklist => <div className="cardChecklist--Item" key={checklist}>{checklist}</div>)
                            }
                        </div>
                        <AddCheckListDetails addItemPlaceHolder="Add checklist items" saveButtonLabel="save" saveChecklist={(checkListDetails) => addCheckList(checkListDetails, checklist.checklistId)} />
                    </div>
                ))
            }
        </div>
    );
}

export default CardChecklist;
