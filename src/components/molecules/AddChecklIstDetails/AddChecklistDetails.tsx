import * as React from "react";
import Input from "../../atoms/Input/Input";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './AddCheckListDetails.scss';

interface IAddCheckListDetails {
    addItemPlaceHolder: string,
    saveButtonLabel: string,
    saveChecklist: (Checklist: string) => void;
}

const AddCheckListDetails: React.FC<IAddCheckListDetails> = props => {
    const [addingItem, setAddingItem] = React.useState(false);
    const [Checklist, SetChecklist] = React.useState('');

    const saveChecklistName = () => {
        setAddingItem(false);
        props.saveChecklist(Checklist);
    }

    if (addingItem) {
        return (
            <div className="addChecklistDetails">
                <Input onChange={(e) => SetChecklist(e.target.value)} placeholder={props.addItemPlaceHolder} />
                <div className="addChecklistDetails--panel">
                    <CustomButton className='btn-component--AddAction' onClick={saveChecklistName}>{props.saveButtonLabel}</CustomButton>
                </div>
            </div>
        )
    }
    return (
        <CustomButton className='btn-component--gray' onClick={() => setAddingItem(true)}>
            Add Items
        </CustomButton>
    )
};

export default AddCheckListDetails;
