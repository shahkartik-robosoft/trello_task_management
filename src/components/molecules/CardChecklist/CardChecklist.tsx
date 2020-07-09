import * as React from "react";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './CardChecklist.scss';

export interface IChecklist {
    checklistId: string,
    checklist: string,
    checklistItems: Array<string>
}

interface ICardChecklistProps {
    checklists: Array<IChecklist>
}

const CardChecklist: React.FC<ICardChecklistProps> = props => {
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
                                checklist.checklistItems.length > 0 && checklist.checklistItems.map(checklist => <div className="cardChecklist--Item" key={checklist}>{checklist}</div>)
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CardChecklist;
